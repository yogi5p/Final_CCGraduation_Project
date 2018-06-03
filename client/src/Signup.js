import React, { Component } from "react";

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
  ControlLabel
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import services from "./services";

const mapDispatchToProps = dispatch => ({
  register: (username, useremail, password) =>
    dispatch({
      type: "REGISTER",
      payload: services.User.register(username, useremail, password)
    })
});
class Signup extends Component {
  state = {
    username: "",
    useremail: "",
    password: "",
    confirmpassword: ""
  };

  validateForm() {
    if (this.state.useremail.length > 0 && this.state.password.length > 0)
      return this.state.confirmpassword === this.state.password;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  componentWillReceiveProps() {
    // fires when component is receiving new props
  }

  componentDidMount() {
    // fires immediately before the initial render
  }

  render() {
    return (
      <div class="form">
        <Grid>
          <Form horizontal onSubmit={e => this.handleSubmit}>
            <FormGroup>
              <Col sm={10}>
                <ControlLabel>
                  Signup to make the best choices for your favorite paws:
                </ControlLabel>
              </Col>
              <Col sm={10}>
                <ControlLabel>Username : </ControlLabel>
                <FormControl
                  autoFocus
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter text"
                  value={this.state.username}
                  onChange={e => this.handleChange(e)}
                />
              </Col>
              <Col sm={10}>
                <ControlLabel>Email address : </ControlLabel>
                <FormControl
                  type="email"
                  id="useremail"
                  name="useremail"
                  placeholder="Enter email"
                  value={this.state.useremail}
                  onChange={e => this.handleChange(e)}
                />
              </Col>
              <Col sm={10}>
                <ControlLabel>Password : </ControlLabel>
                <FormControl
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter a strong password"
                  value={this.state.password}
                  onChange={e => this.handleChange(e)}
                />
              </Col>
              <Col sm={10}>
                <ControlLabel>Confirm Password : </ControlLabel>
                <FormControl
                  type="confirmpassword"
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder="Confirm password"
                  value={this.state.confirmpassword}
                  onChange={e => this.handleChange(e)}
                />
              </Col>
            </FormGroup>
            <Button type="submit" onClick={e => this.onSubmit(e)}>
              Submit
            </Button>
          </Form>
        </Grid>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Signup);
