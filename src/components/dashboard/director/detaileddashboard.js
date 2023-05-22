import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/auth";
import DatePickerA from "../../../common/datepicker";
import moment from "moment";
import { makeStyles } from "@mui/styles";
import { Row, Col, Button } from "react-bootstrap";
import LeftMenusGeneralDirector from "./Menus/leftmenusgeneradirector";
import { TopMenuLogout } from "../../logins";
import RightMenusGeneralDirector from "./Menus/rightmenusgeneradirector";
import CashFlow from "./Charts/cashflow";
import { CashFlowData } from "./Data/cashflowdata";
import { LoansSummary, LoanIncome, GrantsSummary } from "./Data/loandata";
import { ProfitLoss } from "./Data/profitloss";
import { LoanGrant } from "./Data/bankdata";
import Loans from "./Charts/loans";
import Grants from "./Charts/grants";
import BankBalancesChart from "./Charts/bankbalanceschart";
import LoanIncomeChart from "./Charts/loanincomechart";
import ProfitLossChart from "./Charts/profitloss";
import { getChartNo } from "./detaileddashboardcharts";

const DetailedDashBoard = () => {
  const user = useContext(AuthContext);
  const [chart, setChart] = useState("");
  const date = new Date();

  const chartType = chart.chartno;

  function ZoomChart(chartno) {
    chartno = getChartNo();
    setChart(chartno);
  }

  const DetailDash = chart !== chartType ? ChooseChart(chartType) : null;

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
          <div style={{ width: "100%" }}>{DetailDash}</div>
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
};

export default DetailedDashBoard;

function ChooseChart(chart) {
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
        label: "# of Loans",
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

  switch (chart) {
    case "634170def5cb04c6b85f3fe2":
      return <LoanIncomeChart chartData={loansIncome} />;
    case "634170def5cb04c6b85f4fe2":
      return <CashFlow chartData={cashFlowData} />;
    case "634170def5cb04c6b85f5fe2":
      return <Loans chartData={loansData} />;
    case "634170def5cb04c6b85f6fe2":
      return <Grants chartData={grantsData} />;
    case "634170def5cb04c6b85f7fe2":
      return <BankBalancesChart chartData={profiLossData} />;
    case "634170def5cb04c6b85f8fe2":
      return <ProfitLossChart chartData={bankData} />;
    default:
      return <LoanIncomeChart chartData={loansIncome} />;
  }
}
