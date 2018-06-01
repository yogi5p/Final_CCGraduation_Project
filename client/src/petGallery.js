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
import services from "./services";
import lightbox from "./lightbox.js";

import "./stylesheets/style.css";

import Footer from "./Footer";
import NavBar from "./NavBar";

const mapStateToProps = state => ({
  zipCode: state.common.zipCode,
  amenities: state.common.amenities,
  amenitySelected: state.common.amenitySelected,
  user: state.common.user,
  token: state.common.token,
  redirect: state.common.redirect,
  userAuthenticated: state.common.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  Events: (zipCode, amenity, token) =>
    dispatch({
      type: "EVENTS",
      payload: services.SearchAmenities.getDetails(zipCode, amenity)
    }),
  Stores: (zipCode, amenity, token) =>
    dispatch({
      type: "STORES",
      payload: services.SearchAmenities.getDetails(zipCode, amenity)
    }),
  Parks: (zipCode, amenity, token) =>
    dispatch({
      type: "PARKS",
      payload: services.SearchAmenities.getDetails(zipCode, amenity)
    }),
  Vets: (zipCode, amenity, token) =>
    dispatch({
      type: "VETS",
      payload: services.SearchAmenities.getDetails(zipCode, amenity)
    }),
  Hotels: (zipCode, amenity, token) =>
    dispatch({
      type: "HOTELS",
      payload: services.SearchAmenities.getDetails(zipCode, amenity)
    }),
  Groomers: (zipCode, amenity, token) =>
    dispatch({
      type: "GROOMERS",
      payload: services.SearchAmenities.getDetails(zipCode, amenity)
    }),
  setSearchTerm: term =>
    dispatch({ type: "SET_SEARCH_ZIPCODE", payload: term }),
  setAmenitySelected: term =>
    dispatch({ type: "SET_AMENITY_SELECTED", payload: term }),
  redirectTo: () => dispatch({ type: "REDIRECT", payload: null })
});

class petgallery extends Component {
  render() {
    return (
      <div>
        {console.log("I am in petgallery")}
        <div id="content">
          <div className="content">
            <h2>Haute Dawg Hall of Fame: May Edition</h2>
            <table>
              <tr>Haute Dawg Hall of Fame: May Edition</tr>
              <tr>Click on thumbnails below to make image larger.</tr>

              <tr>
                <td>
                  <a href="images/2.jpg" data-lightbox="dogs">
                    <img
                      src="images/2.jpg"
                      style={{ width: "242px", height: "200px" }}
                    />
                  </a>

                  <a href="images/3.jpg" data-lightbox="dogs">
                    <img
                      src="images/3.jpg"
                      style={{ width: "242px", height: "200px" }}
                    />
                  </a>

                  <a href="images/4.jpg" data-lightbox="dogs">
                    <img
                      src="images/4.jpg"
                      style={{ width: "242px", height: "200px" }}
                    />
                  </a>

                  <a href="images/5.jpg" data-lightbox="dogs">
                    <img
                      src="images/5.jpg"
                      style={{ width: "242px", height: "200px" }}
                    />
                  </a>
                  <a href="images/6.jpg" data-lightbox="dogs">
                    <img
                      src="images/6.jpg"
                      style={{ width: "242px", height: "200px" }}
                    />
                  </a>

                  <a href="images/7.jpg" data-lightbox="dogs">
                    <img
                      src="images/7.jpg"
                      style={{ width: "242px", height: "200px" }}
                    />
                  </a>
                </td>
              </tr>
            </table>

            <div id="footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(petgallery)
);
