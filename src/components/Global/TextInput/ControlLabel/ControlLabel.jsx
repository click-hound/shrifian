import React, { Component } from "react";
import "./ControlLabel.css";

export default class ControlLabel extends Component {
  render() {
    const { value, placeholder, isFocused } = this.props;
    return (
      <div className="Control-Label">
        <div
          className={`Control-Label-Placeholder ${
            value.length > 0 ? "active" : ""
          } ${isFocused ? "active" : ""}`}
        >
          {placeholder}
        </div>
      </div>
    );
  }
}
