const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  userID: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('cart', 'pending', 'complete'),
    allowNull: false
  }
});

module.exports = Order;