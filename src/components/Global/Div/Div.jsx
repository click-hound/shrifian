import React, { Component } from "react";

export default class D extends Component {
  render() {
    let widthVal = "",
      marginVal = "";
    if (this.props.fullwidth === false) {
      widthVal = "1280px";
      marginVal = "0px auto";
    }

    let style = {
      justifyContent: this.props.justify,
      alignItems: this.props.align,
      flexDirection: this.props.flex == "col" ? "column" : "row",
      display: this.props.flex ? "flex" : "",
      maxWidth: widthVal,
      margin: marginVal,
      flexGrow: this.props.flexGrow
    };

    return (
      <div
        ref={this.props.refId}
        className={`${this.props.className} ${
          this.props.padding ? "Padding" : ""
        } ${this.props.vpadding ? "V-Padding" : ""}`}
        style={style}
      >
        {this.props.children}
      </div>
    );
  }
}
