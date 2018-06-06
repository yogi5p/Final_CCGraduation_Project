import React, { Component } from "react";

class Footer extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirect) {
      this.props.history.push(nextProps.redirect);
      this.props.redirectTo();
    }
  }

  render() {
    return (
      <div class="featured" style={{ width: "100%" }}>
        <div id="footnote" style={{ width: "100%" }}>
          <div className="section">
            <a href="/">Copyright @2018 Haute Dawg</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
