const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const db = new Sequelize(
  "postgres://localhost:5432/book-store-db" || process.env.DATABASE_URL,
  {
    logging: false,
  }
);

module.exports = db;
