import React, { Component } from "react";
import "./Footer.css";

export default class Copyright extends Component {
  render() {
    return (
      <p className={`Copyright ${this.props.className}`}>
        {this.props.children}
      </p>
    );
  }
}
