import { TrackChanges, Adjust } from "@mui/icons-material";
import { Divider } from "@mui/material";
const userMenuItems = [
  {
    text: "Admin",
    icon: <TrackChanges color="success" />,
    path: "/adminboardsettings",
    divider: <Divider />,
  },

  {
    text: "Help",
    icon: <Adjust color="success" />,
    path: "/help",
    divider: <Divider />,
  },
];

export function getMenuItems() {
  return userMenuItems;
}
