import React, { Component } from "react";
import "./Hero.css";
import after from "../../assets/img/hero-after.png";
import before from "../../assets/img/hero-before.png";
export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: "590px",
      mouseOn: false
    };
  }
  _onMouseMove(e) {
    this.setState({ x: e.pageX, mouseOn: true });
  }
  _onMouseLeave(e) {
      
    this.setState({
      x: "590px",
      mouseOn: false
    });
  }
  render() {
    const { x, mouseOn } = this.state;
    return (
      <div
        className="Hero-Wrapper"
        onMouseMove={this._onMouseMove.bind(this)}
        onMouseLeave={this._onMouseLeave.bind(this)}
      >
        <div className="Hero-After">
          <div className="Hero-After-Background" />
          <div className="Hero-After-Image">
            <img src={after} />
          </div>
        </div>
        <div
          className={`Hero-Before ${mouseOn ? "" : "Return"}`}
          style={{ width: x }}
        >
          <div className="Hero-Before-Background" />
          <div className="Hero-Before-Image">
            <img src={before} />
          </div>
        </div>
      </div>
    );
  }
}
