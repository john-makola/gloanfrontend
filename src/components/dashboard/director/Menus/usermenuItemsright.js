import { Adjust } from "@mui/icons-material";
import { Divider } from "@mui/material";
const userMenuItems = [
  {
    title: "Borrowers",
    text: [
      {
        subTitle: "Approve Borrowers",
        path: "/draftboard",
      },
      {
        subTitle: "Send SMS Reminders",
        path: "/draftboard",
      },
    ],
    icon: <Adjust color="success" />,
    divider: <Divider />,
  },
  {
    title: "Groups",
    text: [
      {
        subTitle: "Approve Groups",
        path: "/draftboard",
      },
      {
        subTitle: "Send SMS Reminders",
        path: "/draftboard",
      },
    ],
    icon: <Adjust color="success" />,
    divider: <Divider />,
  },
  {
    title: "Cash Book",
    text: [
      {
        subTitle: "Postings",
        path: "/draftboard",
      },
      {
        subTitle: "Reconcilliation",
        path: "/draftboard",
      },
    ],
    icon: <Adjust color="success" />,
    path: "/dashboard",
    divider: <Divider />,
  },
  {
    title: "Grants",
    text: [
      {
        subTitle: "Approvals",
        path: "/draftboard",
      },
      {
        subTitle: "Disbursements",
        path: "/draftboard",
      },
    ],
    icon: <Adjust color="success" />,
    divider: <Divider />,
  },
];

export function getMenuItems() {
  return userMenuItems;
}
