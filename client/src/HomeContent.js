import React, { Component } from "react";
import { connect } from "react-redux";
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
import { Link, Route, withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import NavBar from "./NavBar";
import services from "./services";
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

class HomeContent extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.amenitySelected !== this.props.amenitySelected) {
      this.props.setAmenitySelected("dog parks");
    }
    if (nextProps.redirect) {
      this.props.history.push(nextProps.redirect);
      this.props.redirectTo();
    }
  }

  amenitySearch = () => {
    console.log(this.props.amenitySelected);
    console.log(this.props.zipCode);
    console.log(this.props.amenities);
    console.log(this.props);
    this.props.history.push("/Amenities");
  };

  render() {
    return (
      <div id="body">
        <div class="banner">&nbsp;</div>
        <div id="content">
          <div class="content">
            <ul>
              <li>
                {" "}
                <a href="#">
                  <img src="images/puppy.jpg" width="114" height="160" alt="" />
                </a>
                <h2>What they need</h2>
                <p>
                  Mirum est notare quam littera gothica, quam nunc putamus parum
                  clara m, ant epo suerit li tterar.{" "}
                  <a class="more" href="#">
                    View all
                  </a>
                </p>
              </li>
              <li>
                {" "}
                <a href="#">
                  <img src="images/cat.jpg" width="114" height="160" alt="" />
                </a>
                <h2>Something good</h2>
                <p>
                  Gothica, quam nun c putamus parum claram, anteposuerit
                  litterarum formas humani tatis per seacula.{" "}
                  <a class="more" href="#">
                    View all
                  </a>
                </p>
              </li>
              <li>
                {" "}
                <a href="#">
                  <img src="images/koi.jpg" width="114" height="160" alt="" />
                </a>
                <h2>Kinds of Fish</h2>
                <p>
                  Quam nunc putamus parum claram, antep osuerit litter arum
                  formas humanitatis per seacula quarta.{" "}
                  <a class="more" href="#">
                    View all
                  </a>
                </p>
              </li>
              <li>
                {" "}
                <a href="#">
                  <img src="images/bird.jpg" width="114" height="160" alt="" />
                </a>
                <h2>Fun birds</h2>
                <p>
                  Mirum est notare quam littera gothica , quam nunc putamus
                  parum claram, anteposuerit.{" "}
                  <a class="more" href="#">
                    View all
                  </a>
                </p>
              </li>
            </ul>
          </div>
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

            <div class="section">
              <ul class="navigation">
                <li class="active">
                  <a href="#">Shopping Guides</a>
                </li>
                <li>
                  <a href="#">Discounted Items</a>
                </li>
              </ul>
              <div class="aside">
                <div>
                  <div>
                    <ul>
                      <li>
                        <a href="#">Pet Accesories </a>{" "}
                        <a class="more" href="#">
                          see all
                        </a>
                      </li>
                      <li>
                        <a href="#">Bath Essentials</a>{" "}
                        <a class="more" href="#">
                          see all
                        </a>
                      </li>
                      <li>
                        <a href="#">Pet Food</a>{" "}
                        <a class="more" href="#">
                          see all
                        </a>
                      </li>
                      <li>
                        <a href="#">Pet Vitamins</a>{" "}
                        <a class="more" href="#">
                          see all
                        </a>
                      </li>
                      <li>
                        <a href="#">Pet Needs</a>{" "}
                        <a class="more" href="#">
                          see all
                        </a>
                      </li>
                      <li>
                        <a href="#">Pet Toy and Treats</a>{" "}
                        <a class="more" href="#">
                          see all
                        </a>
                      </li>
                      <li>
                        <a href="#">Pet Supplies</a>{" "}
                        <a class="more" href="#">
                          see all
                        </a>
                      </li>
                      <li>
                        <a href="#">Pet Emergency Kit</a>{" "}
                        <a class="more" href="#">
                          see all
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeContent)
);
