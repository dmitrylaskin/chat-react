import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const isAuth = false;

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          Page name
        </Typography>
        <Grid container justifyContent={"flex-end"}>
          {isAuth ? (
            <Button variant="outlined" color="secondary">
              Quit
            </Button>
          ) : (
            <NavLink to="/login">
              <Button variant="outlined" color="secondary">
                Login
              </Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
