import React, { Component } from "react";
import {
  Grid,
  Col,
  Button,
  Form,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import { connect } from "react-redux";
import services from "./services";

const mapDispatchToProps = dispatch => ({
  login: (useremail, password) =>
    dispatch({
      type: "LOGIN",
      payload: services.User.login(useremail, password)
    })
});

class Login extends Component {
  state = {
    useremail: "",
    password: ""
  };

  validateForm() {
    if (this.state.useremail.length > 0 && this.state.password.length > 0)
      return true;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.useremail, this.state.password);
  };

  componentWillReceiveProps() {
    // fires when component is receiving new props
  }

  componentDidMount() {
    // fires immediately before the initial render
  }
  onLogin = () => {
    this.props.history.push("/login/google");
  };
  render() {
    return (
      <div style={{ backgroundColor: "white", alignContent: "center" }}>
        <Grid>
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormGroup>
              <Col sm={10}>
                <ControlLabel>
                  Login to make the best choices for your favorite paws:
                </ControlLabel>
              </Col>
              <Col sm={10}>
                <ControlLabel>Email address : </ControlLabel>
                <FormControl
                  type="email"
                  id="useremail"
                  name="useremail"
                  placeholder="Enter email"
                  value={this.state.useremail}
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <Button type="submit" disabled={!this.validateForm()}>
              Login
            </Button>
            <input
              type="button"
              class="Btn loginBtn"
              value="Sign in with Google"
              onClick={this.onLogin()}
            />
          </Form>
        </Grid>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Login);
