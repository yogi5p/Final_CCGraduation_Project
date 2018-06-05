/*
1. Input to query for amenities
2. button for onClick to search
3. Take the input and put in the amenity API URL and do the HTTP fetch
4. Redirect to the amenities component with the results form that HTTP fetch
5. Our Details page should still work
*/
import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import services from "./services";
import { connect } from "react-redux";
import AmenityCards from "./AmenityCards";
import AmenitiesSearch from "./AmenitiesSearch";
import "./stylesheets/style.css";
import Footer from "./Footer";

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

class Amenities extends Component {
  componentWillMount() {
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
    return true;
  } //end of component mount

  render() {
    return (
      <div>
        <div style={{ marginTop: "60px" }}>
          <AmenitiesSearch {...this.props} />
        </div>
        <Grid>
          {console.log("From Amenities " + this.props.amenities)}
          {this.props.zipCode !== "" ? (
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
        </Grid>
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Amenities);
