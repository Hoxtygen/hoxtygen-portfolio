import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar className = {classes.toolbar}>
          <Typography variant="h4" className = {classes.typo}>Wasiu</Typography>
          <nav>
            <NavLink exact activeClassName = "nav-active" className = "nav-link" to="/">Home</NavLink>
            <NavLink activeClassName = "nav-active" className = "nav-link" to="/contact">Contact</NavLink>
          </nav>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;

const useStyles = makeStyles(() => ({
  header: {
    background: "#222",
    color: "#fff",
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    color: "#fff"
  },
  typo: {
    fontFamily: "Fira Sans, sans serif",
    color: "#f7f7f7",
  }
}));
