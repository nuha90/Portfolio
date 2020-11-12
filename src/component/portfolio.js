import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import mealSharing from "../images/meal-sharing.png";
import userSearch from "../images/github-search.png";
import todo from "../images/todo-list.png";
import quote from "../images/quote-generator.png";

const useStyles = makeStyles({
  mainContainer: {
    height: "100%",
    marginTop: "10rem",
  },
  header: {
    color: "tomato",
  },
  cardContainer: {
    maxWidth: 330,
    margin: "3rem auto",
    background: "#f5edeb",
    borderRadius: "60px",
  },
  button: {
    borderRadius: "50px",
    border: "none",
    transition: "all 0.3s ease",
    padding: " 5px",
    marginLeft: "40%",
    background: "tomato",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Typography variant="h4" className={classes.header} align="center">
        Some Things I've Built
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={mealSharing}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Meal Sharing App
                </Typography>
                <Typography variant="body2" colot="textSecondary" component="p">
                  A web app for people who want to share there food . You can
                  book a meal, rating that meal,and ofcourse add new meal !
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href="https://github.com/nuha90/meal-sharing-app"
                style={{ color: "black", marginLeft: "30%" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
              <button color="primary" className={classes.button}>
                <a
                  href="
                  https://our-meal-sharing.herokuapp.com/"
                  target="_blank"
                >
                  live Demo
                </a>
              </button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 2"
                height="140"
                image={userSearch}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  GitHub User Search
                </Typography>
                <Typography variant="body2" colot="textSecondary" component="p">
                  Simple web app with two pages to search for GitHub users and
                  to see some information about each user
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href="https://github.com/nuha90/user-github-search"
                style={{ color: "black", marginLeft: "30%" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
              <button color="primary" className={classes.button}>
                <a
                  href="
                 https://github-user-searcher.netlify.app"
                  target="_blank"
                >
                  live Demo
                </a>
              </button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 3"
                height="140"
                image={todo}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Todo List
                </Typography>
                <Typography variant="body2" colot="textSecondary" component="p">
                  If you have a long list of todos you can add it here, delete
                  it, update it, and check it if it is done !
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href="https://github.com/nuha90/Todo-List-ReactJs"
                style={{ color: "black", marginLeft: "30%" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
              <button className={classes.button}>
                <a
                  href="
                 https://nuha-todo-list.netlify.app/"
                  target="_blank"
                >
                  live Demo
                </a>
              </button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 3"
                height="140"
                image={quote}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Quote geneartor
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Simply it is a quote generator, you can see your daily quote .
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href="https://github.com/nuha90/Quotes-generator-using-React"
                style={{ color: "black", marginLeft: "30%" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
              <button color="primary" className={classes.button}>
                <a
                  href="
                  https://nuha-quote-generator.netlify.app"
                  target="_blank"
                >
                  live Demo
                </a>
              </button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
