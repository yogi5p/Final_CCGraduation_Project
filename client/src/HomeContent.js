import React, { Component } from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import services from "./services";
import Footer from "./Footer";

const mapStateToProps = state => ({
  zipCode: state.common.zipCode,
  amenities: state.common.amenities,
  amenitySelected: state.common.amenitySelected,
  user: state.common.user,
  token: state.common.token,
  redirect: state.common.redirect,
  userAuthenticated: state.common.isAuthenticated,
  useremail: state.common.useremail,
  password: state.common.password
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
  redirectTo: () => dispatch({ type: "REDIRECT", payload: null }),
  login: () =>
    dispatch({
      type: "LOGIN",
      payload: null
    })
});

class HomeContent extends Component {
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.amenitySelected !== this.props.amenitySelected) {
  //     this.props.setAmenitySelected(this.props.amenitySelected);
  //   }
  //   if (nextProps.redirect) {
  //     this.props.history.push(nextProps.redirect);
  //     this.props.redirectTo();
  //   }
  // }

  amenitySearch = () => {
    console.log(this.props.amenitySelected);
    console.log(this.props.zipCode);
    console.log(this.props.amenities);
    console.log(this.props);
    this.props.setAmenitySelected(this.props.amenitySelected);
    this.props.history.push("/Amenities");
  };

  googleLogin = () => {
    this.props.login(this.props.useremail, this.props.password);

    // this.props.history.push("/auth/google");
  };

  render() {
    return (
      <div id="body">
        <div className="banner">&nbsp;</div>

        <div>
          <input
            type="button"
            className="loginBtn loginBtn--google"
            value="Sign in with Google"
            onClick={event => {
              console.log(event);
              event.preventDefault();
              this.googleLogin();
            }}
            // onClick="location.href = '/auth/google'"
          />

          <div id="footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeContent)
);
