import React, { Component } from "react";
import "./InputIcon.css";

export default class InputIcon extends Component {
  render() {
    const {
      className,
      type,
      value,
      onChange,
      placeholder,
      message,
      validationState,
      mIcon,
      faIcon,
      gIcon,
      gIconColor,
      iconClassName,
      name,
      isFocused
    } = this.props;
    return (
      <div className="Input-Icon-Wrapper">
        <div
          className={`Input-Icon-Container ${
            value.length > 0 ? "active" : ""
          } ${isFocused ? "active" : ""}`}
        >
          <i id="Icon" className={faIcon} />
          {placeholder}
        </div>
      </div>
    );
  }
}
