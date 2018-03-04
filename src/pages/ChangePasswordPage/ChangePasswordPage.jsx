import React, { Component } from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { isEmail } from "validator";
import TextInput from "../../components/Global/TextInput/TextInput";
import { connect } from "react-redux";
import { validateToken, resetPassword } from "../../actions/auth";
import "./ChangePasswordPage.css";

class ChangePasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        password: "",
        confirmPassword: "",
        token: this.props.match.params.token
      },
      validation: {
        password: "",
        passwordMessage: "Enter your password",
        passwordErrorMessage: null,
        passwordSuccessMessage: null,
        passwordValidationState: null,
        confirmPassword: "",
        confirmPasswordMessage: "Confirm your password",
        confirmPasswordErrorMessage: null,
        confirmPasswordSuccessMessage: null,
        confirmPasswordValidationState: null
      }
    };
  }
  componentDidMount() {
    this.props.validateToken(this.props.match.params.token);
  }
  handleChange = (n, e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [n]: e.target.value
      }
    });
    // let validationName = n + "ValidationState",
    //   errorName = n + "ErrorMessage",
    //   successName = n + "SuccessMessage";
    // if (n == "email") {
    //   let result = isEmail(e.target.value);
    //   this.setState({
    //     [n]: e.target.value,
    //     [validationName]: result,
    //     [errorName]: result ? "" : "Like this areyou@stupid.com",
    //     [successName]: result ? "Nice! Your parents must be proud" : ""
    //   });
    // } else if (n == "password" || n == "confirmPassword") {
    //   this.setState({
    //     [n]: e.target.value
    //   });
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
    // }
  };
  submit = e => {
    e.preventDefault();
    this.props
      .resetPassword(this.state.data)
      .then(() => this.props.history.push("/login"));
  };
  render() {
    const {
      passwordMessage,
      passwordErrorMessage,
      passwordSuccessMessage,
      passwordValidationState,
      confirmPasswordMessage,
      confirmPasswordErrorMessage,
      confirmPasswordSuccessMessage,
      confirmPasswordValidationState
    } = this.state.validation;
    const { password, confirmPassword } = this.state.data;
    return (
      <div className="Page-Wrapper">
        <AuthForm type="change-password" submit={this.submit}>
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

export default connect(null, { validateToken, resetPassword })(
  ChangePasswordPage
);
