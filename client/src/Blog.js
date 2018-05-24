/*
1. Input to query for amenities
2. button for onClick to search
3. Take the input and put in the amenity API URL and do the HTTP fetch
4. Redirect to the amenities component with the results form that HTTP fetch
5. Our Details page should still work
*/
import React, { Component } from "react";
import {
  Col,
  Grid,
  Button,
  Row,
  Form,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import services from "./services";
import { connect } from "react-redux";
import AmenityCards from "./AmenityCards";
import AmenitiesSearch from "./AmenitiesSearch";
import "./stylesheets/style.css";
import Footer from "./Footer";

const mapStateToProps = state => ({
  user: state.common.user,
  token: state.common.token,
  redirect: state.common.redirect,
  userAuthenticated: state.common.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  setBlogInDatabase: term =>
    dispatch({ type: "SET_BLOG_IN_DATABASE", payload: term }),
  redirectTo: () => dispatch({ type: "REDIRECT", payload: null })
});

var page_title = "";

class Blog extends Component {
  state = {
    username: "Yogi",
    useremail: "yogitap@gmail.com",
    blogCategory: "",
    blogtext: "",
    blogList: [],
    id: 0
  };

  validateForm() {
    if (this.state.blogtext.length > 0 && this.state.username.length > 0)
      return this.state.blogtext.length > 50;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCategoryChange = event => {
    this.setState({
      blogCategory: event.target.value
    });
  };

  setTheBlogInDatabase() {
    this.props.setBlogInDatabase(
      this.state.username,
      this.state.useremail,
      this.state.blogCategory,
      this.state.blogtext
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    //add to an array
    this.setState({
      blogList: [
        ...this.state.blogList,
        {
          username: this.state.username,
          useremail: this.state.useremail,
          blogtext: this.state.blogtext,
          blogCategory: this.state.blogCategory,
          id: this.state.id + 1
        }
      ],
      username: "",
      useremail: "",
      blogtext: "",
      blogCategory: "",
      id: this.state.id + 1
    });
  };

  render() {
    const blogElements = this.state.blogList.map(blogPost => {
      return (
        <li
          style={{ listStyleType: "square", color: "blue" }}
          key={blogPost.id}
          //   onClick={() => this.highlightPerson(blogPost.id)}
        >
          <b>Name: </b>
          {blogPost.username}
          <br />
          <b>Category: </b>
          {blogPost.blogCategory}
          <br />
          {blogPost.blogtext}
        </li>
      );
    });

    return (
      <div>
        <div style={{ marginTop: "40px", marginLeft: "50px" }}>
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormGroup>
              <Col md={4}>
                <ControlLabel>Blog about your favorite paws:</ControlLabel>
              </Col>
              <Col md={2}>
                <ControlLabel>Category:</ControlLabel>
                <FormControl
                  componentClass="select"
                  value={this.state.blogCategory}
                  onChange={this.handleCategoryChange}
                >
                  <option value="product">Product</option>
                  <option value="medication/vaccines">
                    Medication/Vaccines
                  </option>
                  <option value="event">Event</option>
                  <option value="breeder">Breeder</option>
                </FormControl>
              </Col>
              <Col md={4}>
                <FormControl
                  autoFocus
                  type="text"
                  componentClass="textarea"
                  id="blogtext"
                  name="blogtext"
                  placeholder="Enter text"
                  value={this.state.blogtext}
                  onChange={this.handleChange}
                />
              </Col>
              <Col md={1}>
                <Button type="submit" disable={!this.validateForm()}>
                  Submit
                </Button>
              </Col>
            </FormGroup>
          </Form>{" "}
        </div>
        <hr />
        <div>
          <h3 style={{ fontWeight: "bold", color: "blue" }}>
            Recent Blog Posts
          </h3>
          <Grid>
            <Row style={{ width: "100%", float: "left" }}>
              <Col
                className="col-6 col-md-offset-6"
                style={{
                  width: "65%",
                  float: "center",
                  marginLeft: "10px",
                  borderSpacing: "10px",
                  outline: "2px solid #0B3D94"
                }}
              >
                <ul>{blogElements}</ul>
              </Col>
            </Row>
          </Grid>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
