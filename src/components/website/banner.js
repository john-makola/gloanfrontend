import React from "react";
import MobileBanner from "./images/mobilebanner.png";
import GrowSavings from "./images/growsavings.jpg";
import { Row, Col } from "react-bootstrap";

function Banner() {
  const styleObj = {
    fontStyle: "italic",
  };
  return (
    <Row style={{ margin: "2px" }}>
      <Col md="6">
        <Row className="bannerText">
          <h1>Providing community Groups with </h1>
          <h1 className="quickloans">Quick Loans!</h1>{" "}
          <h5>
            to grow Small Scale- Traders{" "}
            <span style={styleObj}>
              (Mama Mboga, Wholesale, Retailers, Hawkers, Bodabodas), Support
              Livestock {"&"} Poultry Farming or any agribusiness
            </span>
          </h5>
        </Row>

        <Row className="discounts">
          <button className="btn ">
            <h2>Open Account</h2>
            <img src={GrowSavings} alt="logo" className="openaccount"/>
          </button>
        </Row>
      </Col>
      <Col>
        <img src={MobileBanner} alt="logo" className="mobilebanner" />
      </Col>
    </Row>
  );
}

export default Banner;
