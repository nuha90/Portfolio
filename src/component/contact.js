import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Typed from "react-typed";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import HomeIcon from "@material-ui/icons/Home";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles({
  mainContainer: {
    color: "white",
    textAlign: "center",
    height: "100%",
    margin: "5rem auto ",
    padding: "0",
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="div" className={classes.mainContainer}>
        <Typography variant="h3" style={{ color: "tomato" }}>
          <Typed
            strings={["Get In Touch"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />{" "}
        </Typography>

        <Typography variant="h5" style={{ marginTop: "1rem" }}>
          {" "}
          <HomeIcon /> Roskildevej 141, valby
        </Typography>
        <Typography variant="h5" style={{ marginTop: "1rem" }}>
          <SmartphoneIcon /> +45 50 12 72 82
        </Typography>
        <Typography variant="h5" style={{ marginTop: "1rem" }}>
          <EmailIcon /> nuhanajah90@gmail.com
        </Typography>
        <Typography variant="h5" style={{ marginTop: "30px" }}>
          {" "}
          <a
            href="https://www.linkedin.com/in/nouha-najah-90/"
            style={{
              color: "white",
              marginRight: "10px",
            }}
          >
            <LinkedInIcon />
          </a>
          <a href="https://github.com/nuha90" style={{ color: "white" }}>
            <GitHubIcon />
          </a>
          <a
            href="https://www.facebook.com/nuha.najah/"
            style={{ color: "white" }}
          >
            {" "}
            <FacebookIcon />
          </a>
        </Typography>

        <Typography
          variant="body2"
          style={{ color: "tan", marginTop: "5rem ", padding: "1rem" }}
        >
          Designed & Built by Nouha Najah
        </Typography>
      </Box>
    </>
  );
};

export default Contact;
