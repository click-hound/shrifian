import React, { Component } from "react";
import "./Footer.css";
import D from "../Global/Div/Div";
import Logo from "../Logo/Logo";
import FooterTitle from "./FooterTitle";
import Copyright from "./Copyright";
import Divider from "../Global/Divider/Divider";

export default class Footer extends Component {
  render() {
    return (
      <D fullwidth={true} className="Footer-Wrapper">
        <D fullwidth={false} flex="row">
          <D padding className="Footer-Column" flex="col" flexGrow="1">
            <Logo className="Footer-Logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </D>
          <D padding className="Footer-Column" flex="col" flexGrow="1">
            <FooterTitle className="">OUR SERVICES</FooterTitle>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </D>
          <D padding className="Footer-Column" flex="col" flexGrow="1">
            <FooterTitle className="">CONTACT US</FooterTitle>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </D>
          <D padding className="Footer-Column" flex="col" flexGrow="1">
            <FooterTitle className="">LOCATION</FooterTitle>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </D>
        </D>
        <D vpadding fullwidth={false} flex="row">
          <Divider horizontal />
        </D>
        <D padding fullwidth={false} flex="row">
          <Copyright>
            © 2018{" "}
            <span className="Footer-Company-Name">Ahmad Moharam Realty</span>.
            All Rights Reserved.
          </Copyright>
        </D>
      </D>
    );
  }
}
