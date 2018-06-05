import React, { Component } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import services from "./services";
import { connect } from "react-redux";
import "./stylesheets/style.css";

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

class AmenitiesSearch extends Component {
  componentWillMount() {
    console.log(this.props.zipCode);
    console.log(this.props.amenitySelected);
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
  } //end of component mount

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
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AmenitiesSearch);
