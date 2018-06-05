import React, { Component } from "react";

import { Link } from "react-router-dom";

class NavBar extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirect) {
      this.props.history.push(nextProps.redirect);
      this.props.redirectTo();
    }
  }

  render() {
    return (
      <div>
        <div id="header">
          <a href="/" id="logo">
            <img
              src="images/HauteDoglogo.png"
              width="310"
              height="114"
              alt=""
            />
          </a>
          <ul className="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Amenities">Amenities</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/petgallery">Pet_Gallery</Link>
            </li>
            <li>
              <a href="contact.html">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
