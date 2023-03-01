const Sequelize = require("sequelize");
const db = require("../db");

const UserAddress = db.define("userAddress", {
  addressLine1: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  postalCode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mobile: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = UserAddress;
