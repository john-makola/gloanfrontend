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
import { getRoles } from "./role";

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

function AddBorrower() {
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
            <h4>Add Borrower</h4>
          </Row>

          <Row className="m-2">
            <Form noValidate>
              <Row className={classes.descriptionText}>
                <h5 className="leading">
                  Add a <strong> Borrower </strong> to the System
                </h5>
              </Row>
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
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Password</InputGroup.Text>
                    <FormControl
                      required
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Confirm Password</InputGroup.Text>
                    <FormControl
                      required
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmpassword"
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>First Name</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="FirstName"
                      name="firstname"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Last Name</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="Lastname"
                      name="lastname"
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Mobile No</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="Mobile No"
                      name="mobileno"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Location</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="Location"
                      name="location"
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row>
                <Row className="m-3">
                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Role</InputGroup.Text>
                      <Form.Select type="text" placeholder="Role" name="role">
                        {roles.map((d) => (
                          <option value={d.id} key={d.id}>
                            {d.rolename}
                          </option>
                        ))}
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Group</InputGroup.Text>
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

export default AddBorrower;
