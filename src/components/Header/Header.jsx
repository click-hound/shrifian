import React, { Component } from "react";
import Logo from "../Logo/Logo";
import D from "../Global/Div/Div";
import Button from "../Global/Button/Button";
import { Link } from "react-router-dom";
import { ReactHeight } from "react-height";
import "./Header.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleMenu, changeMenuItem } from "../../actions/app";

class Header extends Component {
  state = {
    menuItems: [
      "profile",
      "work experience",
      "skills",
      "education",
      "software",
      "other achievements",
      "links",
      "interests",
      "contact"
    ]
  };
  render() {
    const {
      isAuthenticated,
      menuOpen,
      changeMenuItem,
      activeItem
    } = this.props;

    let menuItemsJSX = this.state.menuItems.map((e, i, a) => {
      return (
        <div
          className={`MenuItem ${activeItem == e ? "active" : "inactive"}`}
          onClick={() => changeMenuItem(e)}
        >
          <p>{e}</p>
        </div>
      );
    });
    return (
      <div className={`Header-Wrapper ${menuOpen ? "Open" : "Closed"}`}>
        <div className={`Header-Container`}>{menuItemsJSX}</div>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired,
  hasBooks: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user,
    isAuthenticated: !!state.user.email,
    activeItem: state.app.activeItem
  };
}
export default connect(mapStateToProps, { toggleMenu, changeMenuItem })(Header);
