import React, { useContext } from "react";
import { AuthContext } from "../../context/auth";
import DatePickerA from "../../common/datepicker";
import moment from "moment";
import { Row, Col, Button } from "react-bootstrap";
import LeftMenusGeneralDirector from "./director/Menus/leftmenusgeneradirector";
import { TopMenuLogout } from "../logins";
import RightMenusGeneralDirector from "./director/Menus/rightmenusgeneradirector";
import DirectorBody from "./director/directorbody";
function HelpSettings() {
  const user = useContext(AuthContext);

  const date = new Date();
  return (
    <div>
      <TopMenuLogout user={user} />

      <Row>
        <Col md="2" className="listgroup mt-1">
          <>
            <LeftMenusGeneralDirector user={user} />
          </>
        </Col>
        <Col md="8" className="mt-2">
          <DirectorBody />
        </Col>
        <Col md="2">
          <Row>
            <h2>
              Year{" "}
              {moment(date.setFullYear(date.getFullYear() - 1)).format("YYYY")}
              {"-"}
              {moment(Date.now()).format("YYYY")}{" "}
            </h2>
          </Row>
          <Row>
            {" "}
            <DatePickerA />
          </Row>
          <Row className="mt-2">
            <Button className="btn-warning">Summary Reports</Button>
          </Row>
          <div class="row no-gutters">
            <RightMenusGeneralDirector user={user} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HelpSettings;
