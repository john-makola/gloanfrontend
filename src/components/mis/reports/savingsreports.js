import React, { useContext } from "react";
import { AuthContext } from "../../../context/auth";
import DatePickerA from "../../../common/datepicker";
import moment from "moment";
import { makeStyles } from "@mui/styles";
import {
  Row,
  Col,
  Form,
  Button,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import LeftMenusGeneralDirector from "../../dashboard/director/Menus/leftmenusgeneradirector";
import { TopMenuLogout } from "../../logins";
import RightMenusGeneralDirector from "../../dashboard/director/Menus/rightmenusgeneradirector";
import { getGroups } from "../groups/groups";
import { getRoles } from "../role";

const useStyles = makeStyles({
  color: {
    backgroundColor: "#00A859",
  },
  title: {
    textAlign: "center",
    backgroundColor: "#00A859",
    color: "#fff",
  },
  descriptionText: {
    margin: "2",
    textAlign: "center",
    color: "#00A859",
  },
  submitButton: {
    backgroundColor: "#00A859",
    justifyContent: "center",
    alignContent: "center",
    width: "20%",
    paddingLeft: "70%",
  },
});

function SavingsReport() {
  const classes = useStyles();
  const user = useContext(AuthContext);
  const groups = getGroups();
  const roles = getRoles();
  const date = new Date();
  return (
    <div>
      <TopMenuLogout user={user} />

      <Row className="mt-5">
        <Col md="2" className="listgroup mt-5">
          <LeftMenusGeneralDirector user={user} />
        </Col>
        <Col md="8" className="mt-5">
          <Row className={classes.title}>
            <h4>Savings Reports</h4>
          </Row>

          <Row className="m-2">
            <Form noValidate>
              <Row className={classes.descriptionText}></Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Member No</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="Member No"
                      name="memberno"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Username</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="Username"
                      name="username"
                    />
                  </InputGroup>
                </Form.Group>
              </Row>

              <hr></hr>

              <Button type="submit" variant="success">
                Search
              </Button>
            </Form>
            {/* {Object.keys(errors).length > 0 && (
                <div className="ui error message">
                  <ul className="list">
                    {Object.values(errors).map((value) => (
                      <li key={value}>{value}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className={netErrors ? "ui error message" : null}>
                {netErrors ? netErrors : null}
              </div>
              <div className={Addrecord ? "ui success message" : null}>
                {Addrecord ? Addrecord : null}
              </div> */}
          </Row>
        </Col>
        <Col md="2" className="listgroup mt-5">
          <RightMenusGeneralDirector user={user} />
        </Col>
      </Row>
    </div>
  );
}

export default SavingsReport;
