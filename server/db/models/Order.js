const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  status: {
    type: Sequelize.ENUM({ values: ["cart", "pending", "complete"] }),
    validate: { allowNull: false },
  },
});

module.exports = Order;
