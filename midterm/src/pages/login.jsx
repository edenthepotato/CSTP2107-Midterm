import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function LoginForm() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "calc(100vh - 64px)",
    width: "100vw",
  };

  const titleStyle = {
    fontSize: "24px",
    margin: "10px 0",
  };

  const buttonStyle = {
    marginTop: "20px",
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <form>
          <div style={containerStyle}>
            <p style={titleStyle}>Login</p>
            <TextField
              label="Username"
              variant="outlined"
              InputProps={{
                style: { background: "white" },
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              InputProps={{
                style: { background: "white" },
              }}
            />
            <Link to="/components/ProductList"> 
              <Button variant="contained" color="primary" style={buttonStyle}>
                Login
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
