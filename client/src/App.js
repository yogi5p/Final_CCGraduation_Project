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
// import NavBar from "./NavBar";

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

  amenitySearch = () => {
    console.log(this.props.amenitySelected);
    console.log(this.props.zipCode);
    console.log(this.props.amenities);
    this.props.history.push("/AmenitiesSearch");
  };

  render() {
    return (
      <div className="App">
        <div id="header">
          {" "}
          <a href="#" id="logo">
            <img
              src="images/HauteDoglogo.png"
              width="310"
              height="114"
              alt=""
            />
          </a>
          <ul class="navigation">
            <li class="active">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="amenities.html">Amenities</a>
            </li>
            <li>
              <a href="about.html">About us</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="petguide.html">PetGuide</a>
            </li>
            <li>
              <a href="contact.html">Contact us</a>
            </li>
          </ul>
        </div>
        <div id="body">
          <div class="banner">&nbsp;</div>
          <div id="content">
            <div class="content">
              <ul>
                <li>
                  {" "}
                  <a href="#">
                    <img
                      src="images/puppy.jpg"
                      width="114"
                      height="160"
                      alt=""
                    />
                  </a>
                  <h2>What they need</h2>
                  <p>
                    Mirum est notare quam littera gothica, quam nunc putamus
                    parum clara m, ant epo suerit li tterar.{" "}
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
                    <img
                      src="images/bird.jpg"
                      width="114"
                      height="160"
                      alt=""
                    />
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
                      onChange={event => {
                        this.props.setAmenitySelected(event.target.value);
                      }}
                    />
                    Hotels
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
        </div>
        <div id="footer">
          <div class="featured">
            <ul>
              <li>
                <a href="#">
                  <img
                    src="images/organic-and-chemical-free.jpg"
                    width="300"
                    height="90"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="images/good-food.jpg"
                    width="300"
                    height="90"
                    alt=""
                  />
                </a>
              </li>
              <li class="last">
                <a href="#">
                  <img
                    src="images/pet-grooming.jpg"
                    width="300"
                    height="90"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <div id="footnote">
            <div class="section">
              <a href="/">Waggs Space</a>
            </div>
          </div>
        </div>
        <Route exact path="/Login" component={Login} />
        <Route path="/Signup" name="Signup" component={Signup} />
        <Route
          exact
          path="/AmenitiesSearch"
          render={props => (
            <AmenitiesSearch
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
