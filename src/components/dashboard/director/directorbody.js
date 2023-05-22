import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

import members from "../../mis/images/members.jpg";
import groups from "../../mis/images/groups.jpg";
import grant from "../../mis/images/grant.jpg";
import loan from "../../mis/images/loan.jpg";
import cashbook from "../../mis/images/cashbook.jpg";
import trialbalance from "../../mis/images/trialbalance.jpg";
import profitandloss from "../../mis/images/profitandloss.jpg";
import balancesheet from "../../mis/images/balancesheet.jpg";

const useStyles = makeStyles({
  color: {
    // backgroundColor: "black",
    padding: "0 5px",
  },
});

function DirectorBody() {
  document.title = "G-LOAN Pricing Plans";

  const classes = useStyles();

  return (
    <>
      <Grid className={classes.color} container spacing={2}>
        <Grid item xs={6} md={3} lg={3}>
          <Button>
            <Card>
              <CardMedia component="img" image={members} alt="Members" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body1"
                  color="#00A859"
                  component="div"
                >
                  Members
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Reports
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Button>
            <Card>
              <CardMedia component="img" image={groups} alt="Groups" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body1"
                  color="#00A859"
                  component="div"
                >
                  Groups
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Reports
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Button>
            <Card>
              <CardMedia component="img" image={grant} alt="green iguana" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body1"
                  color="#00A859"
                  component="div"
                >
                  Grants
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Reports
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Button>
            <Card>
              <CardMedia component="img" image={loan} alt="green iguana" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body1"
                  color="#00A859"
                  component="div"
                >
                  Loans
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Reports
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Button>
            <Card>
              <CardMedia component="img" image={cashbook} alt="green iguana" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body1"
                  color="#00A859"
                  component="div"
                >
                  Cash Book
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Report
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Button>
            <Card>
              <CardMedia component="img" image={trialbalance} alt="green iguana" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body1"
                  color="#00A859"
                  component="div"
                >
                  Trial Balance
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Report
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Button>
            <Card>
              <CardMedia component="img" image={profitandloss} alt="green iguana" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body1"
                  color="#00A859"
                  component="div"
                >
                  Profit & Loss
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Report
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Button>
            <Card>
              <CardMedia component="img" image={balancesheet} alt="green iguana" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body1"
                  color="#00A859"
                  component="div"
                >
                  Balance Sheet
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Report
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </Grid>
      </Grid>
   
    
    </>
  );
}

export default DirectorBody;
