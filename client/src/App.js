import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
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
import AmenitiesSearch from "./AmenitiesSearch";
import Login from "./Login";
import Signup from "./Signup";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HomeContent from "./HomeContent";
import Amenities from "./Amenities";
import Blog from "./Blog";
import petGallery from "./petGallery";

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
  setSearchTerm: term =>
    dispatch({ type: "SET_SEARCH_ZIPCODE", payload: term }),
  setAmenitySelected: term =>
    dispatch({ type: "SET_AMENITY_SELECTED", payload: term }),
  redirectTo: () => dispatch({ type: "REDIRECT", payload: null })
});

class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirect) {
      this.props.history.push(nextProps.redirect);
      this.props.redirectTo();
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Grid style={{ marginBottom: "75px" }} />
        <Route exact path="/Login" component={Login} />
        <Route path="/Signup" name="Signup" component={Signup} />
        <Route path="/Blog" name="Blog" component={Blog} />
        <Route path="/petGallery" name="Blog" component={petGallery} />
        <Route
          exact
          path="/"
          render={props => (
            <HomeContent
              {...props}
              zipCode={this.props.zipCode}
              amenitySelected={this.props.amenitySelected}
            />
          )}
        />
        <Route
          path="/Amenities"
          render={props => (
            <Amenities
              {...props}
              zipCode={this.props.zipCode}
              amenitySelected={this.props.amenitySelected}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
