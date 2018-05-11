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
  zipCode: state.common.zipCode,
  amenitySelected: state.common.amenitySelected,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  Events: (zipCode, amenity, token) =>
    dispatch({
      type: "EVENTS",
      payload: services.SearchAmenities.getDetails(
        zipCode,
        this.props.amenitySelected
      )
    }),
  Parks: (zipCode, amenity, token) =>
    dispatch({
      type: "PARKS",
      payload: services.SearchAmenities.getDetails(
        zipCode,
        this.props.amenitySelected
      )
    })
});

class AmenitiesSearch extends Component {
  componentWillMount() {
    // if (this.props.zipCode) {
    console.log(this.props.zipCode);
    switch (this.props.amenitySelected) {
      case "events":
        this.props.Events(
          this.props.zipCode,
          this.props.amenitySelected,
          this.props.token
        );
        break;
      case "dogparks":
        this.props.Parks(
          this.props.zipCode,
          this.props.amenitySelected,
          this.props.token
        );
        break;
      case "petstores":
        this.props.Events(
          this.props.zipCode,
          this.props.amenitySelected,
          this.props.token
        );
        break;
      case "vetclinics":
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
        break;
    } //end of switch
    // } //end if
  } //end of component mount

  shouldComponentUpdate() {
    // if (this.props.zipCode) {
    console.log(this.props.zipCode);
    switch (this.props.amenitySelected) {
      case "events":
        this.props.Events(
          this.props.zipCode,
          this.props.amenitySelected,
          this.props.token
        );
        break;
      case "dogparks":
        this.props.Parks(
          this.props.zipCode,
          this.props.amenitySelected,
          this.props.token
        );
        break;
      case "petstores":
        this.props.Events(
          this.props.zipCode,
          this.props.amenitySelected,
          this.props.token
        );
        break;
      case "vetclinics":
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
        break;
    } //end of switch
    // } //end if
  } //end of component mount

  //   onUnFavoriteClick = zipCode => {
  //     //   this.props.movieUnFavorites(this.zipCode, this.props.token);
  //     services.Movie.delfavorite(zipCode, this.props.token)
  //       .then(resp => resp.json())
  //       .then(payload => this.props.history.push("/"))
  //       .catch(err => console.log(err));
  //   };

  openAmenityClicked = zipCode => {
    this.props.amenityFavorites(this.props.zipCode, this.props.token);
    this.props.history.push("/");
  };

  render() {
    return (
      <Grid>
        {this.props.zipCode == "" ? (
          <h2>My Amenities List</h2> > <hr />
        ) : (
          <hr />
        )}
        <AmenityCards
          amenities={this.props.amenities}
          amenitySelected={this.props.amenitySelected}
          //          openAmenityClicked={this.openAmenityClicked}
        />
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AmenitiesSearch);
