<<<<<<< HEAD
/*
1. Input to query for movies
2. button for onClick to search
3. Take the input and put in the amenity API URL and do the HTTP fetch
4. Redirect to the amenities component with the results form that HTTP fetch
5. Our Details page should still work
*/
import React, { Component } from "react";
import { Col, Grid, Button, Row, Form } from "react-bootstrap";
import services from "./services";
import { connect } from "react-redux";
import AmenityCards from "./AmenityCards";

const mapStateToProps = state => ({
  amenities: state.common.amenities,
  favoriteEvents: state.common.favoriteEvents,
  favoriteParks: state.common.favoriteParks,
  favoriteStores: state.common.favoriteStores,
  favoriteVets: state.common.favoriteVets,
  zipCode: state.common.zipCode,
  amenitySelected: state.common.amenitySelected,
  token: state.common.token
=======
import React, { Component } from "react";
import {
  Grid,
  Navbar,
  Jumbotron,
  Nav,
  Col,
  Row,
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
import services from "./services";
import { connect } from "react-redux";
import AmenityCards from "./AmenityCards";
import "./stylesheets/style.css";

const mapStateToProps = state => ({
  zipCode: state.common.zipCode,
  amenities: state.common.amenities,
  amenitySelected: state.common.amenitySelected,
  user: state.common.user,
  token: state.common.token,
  redirect: state.common.redirect,
  userAuthenticated: state.common.isAuthenticated
>>>>>>> 9972ff7007d2f6ebbf5061a243e1ec903618efe4
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
<<<<<<< HEAD
    })
});

class AmenitiesSearch extends Component {
  // componentWillMount() {
  //   // if (this.props.zipCode) {
  //   console.log(this.props.amenitySelected);
  //   switch (this.props.amenitySelected) {
  //     case "events":
  //       this.props.Events(
  //         this.props.zipCode,
  //         this.props.amenitySelected,
  //         this.props.token
  //       );
  //       break;
  //     case "dog parks":
  //       this.props.Parks(
  //         this.props.zipCode,
  //         this.props.amenitySelected,
  //         this.props.token
  //       );
  //       break;
  //     case "pet stores":
  //       this.props.Events(
  //         this.props.zipCode,
  //         this.props.amenitySelected,
  //         this.props.token
  //       );
  //       break;
  //     case "vet clinics":
  //       this.props.Events(
  //         this.props.zipCode,
  //         this.props.amenitySelected,
  //         this.props.token
  //       );
  //       break;
  //     case "hotels dog":
  //       this.props.Events(
  //         this.props.zipCode,
  //         this.props.amenitySelected,
  //         this.props.token
  //       );
  //       break;
  //     default:
  //       break;
  //   } //end of switch
  //   // } //end if
  // } //end of component mount

  shouldComponentUpdate() {
    if (this.props.zipCode) {
      switch (this.props.amenitySelected) {
        case "events":
=======
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

class AmenitiesSearch extends Component {
  componentWillMount() {
    console.log(this.props.zipCode);
    console.log(this.props.amenitySelected);
    if (this.props.zipCode) {
      switch (this.props.amenitySelected) {
        case "events dog":
>>>>>>> 9972ff7007d2f6ebbf5061a243e1ec903618efe4
          this.props.Events(
            this.props.zipCode,
            this.props.amenitySelected,
            this.props.token
          );
          break;
        case "dog parks":
<<<<<<< HEAD
          console.log(this.props.amenities);
=======
>>>>>>> 9972ff7007d2f6ebbf5061a243e1ec903618efe4
          this.props.Parks(
            this.props.zipCode,
            this.props.amenitySelected,
            this.props.token
          );
          break;
        case "pet stores":
          this.props.Stores(
            this.props.zipCode,
            this.props.amenitySelected,
            this.props.token
          );
          break;
        case "vet clinics":
<<<<<<< HEAD
          this.props.Events(
=======
          this.props.Vets(
>>>>>>> 9972ff7007d2f6ebbf5061a243e1ec903618efe4
            this.props.zipCode,
            this.props.amenitySelected,
            this.props.token
          );
          break;
<<<<<<< HEAD
        case "hotels":
          this.props.Events(
=======
        case "pet friendly hotels":
          this.props.Hotels(
            this.props.zipCode,
            this.props.amenitySelected,
            this.props.token
          );
          break;
        case "dog groomers":
          this.props.Groomers(
>>>>>>> 9972ff7007d2f6ebbf5061a243e1ec903618efe4
            this.props.zipCode,
            this.props.amenitySelected,
            this.props.token
          );
          break;
        default:
          return true;
      } //end of switch
<<<<<<< HEAD
=======
      console.log(this.props.amenities);
>>>>>>> 9972ff7007d2f6ebbf5061a243e1ec903618efe4
      return true;
    } //end if
  } //end of component mount

<<<<<<< HEAD
  render() {
    return (
      <Grid>
        {this.props.zipCode == "" ? (
          <h2>My Amenities List</h2> > <hr />
        ) : (
          <hr />
        )}
        {console.log(this.props.amenities)}
        <AmenityCards
          amenities={this.props.amenities}
          amenitySelected={this.props.amenitySelected}
        />
      </Grid>
=======
  getUpdatedAmenities() {
    // re-query to get updated results
    if (this.props.zipCode) {
      switch (this.props.amenitySelected) {
        case "events dog":
          this.props.Events(
            this.props.zipCode,
            this.props.amenitySelected,
            this.props.token
          );
          break;
        case "dog parks":
          this.props.Parks(
            this.props.zipCode,
            this.props.amenitySelected,
            this.props.token
          );
          break;
        case "pet stores":
          this.props.Stores(
            this.props.zipCode,
            this.props.amenitySelected,
            this.props.token
          );
          break;
        case "vet clinics":
          this.props.Vets(
            this.props.zipCode,
            this.props.amenitySelected,
            this.props.token
          );
          break;
        case "pet friendly hotels":
          this.props.Hotels(
            this.props.zipCode,
            this.props.amenitySelected,
            this.props.token
          );
          break;
        case "dog groomers":
          this.props.Groomers(
            this.props.zipCode,
            this.props.amenitySelected,
            this.props.token
          );
          break;
        default:
          return true;
      } //end of switch
      console.log(this.props.amenities);
      return true;
    } //end if
  }

  amenitySearch = () => {
    console.log(this.props.amenitySelected);
    console.log(this.props.zipCode);
    console.log(this.props.amenities);
    console.log(this.props);
    if (this.props.zipCode === "") this.props.setSearchTerm(this.props.zipCode);
    if (this.props.amenitySelected === "")
      this.props.setAmenitySelected(this.props.amenitySelected);
    this.getUpdatedAmenities();
    this.props.history.push({
      pathname: "/Amenities",
      zipCode: this.props.zipCode,
      amenitySelected: this.props.amenitySelected
    });
  };

  render() {
    return (
      <div id="content">
        <div class="search">
          <InputGroup>
            <FormControl
              name="zipcode"
              value="ZipCode"
              className="searchAmenityText"
              type="input"
              value={this.props.zipCode}
              onChange={event => {
                this.props.setSearchTerm(event.target.value);
              }}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.props.setAmenitySelected(event.target.value);
                }
              }}
            />
            <button
              style={{ position: "relative" }}
              onClick={event => {
                console.log(event);
                event.preventDefault();
                this.props.setAmenitySelected(event.target.value);
                this.amenitySearch();
              }}
            >
              &nbsp;
            </button>
          </InputGroup>
          <form>
            <label id="parks">
              <input
                type="radio"
                name="amenity"
                value="dog parks"
                id="dogparks"
                checked={this.props.amenitySelected === "dog parks"}
                onChange={event => {
                  this.props.setAmenitySelected(event.target.value);
                }}
              />
              Dog Parks
            </label>
            <label id="stores">
              <input
                type="radio"
                name="amenity"
                value="pet stores"
                id="petstores"
                checked={this.props.amenitySelected === "pet stores"}
                onChange={event => {
                  this.props.setAmenitySelected(event.target.value);
                }}
              />
              Pet Stores
            </label>
            <label id="vets">
              <input
                type="radio"
                name="amenity"
                value="vet clinics"
                id="vetclinics"
                checked={this.props.amenitySelected === "vet clinics"}
                onChange={event => {
                  this.props.setAmenitySelected(event.target.value);
                }}
              />
              Vet Clinics
            </label>
            <label id="hotels">
              <input
                type="radio"
                name="amenity"
                value="pet friendly hotels"
                id="hotels"
                checked={this.props.amenitySelected === "pet friendly hotels"}
                onChange={event => {
                  this.props.setAmenitySelected(event.target.value);
                }}
              />
              Pet Friendly Hotels
            </label>
            <label id="groomers">
              <input
                type="radio"
                name="amenity"
                value="dog groomers"
                id="doggroomers"
                checked={this.props.amenitySelected === "dog groomers"}
                onChange={event => {
                  this.props.setAmenitySelected(event.target.value);
                }}
              />
              Dog Groomers
            </label>
          </form>
        </div>
      </div>
>>>>>>> 9972ff7007d2f6ebbf5061a243e1ec903618efe4
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AmenitiesSearch);
