const express = require("express");
const products = require("./Data");

const app = express();


app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});

app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});
