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
import { getCurrency, getGrantType } from "./grantype";
import { getGroups } from "../groups/groups";

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

function AllocateGrant() {
  const classes = useStyles();
  const user = useContext(AuthContext);
  const GrantType = getGrantType();
  const Currency = getCurrency();
  const groups = getGroups();

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
            <h4>Allocate Grant</h4>
          </Row>

          <Row className="m-2">
            <Form noValidate>
              <Row className={classes.descriptionText}>
                <h5 className="leading">
                  Allocate <strong> Grant </strong> to a Group
                </h5>
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Grant Allocation No</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="GrantAllocationNo"
                      name="grantallocationno"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Allocate To Group</InputGroup.Text>
                    <Form.Select type="text" placeholder="Group" name="group">
                      {groups.map((d) => (
                        <option value={d.id} key={d.id}>
                          {d.groupname}
                        </option>
                      ))}
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              </Row>

              <Row className="m-3">
                <Form.Group as={Col} md="12">
                  <InputGroup>
                    <InputGroup.Text>Purpose of Grant</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="Purpose of Grant"
                      name="purposeofgrant"
                    />
                  </InputGroup>
                </Form.Group>
              </Row>

              <Row>
                <Row className="m-3">
                  <Form.Group as={Col} md="2">
                    <InputGroup>
                      <InputGroup.Text>Currency</InputGroup.Text>
                      <Form.Select
                        type="text"
                        placeholder="Currency"
                        name="currency"
                      >
                        {Currency.map((d) => (
                          <option value={d.id} key={d.id}>
                            {d.name}
                          </option>
                        ))}
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Amount Allocated</InputGroup.Text>
                      <FormControl
                        required
                        type="text"
                        placeholder="100,000.00"
                        name="grantamount"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                    <InputGroup>
                      <InputGroup.Text>Date</InputGroup.Text>
                      <FormControl
                        required
                        type="date"
                        placeholder="Grant Name"
                        name="grantName"
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
              </Row>
              <Row className="m-3"></Row>

              <hr></hr>

              <Button type="submit" variant="success">
                Submit form
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

export default AllocateGrant;
