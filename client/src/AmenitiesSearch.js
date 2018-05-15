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
          this.props.Events(
            this.props.zipCode,
            this.props.amenitySelected,
            this.props.token
          );
          break;
        case "hotels":
          this.props.Events(
            this.props.zipCode,
            this.props.amenitySelected,
            this.props.token
          );
          break;
        default:
          return true;
      } //end of switch
      return true;
    } //end if
  } //end of component mount

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
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AmenitiesSearch);
