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
            <Typography variant="body1" style={{ color: "tan", width: "100%" }}>
              Hello! I'm Nouha , IT Engineer and Full Stack Developer based in
              copenhagen who enjoys building things. I studied the basics of
              programming languages at the University and I developed these
              skills through an advanced course in Hack Your Future code school.
            </Typography>
            <Typography variant="body1" style={{ color: "tan", width: "100%" }}>
              Few technologies I've been working with recently :{" "}
            </Typography>
            <ul>
              <li>
                JavaScript
                <img
                  alt="JavaScript"
                  width="20px"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                />
              </li>
              <li>
                React
                <img
                  alt="React"
                  width="20px"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                />
              </li>
              <li>
                Node.js{" "}
                <img
                  alt="Node.js"
                  width="20px"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
                />
              </li>
              <li>
                HTML{" "}
                <img
                  alt="HTML5"
                  width="20px"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                />{" "}
                & CSS
                <img
                  alt="CSS3"
                  width="20px"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                />
              </li>
              <li> Express</li>
              <li>
                MySQL
                <img
                  alt="MySQL"
                  width="20px"
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
