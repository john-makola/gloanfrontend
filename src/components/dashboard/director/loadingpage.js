import React from "react";
import { TopMenuLogin } from "./logins";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { Row } from "react-bootstrap";
import { makeStyles } from "@mui/styles";
import logo from "./website/images/Logo.png";

const useStyles = makeStyles({
  container: {
    justifyContent: "center",
    alignItems: "right",
    marginTop: "50px",

    width: 100,
  },
  logoimage: {
    width: "50%",
    justifyItems: "center",
    alignItems: "center",
  },
});

function LoadingPage() {
  const classes = useStyles();
  return (
    <div>
      <TopMenuLogin />
      <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
        <div className="Auth-form-container mt-10">
          <div className="Auth-form">
            <div className="Auth-form-content">
              <LinearProgress color="success" />
              <img src={logo} alt="logo" className="logoImage" />
              <LinearProgress color="success" />
              <p className="loadingPageText">GLOAN AFRICA LTD Copyright 2022</p>
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
}

export default LoadingPage;
