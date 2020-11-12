import React, { useEffect, useState } from "react";
import {
  Typography,
  Avatar,
  Grid,
  Box,
  Collapse,
  Button,
} from "@material-ui/core";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.jpg";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    marginTop: "50px",
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContanier: {
    top: "80%",
    left: "50%",
    height: "100%",
    width: "100%",
    textAlign: "center",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div id="header">
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <Box className={classes.typedContanier}>
          <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="nuha najah" />
          </Grid>
          <Typography variant="h4" className={classes.title}>
            <Typed strings={["Nouha Najah"]} typeSpeed={40} />
          </Typography>
          <br />
          <Typography variant="h5" className={classes.subtitle}>
            <Typed
              strings={[
                "Full Stack Developer",
                "An ambitious junior web developer and driven woman ",
              ]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
          </Typography>
          <Button
            color="secondary"
            variant="outlined"
            size="small"
            endIcon={<SendIcon />}
          >
            <a href="mailto:nuhanajah90@gmail.com" style={{ color: "tomato" }}>
              Say Hello
            </a>
          </Button>
        </Box>
      </Collapse>
    </div>
  );
};

export default Header;
