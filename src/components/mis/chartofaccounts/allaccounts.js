import React, { useContext } from "react";
import { AuthContext } from "../../../context/auth";
import DatePickerA from "../../../common/datepicker";
import moment from "moment";
import { makeStyles } from "@mui/styles";
import { Row, Col, Button } from "react-bootstrap";
import LeftMenusGeneralDirector from "../../dashboard/director/Menus/leftmenusgeneradirector";
import { TopMenuLogout } from "../../logins";
import RightMenusGeneralDirector from "../../dashboard/director/Menus/rightmenusgeneradirector";
import DirectorBody from "../../dashboard/director/directorbody"

const useStyles = makeStyles({
  color: {
    backgroundColor: "#00A859",
  },
});

function AllAccounts() {
  const classes = useStyles();
  const user = useContext(AuthContext);

  const date = new Date();
  return (
    <div>
      <TopMenuLogout user={user} />

      <Row className="mt-5">
        <Col md="2" className="listgroup mt-5">
          <>
            <LeftMenusGeneralDirector user={user} />
          </>
        </Col>
        <Col md="8" className="mt-5">
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

          <div class="row no-gutters">
            <RightMenusGeneralDirector user={user} className="listgroup mt-5" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AllAccounts;
