const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const cart = require("./api/cart");
const products = require("./api/products");
const orders = require("./api/orders");
const users = require("./api/users");

const app = express();

app.use("/api/products", products);
app.use("/api/users", users);
app.use("/api/cart", cart);
app.use("/api/orders", orders);

app.use(morgan("tiny"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 1347;

app.get("/", (req, res) => {
  res.send("Book Store Api");
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
