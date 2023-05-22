import React, { useState, useContext } from "react";
import { AuthContext } from "../../../../context/auth";
import { Line, Bar } from "react-chartjs-2";
import DatePickerA from "../../../../common/datepicker";
import moment from "moment";
import LeftMenusGeneralDirector from "../Menus/leftmenusgeneradirector";
import { TopMenuLogout } from "../../../logins";
import RightMenusGeneralDirector from "../Menus/rightmenusgeneradirector";
import { Row, Col } from "react-bootstrap";
import { Card, CardContent, Grid } from "@mui/material";
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
import { LoanIncome } from "../Data/loandata";

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

function LoanIncomeChart() {
  const user = useContext(AuthContext);
  const date = new Date();
  const classes = useStyles();
  const [loansIncome, setLoansIncome] = useState({
    labels: LoanIncome.map((data) => data.month),
    datasets: [
      {
        label: "Loans",
        data: LoanIncome.map((data) => data.loans),
        backgroundColor: ["rgba(75,192,192,1)"],
      },
      {
        label: "Grants",
        data: LoanIncome.map((data) => data.grants),
        backgroundColor: ["#F0610F"],
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
            <Grid item xs={12} md={12} lg={12}>
              <Card className={classes.cardStyle} sx={{ boxShadow: 5 }}>
                <div style={{ width: "100%", padding: "20px" }}>
                  <Line data={loansIncome} options={optionsLine} />
                </div>
              </Card>
              <Card></Card>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Card className={classes.cardStyle} sx={{ boxShadow: 5 }}>
                <div style={{ width: "100%", padding: "20px" }}>
                  <Bar data={loansIncome} options={options} />
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

export default LoanIncomeChart;

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "G-Loan Loans & Grants Disbursment 2023",
    },
  },
};

const optionsLine = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "G-Loan Loans & Grants Disbursment 2023",
    },
  },
};
