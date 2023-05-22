import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import logo from "../website/images/Logo.png";
import { getMenuItems } from "./menuitems";
import { getSettingsItems } from "./settings";
import { useNavigate, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import LoginRegisterTab from "./loginregistertab";

const useStyles = makeStyles((theme) => {
  return {
    logoimage: {
      width: "5%",
    },
    avatar: {
      marginLeft: "5px",
    },
    userDescription: {
      marginRight: "5px",
    },
  };
});

const style = {
  position: "absolute",
  top: "25%",
  left: "80%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#D9EEE4",
  borderRadius: 5,
  // boxShadow: "0 15px 15px 0 rgb(142, 196, 73)",
  pt: 2,
  px: 4,
  pb: 3,
};

const TopMenuLogin = (props) => {
  const menuItems = getMenuItems();
  const settings = getSettingsItems();
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const headerNav1 = {
    color: "#00A859",
    fontWeight: "bold",
  };
  const headerNav2 = {
    color: "#727376",
    fontWeight: "bold",
  };

  return (
    <AppBar position="static" style={{ background: "#D9EEE4" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} alt="logo" className={classes.logoimage} />
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
              color: "#727376",
              textDecoration: "none",
            }}
          ></Typography>

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
            <Menu
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
              {menuItems.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

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
              fontWeight: 500,
              letterSpacing: ".2rem",
              color: "#727376",
              textDecoration: "none",
            }}
          >
            G-L
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 1 }}>
            <Typography>
              <h1 style={headerNav1}>Community Group Loans</h1>
              <h4 style={headerNav2}>
                We support registered and non-registered groups
              </h4>
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {menuItems.map((item) => (          
              <div>
                <Button
                  key={item}
                  onClick={() => navigate(item.path)}
                  sx={{ my: 2, color: "#727376", display: "block" }}
                  className={
                    location.pathname === item.path ? classes.active : null
                  }
                >
                  {item.text}
                </Button>
              </div>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button onClick={handleOpen} style={{ color: "#00A859" }}>
              Sign in or Register
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 400 }}>
                <h4 id="parent-modal-title" style={{ textAlign: "center" }}>
                  Members Login
                </h4>
                {/* 
                <Login /> */}
                <LoginRegisterTab />
              </Box>
            </Modal>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="GLOAN" src="/static/images/avatar/6.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
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
                  onClick={() => navigate(item.path)}
                  className={
                    location.pathname === item.path ? classes.active : null
                  }
                >
                  <Typography textAlign="center">{item.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopMenuLogin;
