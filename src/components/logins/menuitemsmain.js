import { TrackChanges, Adjust } from "@mui/icons-material";
import { Divider } from "@mui/material";
const userMenuItemsMain = [
  {
    text: "Home",
    icon: <TrackChanges color="success" />,
    path: "/",
    divider: <Divider />,
    tooltip:"Dashboard"
  },

  {
    text: "Products",
    icon: <Adjust color="success" />,
    path: "/products",
    divider: <Divider />,
    tooltip:"View our Products and Services"
  },
  {
    text: "Pricing",
    icon: <TrackChanges color="success" />,
    path: "/pricing",
    divider: <Divider />,
    tooltip:"View Plans for different Products"
  },
  {
    text: "Reviews",
    icon: <Adjust color="success" />,
    path: "/reviews",
    divider: <Divider />,
    tooltip:"Checkout user reviews for different products"
  },
];

export function getMenuItems() {
  return userMenuItemsMain;
}
