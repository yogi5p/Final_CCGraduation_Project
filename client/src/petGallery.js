import React, { Component } from "react";
import { connect } from "react-redux";
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
import { Link, Route, withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import NavBar from "./NavBar";
import services from "./services";
import Footer from "./Footer";
import "./stylesheets/style.css";
import "./lightbox.js";
import "./lightboxjquery.js";
import "./lightbox.min.js";
import Footer from "./Footer";
import NavBar from "./NavBar";

class petGallery extends component {
  render() {
    return (
      <div>
        <div />
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(petGallery)
);
