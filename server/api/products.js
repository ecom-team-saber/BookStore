/** @format */

const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { Product, Category } = require("../db/index.js");

router.get("/", async (req, res, next) => {
  try {
    const category = req.query.category;
    if (!category) {
      const products = await Product.findAll({
        include: {
          model: Category,
        },
      });
      res.json(products);
    } else if (category.category) {
      const products = await Product.findAll({
        include: {
          model: Category,
          where: { name: category.category },
        },
      });
      res.json(products);
    } else if (category.name) {
      const products = await Product.findAll({
        where: {
          title: {
            [Op.like]: `%${category.name}%`,
          },
        },
      });
      res.json(products);
    }
  } catch (e) {
    next(e);
  }
});
router.get("/featured", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    let arr = [];
    let nums = [];
    while (nums.length < 4) {
      const newNum = Math.floor(Math.random() * products.length) + 1;
      if (!nums.includes(newNum)) {
        nums.push(newNum);
      }
    }
    await Promise.all(
      nums.map(async (e) => {
        const product = await Product.findByPk(e);
        arr.push(product);
      })
    );

    res.send(arr);
  } catch (e) {
    next(e);
  }
});
router.get("/name", async (req, res, next) => {
  try {
    const name = req.query.name;
    const products = await Product.findAll({
      where: {
        title: {
          [Op.like]: `%${name}%`,
        },
      },
    });
    if (!products) res.status(404).json({ message: "No products found" });
    res.send(products);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    if (!product) res.sendStatus(404);
    const updated = await product.update(req.body);
    res.json(updated);
  } catch (e) {
    next(e);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (e) {
    next(e);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    console.log(product);
    if (!product) res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (e) {
    console.error(e);
    next(e);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    if (!product) res.sendStatus(404);
    await product.destroy();

    res.json({ message: "Product has been deleted." });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
