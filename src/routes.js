import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import Route from "./utils/AuthRoute";
import { Pricing, Products, Reviews } from "./components/website";

import { Login } from "./components/logins";
import Main from "./components/main";
import { DashBoard } from "./components/dashboard";
import {
  HelpSettings,
  AdminBoardSettings,
  DetailedDashBoard,
  LoanIncomeChart,
  GrantsChart,
  LoansChart,
  ProfitLossChart,
  BankBalancesChart,
  CashFlowChart,
  NotFound,
} from "./components/dashboard";
import {
  AddBorrower,
  ViewBorrowers,
  AddGroup,
  ViewGroups,
  AddGrant,
  AllocateGrant,
  ViewGrant,
  ViewAllocatedGrants,
  AddSavingsAccount,
  ViewSavingAccount,
  CashBook,
  AllAccounts,
  TrialBalance,
  ProfitAndLoss,
  BalanceSheet,
  BorrowersReport,
  GrantsReports,
  SavingReports,
  GroupsReports,
  Calculator,
  Application,
  Appraise,
  Approve,
  Disburse,
} from "./components/mis";

function GloanRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="products" element={<Products />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="login" element={<Login />} />
        <Route path="help" element={<HelpSettings />} />
        <Route path="adminboardsettings" element={<AdminBoardSettings />} />
        <Route path="dashboard" element={<DashBoard />} />

        {/* MIS Routes */}
        <Route path="calculator" element={<Calculator />} />
        <Route path="addborrower" element={<AddBorrower />} />
        <Route path="viewborrowers" element={<ViewBorrowers />} />
        <Route path="addgroup" element={<AddGroup />} />
        <Route path="viewgroups" element={<ViewGroups />} />
        <Route path="addgrant" element={<AddGrant />} />
        <Route path="AllocateGrant" element={<AllocateGrant />} />
        <Route path="ViewGrant" element={<ViewGrant />} />
        <Route path="viewallocatedgrants" element={<ViewAllocatedGrants />} />
        <Route path="addsavingaccount" element={<AddSavingsAccount />} />
        <Route path="viewsavingaccounts" element={<ViewSavingAccount />} />
        <Route path="cashbook" element={<CashBook />} />
        <Route path="allaccounts" element={<AllAccounts />} />
        <Route path="trialbalance" element={<TrialBalance />} />
        <Route path="profitandloss" element={<ProfitAndLoss />} />
        <Route path="balancesheet" element={<BalanceSheet />} />
        <Route path="borrowersreport" element={<BorrowersReport />} />
        <Route path="groupsreports" element={<GroupsReports />} />
        <Route path="grantsreports" element={<GrantsReports />} />
        <Route path="SavingReports" element={<SavingReports />} />
        <Route path="application" element={<Application />} />
        <Route path="appraise" element={<Appraise />} />
        <Route path="approve" element={<Approve />} />
        <Route path="disburse" element={<Disburse />} />
        <Route path="DetailedDashBoard" element={<DetailedDashBoard />} />
        <Route path="loanincomechart" element={<LoanIncomeChart />} />
        <Route path="grantschart" element={<GrantsChart />} />
        <Route path="loanschart" element={<LoansChart />} />
        <Route path="profitlosschart" element={<ProfitLossChart />} />
        <Route path="bankbalanceschart" element={<BankBalancesChart />} />
        <Route path="cashflowchart" element={<CashFlowChart />} />
        <Route path="/not-Found" component={<NotFound />} />
        {/* <Navigate to="/not-Found" /> */}
      </Routes>
    </div>
  );
}

export default GloanRoutes;
