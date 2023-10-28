import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function HomePage() {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    width: "100vw",
  };

  const contentStyle = {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    color: "black",
    textAlign: "center",
  };

  const buttonStyle = {
    marginTop: "20px",
  };

  return (
    <div style={containerStyle}>
      <Container maxWidth="sm">
        <Box style={contentStyle}>
          <Typography variant="h4" gutterBottom>
            Welcome to My Product Store
          </Typography>
          <Typography variant="body1" paragraph>
            Discover a wide range of products. Please log in or sign up to explore our collection.
          </Typography>
          <Link to="/login">
            <Button variant="contained" color="primary" style={buttonStyle}>
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="outlined" color="primary" style={buttonStyle}>
              Signup
            </Button>
          </Link>
        </Box>
      </Container>
    </div>
  );
}

export default HomePage;
