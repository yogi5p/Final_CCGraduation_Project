import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Col, Grid, Row } from "react-bootstrap";

import services from "./services";
import "./stylesheets/style.css";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./stylesheets/carousel.css";

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
      <div style={{ marginTop: "100px" }}>
        <h2 style={{ textAlign: "center", marginLeft: "75px" }} />
        <h1 style={{ textAlign: "center", marginLeft: "75px" }}>June: </h1>
        <h2 style={{ textAlign: "center", marginLeft: "75px" }}>
          Waggies of the month{""}
        </h2>
        <Grid>
          <Col>
            <Carousel />
          </Col>
        </Grid>

        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(petgallery)
);
