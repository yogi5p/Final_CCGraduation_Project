import React, { Component } from "react";
import { Grid, Row, Col, Thumbnail, Button, Clearfix } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

const AmenityCards = ({ zipCode, amenities, amenitySelected }) => {
  console.log(amenities);
  console.log(zipCode);
  console.log(amenitySelected);
  return (
    <Row>
      {amenities.map((amenity, index) => (
        <div key={amenity.title}>
          <Col sm={4} md={3}>
            <div class="card" style={{ width: "18rem" }}>
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
              <div class="card_content">
                <a href={amenity.link} class="btn btn-primary" target="_blank">
                  <b>{amenity.title}</b>
                </a>
                <p>{amenity.snippet}</p>
              </div>
            </div>
          </Col>
          {(index + 1) % 2 === 0 && <Clearfix visibleSmBlock />}
          {(index + 1) % 3 === 0 && <Clearfix visibleMdBlock visibleLgBlock />}
        </div>
      ))}
    </Row>
  );
};

export default AmenityCards;
