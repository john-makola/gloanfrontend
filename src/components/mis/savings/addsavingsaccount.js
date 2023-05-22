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

function AddSavingsAccount() {
  const classes = useStyles();
  const user = useContext(AuthContext);
  const groups = getGroups();

  const date = new Date();
  return (
    <div>
      <TopMenuLogout user={user} />

      <Row className=" mt-5">
        <Col md="2" className="listgroup mt-5">
          <LeftMenusGeneralDirector user={user} />
        </Col>
        <Col md="8" className="mt-5">
          <Row className={classes.title}>
            <h4>Add a New Savings Account</h4>
          </Row>

          <Row className="m-2">
            <Form noValidate>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Account No</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="Account No"
                      name="accountno"
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
                      placeholder="First Name"
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
                      placeholder="Last Name"
                      name="lastname"
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Group Name</InputGroup.Text>
                    <Form.Select type="text" placeholder="Group" name="group">
                      {groups.map((d) => (
                        <option value={d.id} key={d.id}>
                          {d.groupname}
                        </option>
                      ))}
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
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
              </Row>

              <Row>
                <Row className="m-3">
                  {/* <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Donor</InputGroup.Text>
                      <Form.Select type="text" placeholder="Donor" name="donor">
                        {Donor.map((d) => (
                          <option value={d.id} key={d.id}>
                            {d.name}
                          </option>
                        ))}
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Grant Type</InputGroup.Text>
                      <Form.Select
                        type="text"
                        placeholder="GranType"
                        name="granttype"
                      >
                        {GrantType.map((d) => (
                          <option value={d.id} key={d.id}>
                            {d.type}
                          </option>
                        ))}
                      </Form.Select>
                    </InputGroup>
                  </Form.Group> */}
                </Row>
              </Row>
              <Row className="m-3">
                {/* <Form.Group as={Col} md="6">
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
                </Form.Group> */}
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Opening Balance </InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="100,000.00"
                      name="openingbalance"
                    />
                  </InputGroup>
                </Form.Group>
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
        <Col md="2" className="listgroup mt-4">
          <RightMenusGeneralDirector user={user} />
        </Col>
      </Row>
    </div>
  );
}

export default AddSavingsAccount;
