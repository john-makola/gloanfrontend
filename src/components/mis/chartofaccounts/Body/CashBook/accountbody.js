import React from "react";
import { Col, Row } from "react-bootstrap";

import AccountTable from "./accounttable";

function AccountBody() {
  return (
    <Row className="m-3">
      <Col>
        
        <AccountTable />
      </Col>
    </Row>
  );
}

export default AccountBody;
