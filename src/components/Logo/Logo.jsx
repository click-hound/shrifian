import React, { Component } from "react";
import D from "../Global/Div/Div";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import "./Logo.css";
export default class Logo extends Component {
  render() {
    return (
      <Link to="/">
        <D className={`Logo-Wrapper ${this.props.className}`}>
          <img className="Logo" src={logo} />
        </D>
      </Link>
    );
  }
}
