/* <------------MODULES------------> */
import React, { Component } from "react";
/* <------------COMPONENTS------------> */
import Hero from "../../components/Hero/Hero";
/* <------------STYLES------------> */
import "./AboutPage.css";

export default class AboutPage extends Component {
  render() {
    return (
      <div
        className={`Page-Wrapper ${
          window.location.pathname !== "/about" ? "Exit" : "Enter"
        }`}
      >
        <Hero />
      </div>
    );
  }
}
