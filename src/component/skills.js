import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid } from "@material-ui/core";
import myImage from "../images/nuha.jpg";

const useStyles = makeStyles({
  mainContainer: {
    color: "tan",
    margin: "5rem",
  },
});

const Skills = () => {
  const classes = useStyles();

  return (
    <>
      <Box component="div" className={classes.mainContainer}>
        <Grid container>
          <Grid item xs={12} sm={8} md={6}>
            <Typography variant="h3" style={{ color: "tomato" }}>
              About Me
            </Typography>
            <Typography
              variant="body1"
              style={{
                color: "tan",
                width: "100%",
                fontSize: "20px",
                marginTop: "10px",
              }}
            >
              Hello! I'm Nouha , IT Engineer and Full Stack Developer based in
              copenhagen who enjoys building things. I studied the basics of
              programming languages at the University and I developed these
              skills through an advanced course in Hack Your Future code school.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "tan", width: "100%", fontSize: "20px" }}
            >
              Few technologies I've been working with recently :{" "}
            </Typography>
            <ul style={{ fontSize: "20px", marginTop: "10px" }}>
              <li>
                <span style={{ marginRight: "10px" }}> JavaScript</span>
                <img
                  alt="JavaScript"
                  width="25px"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                />
              </li>
              <li>
                <span style={{ marginRight: "10px" }}> React</span>
                <img
                  alt="React"
                  width="25px"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                />
              </li>
              <li>
                <span style={{ marginRight: "10px" }}> Node.js</span>
                <img
                  alt="Node.js"
                  width="25px"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
                />
              </li>
              <li>
                <span style={{ marginRight: "10px" }}> HTML</span>
                <img
                  alt="HTML5"
                  width="25px"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                />{" "}
                & <span style={{ marginRight: "10px" }}>CSS</span>
                <img
                  alt="CSS3"
                  width="25px"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                />
              </li>
              <li>
                <span style={{ marginRight: "10px" }}> Express</span>
                <img
                  alt="express"
                  width="25px"
                  src="https://c0.klipartz.com/pngpicture/925/447/gratis-png-express-js-node-js-javascript-mongodb-node-js.png"
                />
              </li>
              <li>
                <span style={{ marginRight: "10px" }}> MySQL</span>
                <img
                  alt="MySQL"
                  width="25px"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                />
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <div className="imgStyling">
              <img width="90%" src={myImage} alt="nuha najah" />
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Skills;
