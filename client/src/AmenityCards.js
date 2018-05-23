import React, { Component } from "react";
import { Grid, Row, Col, Thumbnail, Button, Clearfix } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

const AmenityCards = ({ zipCode, amenities, amenitySelected }) => {
  return (
    <Row class="clearfix">
      {amenities.map((amenity, index) => (
        <div key={amenity.title} style={{ width: "18rem" }}>
          <Col xs={6} md={4}>
            <Thumbnail class="clearfix" style={{ width: "18rem" }}>
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
              <a href={amenity.link} class="btn btn-primary" target="_blank">
                <b>{amenity.title}</b>
              </a>
              <p>{amenity.snippet}</p>
            </Thumbnail>
          </Col>
          {(index + 1) % 2 === 0 && <Clearfix visibleSmBlock />}
          {(index + 1) % 3 === 0 && <Clearfix visibleMdBlock visibleLgBlock />}
        </div>
      ))}
    </Row>
  );
};

export default AmenityCards;
