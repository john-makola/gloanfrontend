import React, { useState } from "react";
import { useNavigate, redirect } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import cashbook from "../../mis/images/cashbook.jpg";
import trialbalance from "../../mis/images/trialbalance.jpg";
import profitandloss from "../../mis/images/profitandloss.jpg";
import balancesheet from "../../mis/images/balancesheet.jpg";
import CashFlow from "./Charts/cashflow";
import { CashFlowData } from "./Data/cashflowdata";
import { LoansSummary, GrantsSummary, LoanIncome } from "./Data/loandata";
import { ProfitLoss } from "./Data/profitloss";
import { LoanGrant } from "./Data/bankdata";
import Loans from "./Charts/loans";
import Grants from "./Charts/grants";
import BankBalancesChart from "./Charts/bankbalanceschart";
import LoanIncomeChart from "./Charts/loanincomechart";
import ProfitLossChart from "./Charts/profitloss";
import GrantSummaryTable from "./Tables/grants";
import LoansSummaryTable from "./Tables/loans";
import ProfitLossTable from "./Tables/profit&loss";
import BankBalancesTable from "./Tables/bankbalances";
import { getChartNo } from "./detaileddashboardcharts";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";

const useStyles = makeStyles({
  color: {
    // backgroundColor: "black",
    padding: "0 5px",
  },
});

function SummaryBody() {
  document.title = "G-LOAN Pricing Plans";

  const classes = useStyles();
  const navigate = useNavigate();

  const [chartNoData, setChartNoData] = useState("");

  function HandleClick(chartno) {
    setChartNoData("Uganda");
    chartno = chartNoData;
    navigate("/detaileddashboard", { replace: true });
  }

  const [cashFlowData, setcashFlowData] = useState({
    labels: CashFlowData.map((data) => data.month),
    datasets: [
      {
        label: "Cash In",
        data: CashFlowData.map((data) => data.cashIn),
        backgroundColor: ["rgba(75,192,192,1)"],
      },
      {
        label: "Cash Out",
        data: CashFlowData.map((data) => data.cashOut),
        backgroundColor: ["#CFCF22"],
      },
    ],
  });

  const chartNo = getChartNo();

  const [loansData, setloansData] = useState({
    labels: LoansSummary.map((data) => data.label),
    datasets: [
      {
        label: "# of Loans",
        data: LoansSummary.map((data) => data.No),
        backgroundColor: ["#22CFCF", "#F0610F", "#CFCF22", "#D2F6F6"],
      },
    ],
  });

  const [grantsData, setGrantsData] = useState({
    labels: GrantsSummary.map((data) => data.label),
    datasets: [
      {
        label: "# of Grants",
        data: GrantsSummary.map((data) => data.No),
        backgroundColor: ["#22CFCF", "#F0610F", "#CFCF22", "#D2F6F6"],
      },
    ],
  });

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

  const [profiLossData, setProfitLossData] = useState({
    labels: ProfitLoss.map((data) => data.label),
    datasets: [
      {
        label: "PL Summary",
        data: ProfitLoss.map((data) => data.amount),
        backgroundColor: ["#22CFCF", "#F0610F", "#CFCF22", "#D2F6F6"],
      },
    ],
  });

  return (
    <>
      <Grid className={classes.color} container spacing={2}>
        <Grid item xs={12} md={12} lg={6}>
          <Button
            onClick={() => navigate("/loanincomechart", { replace: true })}
          >
            <Card sx={{ boxShadow: 5 }}>
              <CardContent>
                <div style={{ width: "600px", padding: "20px" }}>
                  <Line data={loansIncome} />
                </div>
                {/* <LoanIncomeChart chartData={loansIncome} /> */}

                <Typography
                  gutterBottom
                  variant="body1"
                  color="#00A859"
                  component="div"
                >
                  Loan & Grants Income
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Reports
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Button onClick={() => navigate("/cashflowchart", { replace: true })}>
            <Card sx={{ boxShadow: 5 }}>
              <CardContent>
                <div style={{ width: "600px" }}>
                  <Bar data={cashFlowData} />
                </div>

                <Typography
                  gutterBottom
                  variant="body1"
                  color="#00A859"
                  component="div"
                >
                  Cash Flow
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Reports
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </Grid>
        <Grid item xs={6} md={6} lg={3}>
          <Button onClick={() => navigate("/loanschart", { replace: true })}>
            <Card sx={{ boxShadow: 5 }}>
              <div style={{ width: "300px" }}>
                <Doughnut data={loansData} />
              </div>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body1"
                  color="#00A859"
                  component="div"
                >
                  Loan Summary
                </Typography>
                <LoansSummaryTable />
              </CardContent>
            </Card>
          </Button>
        </Grid>
        <Grid item xs={6} md={6} lg={3}>
          <Button onClick={() => navigate("/grantschart", { replace: true })}>
            <Card sx={{ boxShadow: 5 }}>
              <div style={{ width: "300px" }}>
                <Doughnut data={grantsData} />
              </div>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body1"
                  color="#00A859"
                  component="div"
                >
                  Grants Summary
                </Typography>
                <GrantSummaryTable />
              </CardContent>
            </Card>
          </Button>
        </Grid>
        <Grid item xs={6} md={6} lg={3}>
          <Button
            onClick={() => navigate("/profitlosschart", { replace: true })}
          >
            <Card sx={{ boxShadow: 5 }}>
              <div style={{ width: "300px", height: "350px" }}>
                <Pie data={profiLossData} />
              </div>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body1"
                  color="#00A859"
                  component="div"
                >
                  Profit & Loss
                </Typography>
                <ProfitLossTable />
              </CardContent>
            </Card>
          </Button>
        </Grid>
        <Grid item xs={6} md={6} lg={3}>
          <Button
            onClick={() => navigate("/bankbalanceschart", { replace: true })}
          >
            <Card sx={{ boxShadow: 5 }}>
              <div style={{ width: "300px" }}>
                <Pie data={bankData} />
              </div>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body1"
                  color="#00A859"
                  component="div"
                >
                  Bank Accounts
                </Typography>
                <BankBalancesTable />
              </CardContent>
            </Card>
          </Button>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Button onClick={() => navigate("/cashbook", { replace: true })}>
            <Card>
              <CardMedia component="img" image={cashbook} alt="green iguana" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body1"
                  color="#00A859"
                  component="div"
                >
                  Cash Book
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Report
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Button onClick={() => navigate("/trialbalance", { replace: true })}>
            <Card>
              <CardMedia
                component="img"
                image={trialbalance}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body1"
                  color="#00A859"
                  component="div"
                >
                  Trial Balance
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Report
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Button onClick={() => navigate("/profitandloss", { replace: true })}>
            <Card>
              <CardMedia
                component="img"
                image={profitandloss}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body1"
                  color="#00A859"
                  component="div"
                >
                  Profit & Loss
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Report
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Button onClick={() => navigate("/balancesheet", { replace: true })}>
            <Card>
              <CardMedia
                component="img"
                image={balancesheet}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body1"
                  color="#00A859"
                  component="div"
                >
                  Balance Sheet
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Report
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default SummaryBody;
