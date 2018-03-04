import React, { Component } from "react";

export default class Container extends Component {
  render() {
    const {
      fullwidth,
      contained,
      bgColor,
      flex,
      justifyContent,
      alignItems,
      padding
    } = this.props;
    const style = {
      display: flex ? "flex" : "",
      flexDirection: flex === "column" ? "column" : "row",
      justifyContent: justifyContent,
      alignItems: alignItems
    };
    return (
      <div>
        {!fullwidth && (
          <div
            className={`Fullwidth-Section`}
            style={{
              backgroundColor: bgColor
            }}
          >
            <div
              className={`Contained-Section  ${padding ? "Padding" : ""}`}
              style={style}
            >
              {this.props.children}
            </div>
          </div>
        )}
        {fullwidth && (
          <div style={{ backgroundColor: bgColor }}>
            <div style={style} className={padding ? "Padding" : ""}>
              {this.props.children}
            </div>
          </div>
        )}
      </div>
    );
  }
}
