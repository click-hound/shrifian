import React, { Component } from "react";

export default class AppContainer extends Component {
  render() {
    return <div className="App-Container">{this.props.children}</div>;
  }
}
