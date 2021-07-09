import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { AssignmentInd, Home, Face, Chat, NextWeek } from "@material-ui/icons";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link} to="/about-me">
        <IconButton color="inherit">
          <Face />
        </IconButton>
        <p>About me</p>
      </MenuItem>

      <MenuItem component={Link} to="/projects">
        <IconButton color="inherit">
          <NextWeek />
        </IconButton>
        <p>Projects</p>
      </MenuItem>

      <MenuItem component={Link} to="/resume">
        <IconButton color="inherit">
          <AssignmentInd />
        </IconButton>
        <p>Resume</p>
      </MenuItem>

      <MenuItem component={Link} to="/contact">
        <IconButton color="inherit">
          <Chat />
        </IconButton>
        <p>Contact</p>
      </MenuItem>
    </Menu>
  );
  return (
    <>
      <div className={classes.grow}>
        <AppBar position="static" style={{ background: "black" }}>
          <Toolbar>
            <IconButton color="inherit" component={Link} to="/">
              <Home />
              <Typography
                className={classes.title}
                variant="h6"
                noWrap
                style={{ marginRight: "5px" }}
              >
                Home
              </Typography>
            </IconButton>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit" component={Link} to="/about-me">
                <Face /> <Typography variant="body1">About me</Typography>
              </IconButton>

              <IconButton color="inherit" component={Link} to="/projects">
                <NextWeek />
                <Typography variant="body1">Projects</Typography>
              </IconButton>

              <IconButton color="inherit" component={Link} to="/resume">
                <AssignmentInd />
                <Typography variant="body1">Resume</Typography>
              </IconButton>

              <IconButton color="inherit" component={Link} to="/contact">
                <Chat />
                <Typography variant="body1">Contact</Typography>
              </IconButton>
            </div>

            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </>
  );
};

export default Navbar;
