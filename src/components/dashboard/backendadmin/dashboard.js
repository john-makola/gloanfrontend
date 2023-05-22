import React, { useContext } from "react";
import { AuthContext } from "../../../context/auth";
import DatePickerA from "../../../common/datepicker";
import moment from "moment";
import { Row, Col, Button } from "react-bootstrap";
import { LeftMenuGeneral, BackendAdminBody, RsideMenuGeneral } from "../";

function BackendAdminDashBoard() {

  const user = useContext(AuthContext);

  const date = new Date();
  return (
    <div>
      <Row>
        <Row className="m-4"></Row>

        <Row className="m-2">
          <Col md="2" className="listgroup p-1">
            <LeftMenuGeneral user={user} />
          </Col>
          <Col md="10">
            <Row className="mt-4">
              <Col>
                <div className="sectiondescription">
                  <Row className="m-3">
                    <h2>
                      {user.user.firstname}
                      {"  "}
                      {user.user.surname} {" : "}System Administrator DashBoard
                    </h2>
                  </Row>
                </div>
              </Col>
              <Col lg={3}>
                <h2>
                  Year{" "}
                  {moment(date.setFullYear(date.getFullYear() - 1)).format(
                    "YYYY"
                  )}
                  {"-"}
                  {moment(Date.now()).format("YYYY")}{" "}
                </h2>
                <DatePickerA />
                <Row className="m-3">
                  <Button className="btn-warning">Workplans</Button>
                </Row>
              </Col>
            </Row>
            {/* <Row>
              <Col>
                <BackendAdminBody />
              </Col>
              <Col lg="3">
                <RsideMenuGeneral />
              </Col>
            </Row> */}
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default BackendAdminDashBoard;
