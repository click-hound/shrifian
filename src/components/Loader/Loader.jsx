import React, { Component } from "react";
import loader from "../../assets/img/loader.gif";
import "./Loader.css";

export default class Loader extends Component {
  render() {
    return (
      <div
        className="Loader"
        style={{
          // top: this.props.headerHeight,
          width: "100%",
          height: this.props.bodyHeight,
          pointerEvents: "none",
          opacity: this.props.loading ? "1" : "0"
        }}
      >
        <img style={{ height: "50px" }} src={loader} />
        <h4>Loading...</h4>
      </div>
    );
  }
}
