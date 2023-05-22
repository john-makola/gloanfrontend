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
import { getCashBankAC, getTransactionType } from "./accounts";
import CashBookBody from "./Body/CashBook/cashbook";

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

function CashBook() {
  const classes = useStyles();
  const user = useContext(AuthContext);
  const cashbankac = getCashBankAC();
  const accounttype = getTransactionType();
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
            <h4>CashBook Entries</h4>
          </Row>

          <Row className="m-2">
            <Form noValidate>
              <Row className="m-3">
                <Form.Group as={Col} md="3">
                  <InputGroup>
                    <InputGroup.Text>Entry No</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="Entry No"
                      name="entryno"
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="3">
                  <InputGroup>
                    <InputGroup.Text>Transaction Type</InputGroup.Text>
                    <Form.Select
                      type="text"
                      placeholder="TransactionType"
                      name="transactiontype"
                    >
                      {accounttype.map((d) => (
                        <option value={d.id} key={d.id}>
                          {d.transationType}
                        </option>
                      ))}
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="3">
                  <InputGroup>
                    <InputGroup.Text>Account Type</InputGroup.Text>
                    <Form.Select
                      type="text"
                      placeholder="Account Type"
                      name="accounttype"
                    >
                      {cashbankac.map((d) => (
                        <option value={d.id} key={d.id}>
                          {d.account}
                        </option>
                      ))}
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              </Row>

              <Row className="m-3">
                <Form.Group as={Col} md="8">
                  <InputGroup>
                    <InputGroup.Text>Particulars</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="Transaction Description"
                      name="particulars"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <InputGroup>
                    <InputGroup.Text>Amount</InputGroup.Text>
                    <FormControl
                      required
                      type="text"
                      placeholder="SHS 100,000.00"
                      name="amount"
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
              <hr></hr>

              <Button type="submit" variant="success">
                Submit form
              </Button>
            </Form>
            <CashBookBody/>
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

export default CashBook;
