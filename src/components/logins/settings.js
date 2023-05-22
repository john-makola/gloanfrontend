import { TrackChanges, Adjust } from "@mui/icons-material";
import { Divider } from "@mui/material";
const userSettingsItem = [
  {
    text: "Profile",
    icon: <TrackChanges color="success" />,
    path: "/login",
    divider: <Divider />,
  },

  {
    text: "Account",
    icon: <Adjust color="success" />,
    path: "/products",
    divider: <Divider />,
  },
  {
    text: "DashBoard",
    icon: <TrackChanges color="success" />,
    path: "/pricing",
    divider: <Divider />,
  },
  {
    text: "Logout",
    icon: <Adjust color="success" />,
    path: "/",
    divider: <Divider />,
  },
];

export function getSettingsItems() {
  return userSettingsItem;
}
