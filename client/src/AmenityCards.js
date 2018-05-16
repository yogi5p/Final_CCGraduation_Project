import React, { Component } from "react";
import { Grid, Row, Col, Thumbnail, Button, Clearfix } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

const AmenityCards = ({ amenities, amenitySelected }) => {
  return (
    <Row>
      {amenities.map((amenity, index) => (
        <div key={amenity.title}>
          <Col xs={6} md={4}>
            <Thumbnail src={amenity.formattedUrl} alt={"242x200"}>
              <h3>{amenity.title}</h3>
              <p>{amenity.snippet}</p>
              {/* <p>{amenity.pagemap.postaladdress}</p> */}
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
