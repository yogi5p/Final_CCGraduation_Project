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
  amenities: state.common.amenities,
  zipCode: state.common.zipCode,
  amenitySelected: state.common.amenitySelected,
  token: state.common.token
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
  setAmenitySelected: term =>
    dispatch({ type: "SET_AMENITY_SELECTED", payload: term }),
  setSearchTerm: term => dispatch({ type: "SET_SEARCH_ZIPCODE", payload: term })
});

class AmenitiesSearch extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.amenitySelected !== this.props.amenitySelected) {
      this.props.setAmenitySelected("dog parks");
    }
    if (nextProps.redirect) {
      this.props.history.push(nextProps.redirect);
      this.props.redirectTo();
    }
  }

  // shouldComponentUpdate() {
  //   if (this.props.zipCode) {
  //     switch (this.props.amenitySelected) {
  //       case "events dog":
  //         this.props.Events(
  //           this.props.zipCode,
  //           this.props.amenitySelected,
  //           this.props.token
  //         );
  //         break;
  //       case "dog parks":
  //         this.props.Parks(
  //           this.props.zipCode,
  //           this.props.amenitySelected,
  //           this.props.token
  //         );
  //         break;
  //       case "pet stores":
  //         this.props.Stores(
  //           this.props.zipCode,
  //           this.props.amenitySelected,
  //           this.props.token
  //         );
  //         break;
  //       case "vet clinics":
  //         this.props.Vets(
  //           this.props.zipCode,
  //           this.props.amenitySelected,
  //           this.props.token
  //         );
  //         break;
  //       case "hotels dog":
  //         this.props.Hotels(
  //           this.props.zipCode,
  //           this.props.amenitySelected,
  //           this.props.token
  //         );
  //         break;
  //       case "groomers dog":
  //         this.props.Groomers(
  //           this.props.zipCode,
  //           this.props.amenitySelected,
  //           this.props.token
  //         );
  //         break;
  //       default:
  //         return true;
  //     } //end of switch
  //     return true;
  //   } //end if
  // } //end of component mount

  amenitySearch = () => {
    console.log(this.props.amenitySelected);
    console.log(this.props.zipCode);
    console.log(this.props.amenities);
    // this.props.history.push("/Amenities");
  };

  render() {
    return (
      <div id="sidebar">
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
                  this.amenitySearch();
                }
              }}
            />
          </InputGroup>
          <Button
            onClick={event => {
              console.log(event);
              event.preventDefault();
              this.props.setAmenitySelected(event.target.value);
              this.amenitySearch();
            }}
          >
            &nbsp;
          </Button>
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
                value="hotels dog"
                id="hotels"
                checked={this.props.amenitySelected === "hotels dog"}
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
