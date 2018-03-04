import React, { Component } from "react";
import "./ValidationIcon.css";

export default class ValidationIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: this.props.isFocused
    };
  }

  render() {
    const {
      mIcon,
      faIcon,
      gIcon,
      value,
      isFocused,
      error,
      success,
      validationState
    } = this.props;
    return (
      <div className={`Validation-Icon-Wrapper`}>
        <div
          className={`Validation-Icon-Background ${
            !isFocused && validationState ? "success" : "error"
          } ${validationState == null ? "plain" : "validate"} ${
            isFocused ? "forcePlain" : ""
          }`}
        />
        <div className={`Validation-Icon-Spinner ${isFocused ? "active" : ""}`}>
          <div className="Spinner-Wrapper">
            <i className="fas fa-spinner" />
          </div>
        </div>
        <div
          className={`Validation-Icon-Success ${
            !isFocused && validationState !== null && validationState
              ? "active"
              : ""
          }`}
        >
          <i className="fas fa-check-circle" />
        </div>
        <div
          className={`Validation-Icon-Error ${
            !isFocused && validationState !== null && !validationState
              ? "active"
              : ""
          }`}
        >
          <i className="fas fa-times-circle" />
        </div>
      </div>
    );
  }
}
