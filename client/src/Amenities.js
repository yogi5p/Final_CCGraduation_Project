/*
1. Input to query for amenities
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
import AmenitiesSearch from "./AmenitiesSearch";
import "./stylesheets/style.css";
import Footer from "./Footer";

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
  setSearchTerm: term =>
    dispatch({ type: "SET_SEARCH_ZIPCODE", payload: term }),
  setAmenitySelected: term =>
    dispatch({ type: "SET_AMENITY_SELECTED", payload: term }),
  redirectTo: () => dispatch({ type: "REDIRECT", payload: null })
});

class Amenities extends Component {
  componentWillReceiveProps(nextProps) {
    // fires immediately before the initial render
    console.log(this.props.amenitySelected);
    console.log(this.props.zipCode);
    console.log(this.props.amenities);
    // console.log(nextProps.amenitySelected);
    // console.log(nextProps.zipCode);
    console.log(nextProps);
    if (nextProps.amenitySelected !== this.props.amenitySelected) {
      this.props.setAmenitySelected("dog parks");
    }
    if (nextProps.zipCode !== this.props.zipCode) {
      this.props.setSearchTerm(nextProps.zipCode);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.amenitySelected !== this.props.amenitySelected) {
      switch (this.props.amenitySelected) {
        case "events dog":
          this.props.Events(
            this.props.zipCode,
            this.props.amenitySelected,
            this.props.token
          );
          break;
        case "dog parks":
          console.log(this.props.amenities);
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
        case "hotels dog":
          this.props.Hotels(
            this.props.zipCode,
            this.props.amenitySelected,
            this.props.token
          );
          break;
        case "groomers dog":
          this.props.Groomers(
            this.props.zipCode,
            this.props.amenitySelected,
            this.props.token
          );
          break;
        default:
          return true;
      } //end of switch
    } //end if
    return true;
  } //end of component mount

  render() {
    return (
      <Grid>
        <div style={{ marginTop: "100px" }}>
          <AmenitiesSearch {...this.props} />
        </div>
        {console.log("From Amenities " + this.props.amenities)}
        {this.props.zipCode != "" ? (
          (
            <h2>
              {this.props.amenitySelected} @ {this.props.zipCode}
            </h2>
          ) > <hr />
        ) : (
          <hr />
        )}
        <AmenityCards
          zipCode={this.props.zipCode}
          amenities={this.props.amenities}
          amenitySelected={this.props.amenitySelected}
        />
        <div id="footer">
          <Footer />
        </div>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Amenities);
