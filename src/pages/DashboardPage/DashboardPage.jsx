import React, { Component } from "react";
import "./DashboardPage.css";
import * as actions from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class DashboardPage extends Component {
  render() {
    return (
      <div className="Page-Wrapper">
        <h1 onClick={() => this.props.logout()}>LOGOUT</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(
  DashboardPage
);
