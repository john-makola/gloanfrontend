import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";
// import { Menu, Dropdown } from "semantic-ui-react";
import navlogo from "../../components/images/Navlogo.png";
import { Link } from "react-router-dom";
import userPic from "../../components/images/userphotos/John.jpg";
import Help from "../../components/images/help.png";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu1 from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { makeStyles } from "@mui/styles";
import { getMenuItems } from "./usermenuItems";
import { getSettings } from "../settings";
import { useHistory, useLocation } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";

const pages = ["Products", "Pricing", "Blog"];

const Logoutbtn = () => {
  return "Logout4545" && console.log("Test");
};
const settings = ["Profile", "Account", "Dashboard", Logoutbtn()];

const useStyles = makeStyles((theme) => {
  return {
    logoimage: {
      width: "70%",
    },
    avatar: {
      marginLeft: "5px",
    },
    userDescription: {
      marginRight: "5px",
    },
  };
});

function SystemAdminMenu() {
  const menuItems = getMenuItems();
  const settings = getSettings();
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  const { user, logout, login } = useContext(AuthContext);
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (link) => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? (
    <AppBar sx={{ background: "#8ec449" }}>
      <Toolbar disableGutters>
        {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <img
            src={navlogo}
            alt="Perfomance Management System"
            className={classes.logoimage}
          />
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu1
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {menuItems.map((item) => (
              <MenuItem
                key={item}
                onClick={() => history.push(item.path)}
                className={
                  location.pathname == item.path ? classes.active : null
                }
              >
                <Typography textAlign="center">{item.text}</Typography>
              </MenuItem>
            ))}
          </Menu1>
        </Box>
        {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <img
            src={navlogo}
            alt="Perfomance Management System"
            className={classes.logoimage}
          />
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Menu
            pointing
            inverted
            stackable
            size="massive"
            style={{ background: "#8ec449", color: "#ffd202" }}
          >
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={handleItemClick}
              as={Link}
              to="/dashboard"
            />

            <Dropdown item text="County">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/sectors">
                  All Sectors
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/countymission">
                  County Mission
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/countyvision">
                  County Vision
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/countygoals">
                  County Goals
                </Dropdown.Item>
                <Dropdown item text="Sector Goals">
                  <Dropdown.Menu>
                    <Dropdown.Item
                      icon="bug"
                      text="Agriculture |Livestock | Fishery"
                      as={Link}
                      to="/agrilivefishdev"
                    />
                    <Dropdown.Item
                      icon="tree"
                      text="Water | Energy | Environment"
                      as={Link}
                      to="/waterenergyenv"
                    />
                    <Dropdown.Item
                      icon="ambulance"
                      text="Health Services"
                      as={Link}
                      to="/healthservices"
                    />
                    <Dropdown.Item
                      icon="building"
                      text="Lands | Urban Planning"
                      as={Link}
                      to="/landsurbanplanning"
                    />
                    <Dropdown.Item
                      icon="road"
                      text="Tourism | Wildlife |Trade"
                      as={Link}
                      to="/tourismwildlifetrade"
                    />
                    <Dropdown.Item
                      icon="group"
                      text="Education | Vocational Training"
                      as={Link}
                      to="/educationvocationaltraining"
                    />
                    <Dropdown.Item
                      icon="dollar"
                      text="Finance | Economic Planning"
                      as={Link}
                      to="/fiananceeconomicplanning"
                    />
                    <Dropdown.Item
                      icon="users"
                      text="Office of the Governor "
                      as={Link}
                      to="/officeofgovdpgov"
                    />
                    <Dropdown.Item
                      icon="group"
                      text="County Assembley Services"
                      as={Link}
                      to="/countyassembley"
                    />
                  </Dropdown.Menu>
                </Dropdown>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="WorkPlan">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/projects">
                  Projects
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/contracts">
                  Perfomance Contracts
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/activities">
                  My Activities
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/usertasks">
                  My Tasks
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/targets">
                  My Targets
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/selfappraisal">
                  Self Appraisal
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="Appraisals">
              <Dropdown.Menu>
                <Dropdown item text="Staff">
                  <Dropdown.Menu>
                    <Dropdown.Item
                      icon="bug"
                      text="Appraisees"
                      as={Link}
                      to="/systemadminappraisees"
                    />
                    <Dropdown.Item
                      icon="tree"
                      text="Review Meetings"
                      as={Link}
                      to="/systemadminappraisees"
                    />
                    <Dropdown.Item
                      icon="ambulance"
                      text="Joint Reviews"
                      as={Link}
                      to="/systemadminappraisees"
                    />
                    <Dropdown.Item
                      icon="building"
                      text="Staff Responses"
                      as={Link}
                      to="/systemadminappraisees"
                    />
                    <Dropdown.Item
                      icon="road"
                      text="Supervisor Responses"
                      as={Link}
                      to="/systemadminappraisees"
                    />
                    <Dropdown.Item
                      icon="road"
                      text="Committee Appraisals"
                      as={Link}
                      to="/systemadminappraisees"
                    />
                    <Dropdown.Item
                      icon="road"
                      text="CSB Appraisals"
                      as={Link}
                      to="/systemadminappraisees"
                    />
                    <Dropdown.Item
                      icon="road"
                      text="Appraisal Reports"
                      as={Link}
                      to="/systemadminappraisees"
                    />
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown.Item as={Link} to="/staffresponse">
                  My Staff Response
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/trainings">
                  My Trainings
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/appraisals">
                  My Appraisal Report
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="User Management">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/register">
                  Register Staff
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/employees">
                  Staff Listings
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/departments">
                  Sectors/SubSectors/Departments
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/jobgroups">
                  JobGroups
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </Box>

        <Box
          sx={{ flexGrow: 0, display: { xs: "none", md: "block" } }}
          className={classes.userDescription}
        >
          {" "}
          <Typography>Designation: {user.designation}</Typography>
          <Typography> Payroll No: {user.payrollno}</Typography>
        </Box>
        <Box sx={{ flexGrow: 0 }} className={classes.avatar}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={userPic} />
            </IconButton>
          </Tooltip>
          <Typography>{user.firstname + " " + user.surname}</Typography>
          <Menu1
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((item) => (
              <MenuItem
                key={item}
                onClick={() => history.push(item.path)}
                className={
                  location.pathname == item.path ? classes.active : null
                }
              >
                <Typography textAlign="center">{item.text}</Typography>
              </MenuItem>
            ))}
          </Menu1>
        </Box>
      </Toolbar>
    </AppBar>
  ) : null;
  return menuBar;
}

export default SystemAdminMenu;
