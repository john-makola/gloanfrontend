import React from "react";
import { Row } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import womengroups from "./images/womengroups.jpg";
import jengabiashara from "./images/jengabiashara.jpg";
import okoajahazi from "./images/okoajahazi.jpg";
import manwithbanana from "./images/mancarryingbananatrunk.jpg";

const useStyles = makeStyles({
  color: {
    // backgroundColor: "black",
    padding: "0 30px",
  },
});

function ProductsHome() {
  document.title = "G-LOAN Pricing Plans";

  const classes = useStyles();

  return (
    <>
      <Grid className={classes.color} container spacing={3}>
        <Grid item xs={6} md={3} lg={3}>
          <Card>
            <CardMedia
              component="img"
              image={jengabiashara}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Jenga Chama
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get fast access to a business cash advance Your business
                qualifies for a cash advance after consistently transacting on
                an account acquired through G-Loan Savings for 60 days.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Card>
            <CardMedia component="img" image={womengroups} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Weka Kidogo Kidogo Akiba
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Accumulate your savings with G-Loan and get access our almost
                free loans for investments. Every business is unique and your
                transaction volumes and patterns will determine your cash
                advance limit.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Card>
            <CardMedia component="img" image={okoajahazi} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Okoa Chama
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Access credit when you need it. Whether it’s a working capital
                injection or funds to expand your business, you can count on our
                Business Cash Advance to come through for you.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Card>
            <CardMedia
              component="img"
              image={manwithbanana}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mafunzo ya Biashara
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Skills in Personal Effectiveness are essential in the successful
                running of any business. Our trainings highlight the relevance
                of these skills and how best they can be adapted in
                entrepreneurship.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Row className="m-3">
        <h1>
          Meeting you <span style={{ color: "#00A859" }}>Halfway !</span>{" "}
        </h1>
      </Row>
    </>
  );
}

export default ProductsHome;
