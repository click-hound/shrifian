import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Button.css";
import { Glyphicon } from "react-bootstrap";

export default class Button extends Component {
  render() {
    const {
      disabled,
      type,
      to,
      className,
      color,
      href,
      onClick,
      height,
      width,
      buttonColor,
      gIcon,
      mIcon,
      faIcon,
      children,
      iconColor
    } = this.props;
    return (
      <Link
        className={`Button-Link ${type} ${
          window.location.pathname == to ? "Active" : "Inactive"
        } ${color} ${className}`}
        to={to || ""}
        href={href || ""}
        onClick={onClick}
        style={{
          height: height || "40px",
          width: `${width} !important` || "auto",
          backgroundColor: buttonColor
        }}
      >
        <div className="Button-Icon-Container">
          {gIcon && (
            <Glyphicon
              className="Button-Icon"
              glyph={gIcon}
              style={{ color: iconColor }}
            />
          )}
          {mIcon && <i className="material-icons">{mIcon}</i>}
          {faIcon && <i className={faIcon} />}
        </div>
        <div
          className={`Button-Text ${mIcon ? "Icon-Present" : ""} ${
            gIcon ? "Icon-Present" : ""
          } ${faIcon ? "Icon-Present" : ""}`}
        >
          {children}
        </div>
      </Link>
    );
  }
}
