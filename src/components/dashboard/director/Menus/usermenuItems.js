import { Adjust } from "@mui/icons-material";
import { Divider } from "@mui/material";
const userMenuItems = [
  {
    title: "Loan/Grant Management",
    text: [
      {
        subTitle: "Loan Calculator",
        path: "/calculator",
      },
      {
        subTitle: "Application",
        path: "/application",
      },
      {
        subTitle: "Appraise",
        path: "/appraise",
      },
      {
        subTitle: "Approve",
        path: "/approve",
      },
      {
        subTitle: "Disburse",
        path: "/disburse",
      },
    ],
    icon: <Adjust color="success" />,
    divider: <Divider />,
  },
  {
    title: "Borrower",
    text: [
      {
        subTitle: "Add Borrower",
        path: "/addborrower",
      },
      {
        subTitle: "View Borrowers",
        path: "/viewborrowers",
      },
    ],
    icon: <Adjust color="success" />,
    divider: <Divider />,
  },
  {
    title: "Groups",
    text: [
      {
        subTitle: "Add Group",
        path: "/addgroup",
      },
      {
        subTitle: "View Groups",
        path: "/viewgroups",
      },
    ],
    icon: <Adjust color="success" />,
    divider: <Divider />,
  },

  {
    title: "Grants",
    text: [
      {
        subTitle: "Add Grant",
        path: "/addgrant",
      },
      {
        subTitle: "Allocate Grant",
        path: "/AllocateGrant",
      },
      {
        subTitle: "View Available Grants",
        path: "/ViewGrant",
      },
      {
        subTitle: "View Allocated Grants",
        path: "/viewallocatedgrants",
      },
    ],
    icon: <Adjust color="success" />,
    divider: <Divider />,
  },
  {
    title: "Savings",
    text: [
      {
        subTitle: "Add Savings A/Cs",
        path: "/addsavingaccount",
      },
      {
        subTitle: "View Savings A/Cs",
        path: "/viewsavingaccounts",
      },
    ],
    icon: <Adjust color="success" />,
    divider: <Divider />,
  },
  {
    title: "Chart of Accounts",
    text: [
      {
        subTitle: "Cash Book",
        path: "/cashbook",
      },
      {
        subTitle: "All Accounts",
        path: "/allaccounts",
      },

      {
        subTitle: "Trial Balance",
        path: "/trialbalance",
      },
      {
        subTitle: "Profit & Loss",
        path: "/profitandloss",
      },
      {
        subTitle: "Balance Sheet",
        path: "/balancesheet",
      },
    ],
    icon: <Adjust color="success" />,
    divider: <Divider />,
  },
  {
    title: "Reports",
    text: [
      {
        subTitle: "Borrowers Reports",
        path: "/borrowersreport",
      },
      {
        subTitle: "Groups Reports",
        path: "/groupsreports",
      },
      {
        subTitle: "Grants Reports",
        path: "/grantsreports",
      },
      {
        subTitle: "Savings Reports",
        path: "/SavingReports",
      },
    ],
    icon: <Adjust color="success" />,
    divider: <Divider />,
  },
];

const subText = [
  {
    title: "Add Borrower",
  },
  {
    title: "View Borrower",
  },
  {
    title: "Send SMS to Borrowers",
  },
];

export function getMenuItems() {
  return userMenuItems;
}

export function getMenuItemsSubText() {
  return subText;
}
