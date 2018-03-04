/* <------------MODULES------------> */
import React, { Component } from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { isEmail } from "validator";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Validator from "validator";

/* <------------ACTIONS------------> */
import { login } from "../../actions/auth";
import { loading } from "../../actions/app";

/* <------------STYLES------------> */
import "./LoginPage.css";

/* <------------COMPONENTS------------> */
import TextInput from "../../components/Global/TextInput/TextInput";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      data: {
        email: "",
        password: ""
      },
      validation: {
        emailMessage: "Enter your e-mail address",
        emailErrorMessage: null,
        emailSuccessMessage: null,
        emailValidationState: null,
        passwordMessage: "Enter your password",
        passwordErrorMessage: null,
        passwordSuccessMessage: null,
        passwordValidationState: null,
        confirmPasswordMessage: "Confirm your password",
        confirmPasswordErrorMessage: null,
        confirmPasswordSuccessMessage: null,
        confirmPasswordValidationState: null
      }
    };
  }

  /* <--- DATA FORM SUBMISSION ---> */

  onSubmit = e => {
    e.preventDefault();
    this.props.loading(true);
    this.props
      .login(this.state.data)
      .then(() => this.props.loading(false))
      .catch(err =>
        this.setState(
          {
            ...this.state,
            validation: {
              ...this.state.validation,
              emailErrorMessage: "Invalid email address or password",
              emailValidationState: false,
              passwordErrorMessage: "Invalid email address or password",
              passwordValidationState: false
            }
          },
          () => {
            this.props.loading(false);
          }
        )
      );
    // .then(this.props.history.push("/dashboard"));
  };

  /* <--- DATA FORM HANDLE CHANGE ---> */

  handleChange = (n, e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [n]: e.target.value
      }
    });

    /* <--- VALIDATION CODE GOES BELOW THIS LINE ---> */

    let validationName = n + "ValidationState",
      errorName = n + "ErrorMessage",
      successName = n + "SuccessMessage";
    if (n == "email") {
      let result = isEmail(e.target.value);
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          [n]: e.target.value
        },
        validation: {
          ...this.state.validation,
          [validationName]: result,
          [errorName]: result ? "" : "Please enter a valid email address",
          [successName]: result ? "Hooray!" : ""
        }
      });
      // } else if (n == "password" || n == "confirmPassword") {
      //   this.setState({ [n]: e.target.value });
      //   const { password, confirmPassword } = this.state;
      //   if (password !== confirmPassword) {
      //     this.setState({
      //       passwordValidationState: false,
      //       confirmPasswordValidationState: false,
      //       passwordErrorMessage: "Passwords don't match",
      //       confirmPasswordErrorMessage: "Passwords don't match"
      //     });
      //   }
      //   if (password == confirmPassword) {
      //     this.setState({
      //       passwordValidationState: true,
      //       confirmPasswordValidationState: true,
      //       passwordErrorMessage: "Passwords match hooray!",
      //       confirmPasswordErrorMessage: "Passwords match hooray!"
      //     });
      //   }
    }

    /* <--- END VALIDATION CODE HERE ---> */
  };

  render() {
    const {
        emailMessage,
        emailValidationState,
        emailErrorMessage,
        emailSuccessMessage,
        passwordMessage,
        passwordErrorMessage,
        passwordSuccessMessage,
        passwordValidationState,
        confirmPasswordMessage,
        confirmPasswordErrorMessage,
        confirmPasswordSuccessMessage,
        confirmPasswordValidationState
      } = this.state.validation,
      { email, password } = this.state.data;
    return (
      <div className="Page-Wrapper">
        <AuthForm type="login" submit={this.onSubmit}>
          <TextInput
            faIcon="fas fa-envelope"
            type="email"
            name="email"
            helperText={emailMessage}
            errorMessage={emailErrorMessage}
            successMessage={emailSuccessMessage}
            validationState={emailValidationState}
            placeholder="Email Address"
            onChange={this.handleChange}
            value={email}
          />
          <TextInput
            faIcon="fas fa-lock"
            type="password"
            name="password"
            helperText={passwordMessage}
            errorMessage={passwordErrorMessage}
            successMessage={passwordSuccessMessage}
            validationState={passwordValidationState}
            placeholder="Password"
            onChange={this.handleChange}
            value={password}
          />
        </AuthForm>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired
};

export default connect(null, { login, loading })(LoginPage);
