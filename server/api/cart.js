/** @format */

const express = require("express");
const router = express.Router();
module.exports = router;

const { Order, OrderItem } = require("../db/models");

module.exports = router;

// route gets cart associated with userID (status pending)
router.get("/:userId", async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        userId: req.params.userId,
        status_enum: "pending",
      },
      // eager load OrderItems
    });
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

// logic to add item
router.post("/:userId", async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.params.userId,
        status_enum: "cart",
      },
    });
    const cart = await OrderItem.create({
      userId: req.params.userId,
      orderId: order.id,
      productId: req.body.productId,
      quantity: req.body.quantity,
      price: req.body.price,
    });
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

// logic to edit quanity
router.put("/:userId", async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        userId: req.params.userId,
        status_enum: "cart",
      },
    });
    // eager load OrderItems

    const updatedCart = await cart.update(req.body);
    res.json(updatedCart);
  } catch (err) {
    next(err);
  }
});

// logic to remove an item object -- send in req.body
router.delete("/:userId", async (req, res, next) => {
  try {
    const item = await OrderItem.findByPk(req.body.id);
    await item.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// logic to remove all items objects
router.delete("/:userId/all", async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        userId: req.params.userId,
        status_enum: "cart",
      },
    });
    await cart.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
