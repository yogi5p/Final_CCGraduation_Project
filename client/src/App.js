import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import "./App.css";
import { Grid, Form } from "react-bootstrap";
import Login from "./Login";
import Signup from "./Signup";
import NavBar from "./NavBar";
import HomeContent from "./HomeContent";
import Amenities from "./Amenities";
import About from "./About";
import Blog from "./Blog";
import petgallery from "./petgallery";

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
  state = {
    fields: {}
  };
  onSubmit = fields => {
    this.setState({ fields });
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <Grid style={{ marginBottom: "75px" }} />
        <Route exact path="/Login" component={Login} />
        <Route path="/Signup" name="Signup" component={Signup} />
        <Route path="/Blog" name="Blog" component={Blog} />
        <Route path="/petgallery" name="petgallery" component={petgallery} />
        <Route path="/About" name="About" component={About} />

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
        <Form onSubmit={fields => this.onSubmit(fields)} />
        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
