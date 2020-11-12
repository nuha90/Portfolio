import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid } from "@material-ui/core";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import HomeIcon from "@material-ui/icons/Home";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import EmailIcon from "@material-ui/icons/Email";
import contactImg from "../images/contact.png";

const useStyles = makeStyles({
  mainContainer: {
    height: "100%",
    color: "white",
    marginTop: "10rem",
    textAlign: "center",
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.mainContainer}>
        <Grid container style={{ marginBottom: "10rem" }}>
          <Grid item xs={12} sm={8} md={6}>
            <Typography variant="h4" style={{ color: "tomato" }}>
              {" "}
              Get In Touch
            </Typography>

            <Typography variant="body1" style={{ marginTop: "1rem" }}>
              {" "}
              <HomeIcon /> Paltholmterrasserne 16F, Farum
            </Typography>
            <Typography variant="body1">
              <SmartphoneIcon /> +45 50 12 72 82
            </Typography>
            <Typography variant="body1">
              <EmailIcon /> nuhanajah90@gmail.com
            </Typography>
            <Typography
              variant="h5"
              style={{ marginBottom: "3rem", marginTop: "30px" }}
            >
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
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <img width="80%" height="100%" src={contactImg} alt="contact " />
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          style={{ marginBottom: "0px", color: "tan" }}
        >
          Designed & Built by Nouha Najah
        </Typography>
      </Box>
    </>
  );
};

export default Contact;
