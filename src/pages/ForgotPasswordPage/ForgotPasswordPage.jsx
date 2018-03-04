import React, { Component } from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import "./ForgotPasswordPage.css";
import { isEmail } from "validator";
import TextInput from "../../components/Global/TextInput/TextInput";
import { connect } from "react-redux";
import { resetPasswordRequest } from "../../actions/auth";

class ForgotPasswordPage extends Component {
  constructor() {
    super();
    this.state = {
      data: { email: "" },
      validation: {
        emailMessage: "Enter your e-mail address",
        emailErrorMessage: null,
        emailSuccessMessage: null,
        emailValidationState: null
      }
    };
  }
  handleChange = (n, e) => {
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
    }
  };
  submit = e => {
    e.preventDefault();
    this.props.resetPasswordRequest(this.state.data);
  };
  render() {
    const {
      emailMessage,
      emailValidationState,
      emailErrorMessage,
      emailSuccessMessage
    } = this.state.validation;
    const { email } = this.state.data;
    return (
      <div className="Page-Wrapper">
        <AuthForm type="forgot-password" submit={this.submit}>
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
        </AuthForm>
      </div>
    );
  }
}

export default connect(null, { resetPasswordRequest })(ForgotPasswordPage);
