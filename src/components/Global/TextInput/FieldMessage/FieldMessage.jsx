import React, { Component } from "react";
import "./FieldMessage.css";

export default class FieldMessage extends Component {
  render() {
    const {
      helperText,
      errorMessage,
      successMessage,
      validationState,
      isFocused
    } = this.props;
    return (
      <div className="Field-Message-Wrapper">
        <div
          className={`Message-Wrapper ${
            isFocused || validationState == null ? "active" : ""
          }`}
        >
          <div className={`Field-Message-Helper-Text-Wrapper`}>
            <p>{helperText}</p>
          </div>
        </div>
        <div className={`Error-Wrapper ${isFocused ? "" : "active"}`}>
          <div
            className={`Field-Message-Error-Message-Wrapper ${
              validationState ? "" : "active"
            }`}
          >
            <p>{errorMessage}</p>
          </div>
        </div>
        <div className={`Success-Wrapper ${isFocused ? "" : "active"}`}>
          <div
            className={`Field-Message-Success-Message-Wrapper ${
              validationState ? "active" : ""
            }`}
          >
            <p>{successMessage}</p>
          </div>
        </div>
      </div>
    );
  }
}
