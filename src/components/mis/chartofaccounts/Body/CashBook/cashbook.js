import React from "react";
import { Col, Row } from "react-bootstrap";
import CashBookCRTable from "./cashbookcrtable";
import CashBookDRTable from "./cashbookdrtable";

function CashBookBody() {
  return (
    <Row className="m-3">
      <Col>
        <div style={{ background: "#D9EEE4", textAlign: "center" }}>
          <h5>Debit</h5>
        </div>
        <CashBookDRTable />
      </Col>
      <Col>
        <div style={{ background: "#D9EEE4", textAlign: "center" }}>
          <h5>Credit</h5>
        </div>
        <CashBookCRTable />
      </Col>
    </Row>
  );
}

export default CashBookBody;
