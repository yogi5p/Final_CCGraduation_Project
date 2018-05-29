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
          <a href="#" id="logo">
            <img
              src="images/HauteDoglogo.png"
              width="410"
              height="114"
              alt=""
            />
          </a>
          <ul class="navigation">
            <li>
              <Link to="/index">Home</Link>
            </li>
            <li>
              <Link to="/amenities">Amenities</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/petGallery">Pet Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
