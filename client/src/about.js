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
  ButtonToolbar,
  ControlLabel,
  Row
} from "react-bootstrap";
import { Link, Route, withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import NavBar from "./NavBar";
import services from "./services";
import Footer from "./Footer";
import Signup from "./Signup";

class About extends Component {
  render() {
    return (
      <div style={{ marginTop: "150px" }}>
        <h2 style={{ textAlign: "center", marginLeft: "75px" }}>
          About The Company
        </h2>
        <p style={{ textAlign: "center", marginLeft: "75px" }}>
          Our goal is to provide fast and convient information about your
          nearest dog parks, hotels, grooming facilities.{" "}
        </p>
        <p style={{ textAlign: "center", marginLeft: "75px" }}>
          In addition, to create a platform for dog lovers to communicate, make
          play dates, and have a open based discussion on what your four-legged
          children like best.{" "}
        </p>
        <br />
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <img
                src="images/Yogi_Profile_Pic.jpg"
                alt="Yogi_Profile_pic"
                style={{ width: "242px", height: "200px" }}
              />
              <h3>Yogita Patil</h3>
              <p>
                Web developer - Working on web developement of Rover like app to
                manage your pet's needs. Past: Sr. Consulting Architect – Worked
                on the Log Insight CORD team, doing content pack management,
                development and helping customers write and publish good quality
                content packs, in addition to helping customers with log insight
                product issues. In the past at VMware and earlier at
                IBM-Rational I have been a software QA tester (white & black box
                for front end UI testing). I have also been involved in writing
                white papers, software training and development of Rational
                tools.
              </p>
              <p>
                <Button bsStyle="primary">
                  <a href="https://github.com/yogi5p">Github</a>
                </Button>&nbsp;
                <Button bsStyle="default">
                  <a
                    href="mailto:nitinyogi@msn.com?Subject=I%20Want%20To%20Hire%20YOU"
                    target="_top"
                  >
                    Send Email
                  </a>
                </Button>
              </p>
            </Col>
            <Col xs={6} md={4}>
              <img
                src="images/chelsea.jpg"
                alt="Yogi_Profile_pic"
                style={{ width: "242px", height: "250px" }}
              />
              <h3>Chelsea Sanders</h3>
              <p>
                I am a web developer and proud student at WOZ U. Prior to
                starting a career in software development, I have enjoyed over
                two decades in both the performing and visual arts. From being a
                classically trained Ballet dancer to acting and modelling. In
                these latter years I have focused my time toward training
                talented youth as a loving and dedicated dance teacher. When I'm
                not working I devote my time to serving church missions,
                interning with the mayor of North Las Vegas and working in
                collaboration with Faraday Future, or I can be found trying new
                recipes I found on Pinterest. I live my life by a simple motto,
                "I came, I saw, I made it awkward.".
              </p>
              <p>
                <Button bsStyle="primary">
                  <a href="https://github.com/chelseasworld09">Github</a>
                </Button>&nbsp;
                <Button bsStyle="default">
                  <a
                    href="mailto:chelseasworld09@gmail.com?Subject=I%20Want%20To%20Hire%20YOU"
                    target="_top"
                  >
                    Send Email
                  </a>
                </Button>
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <img
                src="images/lyric.jpg"
                alt="lyric"
                style={{ width: "260px", height: "250px" }}
              />
              <h3>Lyric Payton</h3>
              <p>
                Currently in the process of obtaining a Web Development
                certificate from WozU 12 week program. After graduating from
                this program I will be able to produce a fully functioning web
                application including real world API's and web services along
                with modern front-ends for desktop and mobile devices, and work
                in a group setting typical of an Agile software development
                team. In addition, establish front-end web applications that
                work with existing back-end services, and establish back-end
                services that are compatible with existing front-end web
                applications. Also retain the competency to problem solve,
                enhance, and debug existing systems.{" "}
              </p>
              <p>
                <Button bsStyle="primary">
                  <a href="https://github.com/ljpayton">Github</a>
                </Button>&nbsp;
                <Button bsStyle="default">
                  <a
                    href="mailto:ljpayton8@gmail.com?Subject=I%20Want%20To%20Hire%20YOU"
                    target="_top"
                  >
                    Send Email
                  </a>
                </Button>
              </p>
            </Col>
            <Col xs={6} md={4}>
              <img
                src="images/david.png"
                alt="david"
                style={{ width: "242px", height: "200px" }}
              />
              <h3>David Chatfield</h3>
              <p>
                Web developer- I’m a student at WOZ-U. Currently working on our
                final project, Haute Dawg website. Prior to becoming a full
                stack web student, I enjoyed a career as a Hiking Trail
                Planner/Developer for Maricopa County. I'm looking forward to
                adding web developer to my experience. In my free time I enjoy
                four wheeling, kayaking, hiking and camping with my family. We
                have a 2-year-old Catahoula/ Australian Shepherd mix named Lucy
                and a 4-year-old Boxer/German Shepherd mix named Titan who also
                enjoy adventures with the family.
              </p>
              <p>
                <Button bsStyle="primary">
                  <a href="https://github.com/Chatfieldd ">Github</a>
                </Button>&nbsp;
                <Button bsStyle="default">
                  <a
                    href="mailto:chatfielddc2@cox.net?Subject=I%20Want%20To%20Hire%20YOU "
                    target="_top "
                  >
                    Email
                  </a>
                </Button>
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default About;
