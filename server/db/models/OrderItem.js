const Sequelize = require("sequelize");
const db = require("../db");

const OrderItem = db.define("orderItem", {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 50,
      isInt: true,
    },
  },
});

module.exports = OrderItem;
