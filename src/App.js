/* <------------MODULES------------> */
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Transition } from "react-transition-group";
import PropTypes from "prop-types";

/* <------------REDUX------------> */
import { connect } from "react-redux";

/* <------------COMPONENTS------------> */
import AppContainer from "./components/Global/AppContainer/AppContainer";
import Header from "./components/Header/Header";
import AppBody from "./components/Global/AppBody/AppBody";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import UserRoute from "./routes/UserRoute";
import GuestRoute from "./routes/GuestRoute";
import MenuButton from "./components/Header/MenuButton/MenuButton";

/* <------------PAGES------------> */
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ChangePasswordPage from "./pages/ChangePasswordPage/ChangePasswordPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import SearchListingsPage from "./pages/SearchListingsPage/SearchListingsPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerHeight: 0,
      bodyHeight: 0,
      loading: true,
      pathname: window.location.pathname
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 200);
  }

  render() {
    const { location, isAuthenticated, loading, menuOpen } = this.props;
    return (
      <AppContainer>
        <Header menuOpen={menuOpen} />
        <AppBody loading={loading}>
          <Route exact path="/" component={() => <HomePage />} />
        </AppBody>
      </AppContainer>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email,
    menuOpen: state.app.menuOpen
  };
}

export default connect(mapStateToProps)(App);
