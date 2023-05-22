import LoanIncomeChart from "../Charts/loanincomechart";
export const LoansSummary = [
  {
    id: 1,
    label: "Applications",
    No: 200,
  },
  {
    id: 2,
    label: "Appraised",
    No: 50,
  },
  {
    id: 3,
    label: "Approved",
    No: 20,
  },

  {
    id: 4,
    label: "Disbursed",
    No: 15,
  },
];

export const GrantsSummary = [
  {
    id: 1,
    label: "Applications",
    No: 1000,
  },
  {
    id: 2,
    label: "Appraised",
    No: 150,
  },
  {
    id: 3,
    label: "Approved",
    No: 85,
  },

  {
    id: 4,
    label: "Disbursed",
    No: 50,
  },
];

export const columns = [
  { field: "id", headerName: "Description", width: 70 },
  { field: "itemno", headerName: "No", width: 70 },
];

export const LoanIncome = [
  {
    id: 1,
    month: "Jan",
    loans: 100000,
    grants: 45000,
  },
  {
    id: 2,
    month: "Feb",
    loans: 85000,
    grants: 95000,
  },

  {
    id: 3,
    month: "Mar",
    loans: 126000,
    grants: 235000,
  },
  {
    id: 4,
    month: "April",
    loans: 117500,
    grants: 178000,
  },
  {
    id: 5,
    month: "May",
    loans: 122500,
    grants: 195000,
  },
  {
    id: 6,
    month: "June",
    loans: 129500,
    grants: 175000,
  },
];
