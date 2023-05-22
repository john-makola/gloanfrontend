import { TrackChanges, Adjust } from "@mui/icons-material";
import { Divider } from "@mui/material";
const userMenuItems = [
  {
    text: "Home",
    icon: <TrackChanges color="success" />,
    path: "/",
    divider: <Divider />,
  },

  {
    text: "Products",
    icon: <Adjust color="success" />,
    path: "/products",
    divider: <Divider />,
  },
  {
    text: "Pricing",
    icon: <TrackChanges color="success" />,
    path: "/pricing",
    divider: <Divider />,
  },
  {
    text: "Reviews",
    icon: <Adjust color="success" />,
    path: "/reviews",
    divider: <Divider />,
  },
];

export function getMenuItems() {
  return userMenuItems;
}
