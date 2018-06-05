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

import { connect } from "react-redux";
import "./stylesheets/style.css";
import Footer from "./Footer";

const mapStateToProps = state => ({
  user: state.common.user,
  token: state.common.token,
  redirect: state.common.redirect,
  userAuthenticated: state.common.isAuthenticated,
  username: state.common.username,
  useremail: state.common.useremail,
  blogCategory: state.common.blogCategory,
  blogtext: state.common.blogtext,
  blogList: state.common.blogList,
  blogid: state.common.blogid
});

const mapDispatchToProps = dispatch => ({
  setBlogCategory: term =>
    dispatch({ type: "SET_BLOG_CATEGORY", payload: term }),
  setBlogText: term => dispatch({ type: "SET_BLOG_TEXT", payload: term }),
  resetBlogArrayValues: term =>
    dispatch({ type: "RESET_BLOG_ARRAY_VALUES", payload: term }),
  setBlogInDatabase: term =>
    dispatch({ type: "SET_BLOG_IN_DATABASE", payload: term }),
  redirectTo: () => dispatch({ type: "REDIRECT", payload: null })
});

class Blog extends Component {
  validateForm() {
    if (this.props.blogtext.length > 0 && this.props.username.length > 0)
      return this.props.blogtext.length > 50;
  }

  handleChange = event => {
    this.props.setBlogText(event.target.value);
  };

  handleCategoryChange = event => {
    this.props.setBlogCategory(event.target.value);
  };

  setTheBlogInDatabase() {
    this.props.setBlogInDatabase(
      this.props.username,
      this.props.useremail,
      this.props.blogCategory,
      this.props.blogtext
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    //add to blogs array
    this.props.blogList.push({
      username: this.props.username,
      useremail: this.props.useremail,
      blogtext: this.props.blogtext,
      blogCategory: this.props.blogCategory,
      blogid: this.props.blogid + 1
    });

    this.props.resetBlogArrayValues(this.props.blogid);
  };

  render() {
    const blogElements = this.props.blogList.map(blogPost => {
      return (
        <li
          style={{
            listStyleType: "none",
            color: "blue",
            border: "1px solid #ccc"
          }}
          key={blogPost.blogid}
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
                  value={this.props.blogCategory}
                  onChange={this.handleCategoryChange}
                  defaultValue={"product"}
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
                  value={this.props.blogtext}
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
            <Row style={{ width: "100%" }}>
              <Col
                className="col-6 col-md-offset-6"
                style={{
                  width: "75%",
                  float: "center",
                  marginLeft: "20px",
                  borderSpacing: "10px",
                  outline: "1px solid #0B3D94"
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
