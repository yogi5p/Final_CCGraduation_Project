import React, { Component } from "react";
import {
  Grid,
  Navbar,
  Jumbotron,
  Nav,
  Col,
  NavDropdown,
  MenuItem,
  NavItem,
  Button,
  Form,
  FormGroup,
  FormControl,
  InputGroup,
  ControlLabel
} from "react-bootstrap";
import { Link, Router, Route, withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Amenities from "./Amenities";

class NavBar extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirect) {
      this.props.history.push(nextProps.redirect);
      this.props.redirectTo();
    }
  }

  render() {
    return (
      <div>
        <div id="header">
          {" "}
          <a href="#" id="logo">
            <img
              src="images/HauteDoglogo.png"
              width="310"
              height="114"
              alt=""
            />
          </a>
          <ul class="navigation">
            <li className="active">
              <Link to="/">Home</Link>
              {/* <a href="index.html">Home</a> */}
            </li>
            <li>
              <Link to="/Amenities">Amenities</Link>
              {/* <a href="amenities.html">Amenities</a> */}
            </li>
            <li>
              <Link to="/about">About Us</Link>
              {/* <a href="about.html">About us</a> */}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
