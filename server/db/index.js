const db = require("./db");
const Order = require("./models/Order");
const OrderItem = require("./models/OrderItem");
const UserAddress = require("./models/UserAddress");
const Product = require("./models/Product");
const User = require("./models/User");

module.exports = {
  db,
  Order,
  OrderItem,
  Product,
  UserAddress,
  User,
};
