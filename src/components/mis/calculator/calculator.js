import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/auth";
import DatePickerA from "../../../common/datepicker";
import moment from "moment";
import { makeStyles } from "@mui/styles";
import loanJs from "loanjs";
import {
  Row,
  Col,
  Form,
  Button,
  FormControl,
  InputGroup,
  Table,
} from "react-bootstrap";
import LeftMenusGeneralDirector from "../../dashboard/director/Menus/leftmenusgeneradirector";
import { TopMenuLogout } from "../../logins";
import RightMenusGeneralDirector from "../../dashboard/director/Menus/rightmenusgeneradirector";
import { getGroups } from "../groups/groups";
import { getRoles } from "../Borrower/role";

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

function Calculator(callback, initialState = {}) {
  const classes = useStyles();
  const user = useContext(AuthContext);
  const groups = getGroups();
  const roles = getRoles();
  const date = new Date();
  const [values, setValues] = useState({
    "loan-amount": 0,
    "loan-term": 0,
    "interest-rate": 0,
  });

  const [validated, setValidated] = useState(false);
  const [installments, setInstallments] = useState([]);
  const [totalPrincipal, setTotalPrincipal] = useState(0.0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    calculate(
      values["loan-amount"],
      values["loan-term"],
      values["interest-rate"]
    );
    setValidated(true);
    callback();
  };

  const calculate = (amount, years, rate) => {
    let loan = new loanJs.Loan(amount, years * 12, rate);
    let monPayment = loan.sum / loan.installments.length;
    setInstallments(loan.installments);
    setTotalPrincipal(loan.amount);
    setMonthlyPayment(monPayment);
    setTotalInterest(loan.interestSum);
    setTotalAmount(loan.sum);
  };

  const amountFormat = (amount) =>
    new Intl.NumberFormat("en-IN").format(amount);
  

    // , {
    //   style: "currency",
    //   currency: "Shs",
    // }

  const ClearFields = () => {
    setValues({
      "loan-amount": 0,
      "loan-term": 0,
      "interest-rate": 0,
    });
  };


  return (
    <div>
      <TopMenuLogout user={user} />

      <Row className="mt-5">
        <Col md="2" className="listgroup mt-5">
          <LeftMenusGeneralDirector user={user} />
        </Col>
        <Col md="8" className="mt-5">
          <Row className={classes.title}>
            <h4>Loan Calculator</h4>
          </Row>

          <Row className="m-2">
            <Form noValidate validated={validated} onSubmit={onSubmit}>
              <Row className={classes.descriptionText}>
                <h5 className="leading">Estimate your Loan</h5>
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Loan Amount</InputGroup.Text>
                    <FormControl
                      required
                      type="number"
                      placeholder="0"
                      name="loan-amount"
                      onChange={onChange}
                      value={values["loan-amount"]}
                    />
                  </InputGroup>
                </Form.Group>
                {!!installments?.length && (
                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Principal Amount</InputGroup.Text>
                      <FormControl
                        required
                        type="number"
                        placeholder="0"
                        name="loan-amount"
                        onChange={onChange}
                        value={totalPrincipal.toFixed(2).toLocaleString("en")}
                        disabled
                      />
                    </InputGroup>
                  </Form.Group>
                )}
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Interest Rate %</InputGroup.Text>
                    <FormControl
                      required
                      type="number"
                      placeholder="0"
                      name="interest-rate"
                      onChange={onChange}
                      value={values["interest-rate"]}
                    />
                  </InputGroup>
                </Form.Group>
                {!!installments?.length && (
                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Total No.of Payments</InputGroup.Text>
                      <FormControl
                        required
                        type="number"
                        placeholder="0"
                        name="loan-amount"
                        onChange={onChange}
                        value={installments.length}
                        disabled
                      />
                    </InputGroup>
                  </Form.Group>
                )}
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Loan-Term "Years"</InputGroup.Text>
                    <FormControl
                      required
                      type="number"
                      placeholder="0"
                      name="loan-term"
                      onChange={onChange}
                      value={values["loan-term"]}
                    />
                  </InputGroup>
                </Form.Group>
                {!!installments?.length && (
                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Payment Per Month</InputGroup.Text>
                      <FormControl
                        required
                        type="number"
                        placeholder="0"
                        name="loan-amount"
                        onChange={onChange}
                        value={monthlyPayment}
                        disabled
                      />
                    </InputGroup>
                  </Form.Group>
                )}
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6"></Form.Group>
                <Form.Group as={Col} md="6">
                  {!!installments?.length && (
                    <Form.Group as={Col} md="6">
                      <InputGroup>
                        <InputGroup.Text>Total Interest</InputGroup.Text>
                        <FormControl
                          required
                          type="number"
                          placeholder="0"
                          name="loan-amount"
                          onChange={onChange}
                          value={totalInterest}
                          disabled
                        />
                      </InputGroup>
                    </Form.Group>
                  )}
                </Form.Group>
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6"></Form.Group>
                <Form.Group as={Col} md="6">
                  {!!installments?.length && (
                    <Form.Group as={Col} md="6">
                      <InputGroup>
                        <InputGroup.Text>Total Payment</InputGroup.Text>
                        <FormControl
                          required
                          type="number"
                          placeholder="0"
                          name="loan-amount"
                          onChange={onChange}
                          value={totalAmount}
                          disabled
                        />
                      </InputGroup>
                    </Form.Group>
                  )}
                </Form.Group>
              </Row>

              <hr></hr>
              <Row className="m-4">
                <Col>
                  {" "}
                  <Button
                    type="submit"
                    variant="success"
                    className="mr--5 px-5"
                  >
                    Calculate
                  </Button>
                </Col>
                <Col>
                  <Button onClick={ClearFields} variant="success">
                    Clear Fields
                  </Button>
                </Col>
              </Row>
            </Form>
            <Row className="m-3">
              {!!installments?.length && (
                <Table striped bordered hover style={{textAlign:"center",fontSize:"1vw"}}>
                  <thead style={{background:"#20a041", color:"#fff"}}>
                    <tr>
                      <th>Month</th>
                      <th>Payment Amount</th>
                      <th>Interest </th>
                      <th>Principal</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {installments.map((i, ind) => (
                      <tr key={ind}>
                        <td>{ind + 1}</td>
                        <td>{amountFormat(i.installment)}</td>
                        <td>{amountFormat(i.interest)}</td>
                        <td>{amountFormat(i.capital)}</td>
                        <td>{amountFormat(i.remain)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Row>
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

export default Calculator;
