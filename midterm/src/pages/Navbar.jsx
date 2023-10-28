import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white' }}>
          Midterm
        </Typography>
        <Link to="/" style={{ textDecoration: 'none', color: 'white', marginLeft: 'auto' }}>
          Home
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
