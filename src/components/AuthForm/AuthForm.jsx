import React, { Component } from "react";
import "./AuthForm.css";
import D from "../Global/Div/Div";
import Divider from "../Global/Divider/Divider";
import Button from "../Global/Button/Button";
import Logo from "../Logo/Logo";

export default class AuthForm extends Component {
  render() {
    const { type, submit, socialAuth, disabled } = this.props;
    let title;
    let submitButtonText;
    let linksVisible;
    let sAuthVisible;
    let isRegister;
    if (type == "register") {
      title = "Create an Account";
      submitButtonText = "CREATE ACCOUNT";
      linksVisible = false;
      isRegister = true;
    } else if (type == "login") {
      title = "Login";
      submitButtonText = "LOGIN";
      linksVisible = true;
    } else if (type == "forgot-password") {
      title = "Forgot Password";
      submitButtonText = "SEND EMAIL";
      linksVisible = false;
    } else if (type == "change-password") {
      title = "Change Your Password";
      submitButtonText = "CHANGE PASSWORD";
      linksVisible = false;
    } else if (socialAuth) {
      sAuthVisible = true;
    }
    return (
      <div className="Auth-Form-Wrapper">
        <div className="Auth-Form-Header-Container">
          <h3 className="Auth-Form-Header-Title">{title}</h3>
        </div>
        <div className="Auth-Form-Body-Container">
          <form>
            <D flex="col">
              <D className="Auth-Form-Form-Container">{this.props.children}</D>
            </D>
          </form>
        </div>
        <div className="Auth-Form-Footer-Container">
          <div className="Auth-Form-Submit-Row">
            <Button
              onClick={submit}
              className="Auth-Form-Submit-Button"
              type="Primary"
              disabled={disabled}
            >
              {submitButtonText}
            </Button>
          </div>
          <div
            className={`Auth-Form-Footer-Action-Container ${
              isRegister ? "" : "hidden"
            }`}
          >
            <div className="Auth-Form-Sign-Up-Container">
              <p>Have an Account?</p>
              <Button to="/login" type="Plain" className="Auth-Form-Side-Links">
                Login
              </Button>
            </div>
          </div>
          <div
            className={`Auth-Form-Footer-Action-Container ${
              linksVisible ? "" : "hidden"
            }`}
          >
            <Button
              to="/forgot-password"
              type="Plain"
              className="Auth-Form-Side-Links"
            >
              Forgot Password?
            </Button>

            <div className="Auth-Form-Sign-Up-Container">
              <p>No Account?</p>
              <Button
                to="/register"
                type="Plain"
                className="Auth-Form-Side-Links"
              >
                Sign Up
              </Button>
            </div>
          </div>
          <div
            className={`Auth-Form-Footer-Separator-Container ${
              sAuthVisible ? "" : "hidden"
            }`}
          >
            <div className="Auth-Form-Footer-Text-Container">
              <p className="Auth-Form-Footer-Separator-Text">
                <i>or connect with</i>
              </p>
            </div>
          </div>
          <div
            className={`Auth-Form-Footer-Additional-Actions-Container ${
              sAuthVisible ? "" : "hidden"
            }`}
          >
            <Button
              className="RG-Button"
              type="Primary"
              faIcon="fab fa-facebook-f"
              buttonColor="#3B5998"
            >
              FACEBOOK
            </Button>
            <Button
              className="RG-Button"
              type="Primary"
              faIcon="fab fa-twitter"
              buttonColor="#0084b4"
            >
              TWITTER
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
