import React, { useState, useContext } from "react";
import { AuthContext } from "../../../../context/auth";
import { Pie } from "react-chartjs-2";
import DatePickerA from "../../../../common/datepicker";
import moment from "moment";
import LeftMenusGeneralDirector from "../Menus/leftmenusgeneradirector";
import { TopMenuLogout } from "../../../logins";
import RightMenusGeneralDirector from "../Menus/rightmenusgeneradirector";
import { Row, Col, Table } from "react-bootstrap";
import { Card, Grid } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { makeStyles } from "@mui/styles";
import { LoanGrant} from "../Data/bankdata";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const useStyles = makeStyles({
  cardPadding: {
    // backgroundColor: "black",
    padding: "0 5px",
  },
  cardStyle: {
    marginTop: "20px",
  },
  color: {
    backgroundColor: "#00A859",
  },
});

function BankBalancesChart() {
  const user = useContext(AuthContext);
  const date = new Date();
  const classes = useStyles();
  const [bankData, setbankData] = useState({
    labels: LoanGrant.map((data) => data.label),
    datasets: [
      {
        label: "PL Summary",
        data: LoanGrant.map((data) => data.amount),
        backgroundColor: ["#727377", "#00A85A", "#CFCF22", "#D2F6F6"],
      },
    ],
  });

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
          <Grid className={classes.cardPadding} container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Card className={classes.cardStyle} sx={{ boxShadow: 5 }}>
                <div style={{ width: "100%", padding: "20px" }}>
                  <Pie data={bankData} options={options} />
                </div>
              </Card>
              <Card></Card>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Card className={classes.cardStyle} sx={{ boxShadow: 5 }}>
                <div style={{ width: "100%", padding: "20px" }}>
                  <Table
                    striped
                    bordered
                    hover
                    variant="dark"
                    style={{ textAlign: "center" }}
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Account Description</th>
                        <th>Amount {"(Kes)"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {LoanGrant.map((data) => (
                        <tr key={data.id}>
                          <td>{data.id}</td>
                          <td>{data.label}</td>
                          <td>{data.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card>
              <Card></Card>
            </Grid>
          </Grid>
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

export default BankBalancesChart;

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      fontSize: "20px",
      text: "G-Loan Loans Summary",
    },
  },
};
