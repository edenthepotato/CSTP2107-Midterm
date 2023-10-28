import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const productBoxStyle = {
    backgroundColor: "",
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  };

  const productImageStyle = {
    maxWidth: "50%",
    height: "auto",
    marginBottom: "10px",
    borderRadius: "10px 10px 0 0",
  };

  const descriptionStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    borderRadius: "0 0 10px 10px",
  };

  const appBarStyle = {
    backgroundColor: "white",
    position: "sticky",
    top: "0",
  };

  const headerStyle = {
    color: "black",
    flexGrow: 1,
  };

  const logoutButtonStyle = {
    color: "blue",
  };

  const logout = () => {
    navigate("/");
  };

  return (
    <div>
      <AppBar style={appBarStyle}>
        <Toolbar>
          <Typography variant="h6" style={headerStyle}>
            Products
          </Typography>
          <Button style={logoutButtonStyle} onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <div style={{ paddingTop: "64px" }}>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Paper elevation={3} style={productBoxStyle}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={productImageStyle}
                />
                <Typography variant="subtitle1" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body2" style={descriptionStyle}>
                  {product.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default ProductList;
