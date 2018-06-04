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
import petgallery from "./petgallery";

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
              width="310"
              height="114"
              alt=""
            />
          </a>
          <ul className="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Amenities">Amenities</Link>
            </li>
            <li>
              <a href="about.html">About us</a>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <a href="/petgallery">Pet Gallery</a>
            </li>
            <li>
              <a href="contact.html">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
