const db = require("./db");
const Order = require("./models/Order");
const OrderItem = require("./models/OrderItem");
const UserAddress = require("./models/UserAddress");
const Product = require("./models/Product");
const User = require("./models/User");
const Category = require("./models/Category");

User.hasOne(UserAddress, { foreignKey: "userId" });
UserAddress.belongsTo(User, { foreignKey: "userId" });
Order.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Order, { foreignKey: "userId" });
Order.hasMany(OrderItem, { foreignKey: "orderId" });
OrderItem.belongsTo(Order, { foreignKey: "orderId" });
OrderItem.hasOne(Product, { foreignKey: "productId" });
Product.hasMany(OrderItem, { foreignKey: "productId" });
Category.belongsToMany(Product, {
  through: "ProductCategory",
  foreignKey: "categoryId",
});
Product.belongsToMany(Category, {
  through: "ProductCategory",
  foreignKey: "productId",
});

module.exports = {
  db,
  Order,
  OrderItem,
  Product,
  UserAddress,
  User,
  Category,
};
