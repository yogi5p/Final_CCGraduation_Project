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
import { Link, Route, withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

class Footer extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirect) {
      this.props.history.push(nextProps.redirect);
      this.props.redirectTo();
    }
  }

  render() {
    return (
      <div className="featured" style={{ width: "100%" }}>
        <div className="table">
          <ul id="horizontal-list">
            <li>
              <a href="#">
                <img
                  src="images/organic-and-chemical-free.jpg"
                  width="300"
                  height="90"
                  alt=""
                  margin="15px"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="images/good-food.jpg"
                  width="300"
                  height="90"
                  alt=""
                  margin="15px"
                />
              </a>
            </li>
            <li className="last">
              <a href="/Amenities">
                <img
                  src="images/pet-grooming.jpg"
                  width="300"
                  height="90"
                  alt=""
                  margin="15px"
                />
              </a>
            </li>
          </ul>
        </div>
        <div id="footnote" style={{ width: "100%" }}>
          <div className="section">
            <a href="/">Copyright @2018 Haute Dawg</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
