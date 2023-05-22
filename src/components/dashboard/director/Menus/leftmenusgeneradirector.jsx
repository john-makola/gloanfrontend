import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Row } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import userAvatar from "../../../mis/images/user.png";

import { getMenuItems, getMenuItemsSubText } from "./usermenuItems";

const useStyles = makeStyles({
  page: {
    background: "#ffffff",
    width: "10%",
  },
  root: {
    display: "flex",
  },

  active: {
    background: "#f4f4f4",
  },
  userImage: {
    marginLeft: "50px",
    borderRadius: "50%",
    width: "20%",
    marginRight: "20px",
  },
  listText: {
    textTransform: "none",
    fontSize: "10px",
    color: "#00A859",
  },
  container: {
    position: "sticky",
    top: 90,
    
  },
});

const LeftMenusGeneralDirector = ({ user }) => {
  const userMenuItems = getMenuItems();
  const subText = getMenuItemsSubText();
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  let activekey = -1;
  return (
    <div className={classes.container}>
      <Row
        className="d-sm-none d-md-block m-0.1"
        style={{ background: "#D9EEE4", color: "#000" }}
      >
        <Row className="mx-1">
          <List>
            <div>
              <ListItem>
                <img
                  src={userAvatar}
                  alt="logo"
                  className={classes.userImage}
                />

                <h6>{" " + user.user.firstname + " " + user.user.lastname}</h6>
              </ListItem>
            </div>
            <Divider />

            <Accordion defaultActiveKey="0">
              {userMenuItems.map((item) => (
                <div>
                  <Accordion.Item eventKey={activekey++}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <ListItem
                          button
                          key={item.title}
                          className={
                            location.pathname === item.path
                              ? classes.active
                              : null
                          }
                        >
                          <Row>
                            {item.text.map((subItem) => (
                              <Button onClick={() => navigate(subItem.path)}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItem>
                                  <ListItemText
                                    primary={subItem.subTitle}
                                    className={classes.listText}
                                  />
                                </ListItem>
                              </Button>
                            ))}
                          </Row>
                        </ListItem>
                        <Divider />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              ))}
            </Accordion>
          </List>
        </Row>
      </Row>
    </div>
  );
};
export default LeftMenusGeneralDirector;
