import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const classes = useStyles()
  return (
    <>
      <AppBar position="fixed" className= {classes.header}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Wasiu</Typography>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;

const useStyles = makeStyles(() => ({
  header: {
    // background: "#318a74"d
    background: "#222",
    color: "#fff"
  }
}))