import React, { Component } from "react";
import { Grid, Row, Col, Thumbnail, Button, Clearfix } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

<<<<<<< HEAD
const AmenityCards = ({ amenities, amenitySelected }) => {
=======
const AmenityCards = ({ zipCode, amenities, amenitySelected }) => {
>>>>>>> 9972ff7007d2f6ebbf5061a243e1ec903618efe4
  return (
    <Row>
      {amenities.map((amenity, index) => (
        <div key={amenity.title}>
          <Col xs={6} md={4}>
<<<<<<< HEAD
            <Thumbnail src={amenity.formattedUrl} alt={"242x200"}>
              <h3>{amenity.title}</h3>
              <p>{amenity.snippet}</p>
              {/* <p>{amenity.pagemap.postaladdress}</p> */}
            </Thumbnail>
          </Col>

=======
            <Thumbnail style={{ width: "35rem" }}>
              {amenity.pagemap.localbusiness ? (
                amenity.pagemap.localbusiness.length > 0 ? (
                  <img
                    src={amenity.pagemap.localbusiness[0].image}
                    style={{ width: "100%" }}
                  />
                ) : (
                  <h5>No Image available</h5>
                )
              ) : (
                <h5>No Image available</h5>
              )}
              <a href={amenity.link} target="_blank" style={{ float: "left" }}>
                <b>{amenity.title}</b>
              </a>
              <p>{amenity.snippet}</p>
            </Thumbnail>
          </Col>
>>>>>>> 9972ff7007d2f6ebbf5061a243e1ec903618efe4
          {(index + 1) % 2 === 0 && <Clearfix visibleSmBlock />}
          {(index + 1) % 3 === 0 && <Clearfix visibleMdBlock visibleLgBlock />}
        </div>
      ))}
    </Row>
  );
};

export default AmenityCards;
