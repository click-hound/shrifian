import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleMenu } from "../../../actions/app";

class MenuButton extends Component {
  render() {
    const { menuOpen, toggleMenu } = this.props;
    return (
      <div
        className={`Menu-Button ${menuOpen ? "Open" : "Closed"}`}
        onClick={() => toggleMenu(!menuOpen)}
      >
        <i
          className="fal fa-bars"
          style={{ color: "white", width: "30px", height: "30px" }}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email,
    menuOpen: state.app.menuOpen
  };
}

export default connect(null, { toggleMenu })(MenuButton);
