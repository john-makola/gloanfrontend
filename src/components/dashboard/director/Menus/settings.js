import { TrackChanges, Adjust } from "@mui/icons-material";
import { Divider } from "@mui/material";

const settings = [
  {
    text: "Profile",
    icon: <TrackChanges color="success" />,
    path: "/register",
    divider: <Divider />,
  },

  {
    text: "Account",
    icon: <Adjust color="success" />,
    path: "/register",
    divider: <Divider />,
  },
  {
    text: "DashBoard",
    icon: <TrackChanges color="success" />,
    path: "/dashboard",
    divider: <Divider />,
  },
  {
    text: "Logout",
    icon: <Adjust color="success" />,
    path: "/",
    divider: <Divider />,
  },
];

export function getSettings() {
  return settings;
}
