import React, { Component } from "react";
import D from "../Global/Div/Div";
import "./Hero.css";

export default class Hero2 extends Component {
  render() {
    return (
      <D className="Hero2-Wrapper" flex align="center">
        <D fullwidth={false}>
          <D fullwidth={true} className="Hero2-Container">
            <h1 style={{ color: "white" }}>AHMAD MOHARAM</h1>
          </D>
        </D>
      </D>
    );
  }
}
