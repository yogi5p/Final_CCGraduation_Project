import React, { Component } from "react";
import { Grid, Row, Col, Thumbnail, Button, Clearfix } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

var img_url = "";

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
              {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"/> */}
              <div class="card_content">
                <a href="#" class="btn btn-primary" target="_blank">
                  <b>{amenity.title}</b>
                </a>
                <p>{amenity.snippet}</p>
              </div>
            </div>

            {/* {(img_url = amenity.pagemap.localbusiness[0].image)}
            {amenity.pagemap.localbusiness[0].image ? (
              <img src={img_url} alt={"242x200"} />
            ) : (
              <h5>No Image available</h5>
            )} */}
          </Col>

          {(index + 1) % 2 === 0 && <Clearfix visibleSmBlock />}
          {(index + 1) % 3 === 0 && <Clearfix visibleMdBlock visibleLgBlock />}
        </div>
      ))}
    </Row>
  );
};

export default AmenityCards;
