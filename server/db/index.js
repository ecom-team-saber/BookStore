const db = require("./db");
const Order = require("./models/Order");
const OrderItem = require("./models/OrderItem");
const UserAddress = require("./models/UserAddress");
const Product = require("./models/Product");
const User = require("./models/User");
const Category = require("./models/Category");

UserAddress.belongsTo(User, { foreignKey: "userId" });
User.hasOne(UserAddress, { foreignKey: "userId" });
Product.belongsToMany(Category, { through: "ProductCategory" });
Category.belongsToMany(Product, { through: "ProductCategory" });
Order.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Order, { foreignKey: "userId" });
OrderItem.belongsTo(Product, { foreignKey: "productId" });
Order.hasMany(OrderItem, { foreignKey: "orderId" });
OrderItem.belongsTo(Order, { foreignKey: "orderId" });
Product.hasMany(OrderItem, { foreignKey: "productId" });

module.exports = {
  db,
  Order,
  OrderItem,
  Product,
  UserAddress,
  User,
  Category,
};
