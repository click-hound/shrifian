import React, { Component } from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import "./RegisterPage.css";
import { isEmail } from "validator";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextInput from "../../components/Global/TextInput/TextInput";

/* <------------ACTIONS------------> */
import { signup } from "../../actions/users";
import { loading } from "../../actions/app";

class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        email: "",
        password: "",
        confirmPassword: ""
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
  handleChange = (n, e) => {
    let validationName = n + "ValidationState",
      errorName = n + "ErrorMessage",
      successName = n + "SuccessMessage";

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
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.data !== prevState.data) {
      if (this.state.data.password !== this.state.data.confirmPassword) {
        this.setState({
          ...this.state,
          validation: {
            ...this.state.validation,
            passwordErrorMessage: "Passwords don't match",
            passwordValidationState: false,
            confirmPasswordErrorMessage: "Passwords don't match",
            confirmPasswordValidationState: false
          }
        });
      } else if (
        this.state.data.password.length < 6 ||
        this.state.data.confirmPassword < 6
      ) {
        this.setState({
          ...this.state,
          validation: {
            ...this.state.validation,
            passwordErrorMessage: "Passwords must be 7 or more characters",
            passwordValidationState: false,
            confirmPasswordErrorMessage:
              "Passwords must be 7 or more characters",
            confirmPasswordValidationState: false
          }
        });
      } else if (
        this.state.data.password == this.state.data.confirmPassword &&
        this.state.data.password !== "" &&
        this.state.data.confirmPassword !== ""
      ) {
        this.setState({
          ...this.state,
          validation: {
            ...this.state.validation,
            passwordSuccessMessage: "Passwords match",
            passwordValidationState: true,
            confirmPasswordSuccessMessage: "Passwords match",
            confirmPasswordValidationState: true
          }
        });
      }
    }
  }

  submit = e => {
    e.preventDefault();
    this.props.loading(true);
    this.props
      .signup(this.state.data)
      .then(() => {
        this.props.history.push("/dashboard");
        this.props.loading(false);
      })
      .catch(err =>
        this.setState(
          {
            ...this.state,
            validation: {
              ...this.state.validation,
              emailErrorMessage: err.response.data.message.text,
              emailValidationState: false
            }
          },
          () => {
            this.props.loading(false);
          }
        )
      );
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
    } = this.state.validation;
    const { email, password, confirmPassword } = this.state.data;
    return (
      <div className="Page-Wrapper">
        <AuthForm type="register" submit={this.submit} disabled={true}>
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
          <TextInput
            faIcon="fas fa-lock"
            type="password"
            name="confirmPassword"
            helperText={confirmPasswordMessage}
            errorMessage={confirmPasswordErrorMessage}
            successMessage={confirmPasswordSuccessMessage}
            validationState={confirmPasswordValidationState}
            placeholder="Confirm Password"
            onChange={this.handleChange}
            value={confirmPassword}
          />
        </AuthForm>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(null, { signup, loading })(RegisterPage);
