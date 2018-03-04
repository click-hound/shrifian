import React, { Component } from "react";
import "./Divider.css";

export default class Divider extends Component {
  render() {
    return (
      <div
        className={`Divider ${this.props.horizontal ? "Horizontal" : ""} ${
          this.props.vertical ? "Vertical" : ""
        } ${this.props.className}`}
      />
    );
  }
}
