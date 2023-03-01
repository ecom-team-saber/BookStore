const db = require("../db");
const Sequelize = require("sequelize");

const Product = db.define("Product", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmpty: false,
    },
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  productImg: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Product;
