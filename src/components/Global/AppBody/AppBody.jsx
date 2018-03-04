import React, { Component } from "react";
import "./AppBody.css";
import D from "../Div/Div";
import Loader from "../../Loader/Loader";
import Transition from "../../Transition/Transition";

export default class AppBody extends Component {
  render() {
    return (
      <section
        style={{
          height: "auto"
        }}
        className="AppBody"
        ref={elem => (this.Body = elem)}
      >
        <Loader
          loading={this.props.loading}
          bodyHeight={this.props.bodyHeight}
          headerHeight={this.props.headerHeight}
        />
        {this.props.children}
      </section>
    );
  }
}
