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
import { getGroupType } from "./grouptype";
import { getLocation } from "./location";

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

function AddGroup() {
  const classes = useStyles();
  const user = useContext(AuthContext);
  const GroupType = getGroupType();
  const Location = getLocation();

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
            <h4>Add Group</h4>
          </Row>

          <Row className="m-2">
            <Form noValidate>
              <Row className={classes.descriptionText}>
                <h5 className="leading">
                  Add a <strong> Group </strong> to the System
                </h5>
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Group No</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="Group No"
                      name="groupno"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Group Name</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="Group Name"
                      name="groupname"
                    />
                  </InputGroup>
                </Form.Group>
              </Row>

              <Row className="m-3">
                <Form.Group as={Col} md="12">
                  <InputGroup>
                    <InputGroup.Text>Description</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="Group Description"
                      name="groupdescription"
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Administrator</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="administrator"
                      name="administrator"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Mobile No</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="+254 722 222 222"
                      name="adminno"
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Treasurer</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="Treasurer"
                      name="treasurer"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Mobile No</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="+254 722 222 222"
                      name="treasurerno"
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
              
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Secretary</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="Secretary"
                      name="secretary"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Mobile No</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="+254 722 222 222"
                      name="secretaryno"
                    />
                  </InputGroup>
                </Form.Group>
              </Row>

              <Row>
                <Row className="m-3">
                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Group Type</InputGroup.Text>
                      <Form.Select type="text" placeholder="Role" name="role">
                        {GroupType.map((d) => (
                          <option value={d.id} key={d.id}>
                            {d.groupType}
                          </option>
                        ))}
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Location</InputGroup.Text>
                      <Form.Select
                        type="text"
                        placeholder="Location"
                        name="location"
                      >
                        {Location.map((d) => (
                          <option value={d.id} key={d.id}>
                            {d.area}
                          </option>
                        ))}
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                </Row>
              </Row>

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

export default AddGroup;
