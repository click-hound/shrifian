import React, { Component } from "react";
import "./Footer.css";

export default class FooterTitle extends Component {
  render() {
    return (
      <h4 className={`Footer-Title ${this.props.className}`}>
        {this.props.children.toUpperCase()}
      </h4>
    );
  }
}
