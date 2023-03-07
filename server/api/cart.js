/** @format */

const express = require("express");
const router = express.Router();

module.exports = router;

const { Order, OrderItem, User, Product } = require("../db/index");

module.exports = router;

// route gets cart associated with userID (status pending)
router.get("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.cookies.token);
    const cart = await Order.findOne({
      where: {
        userId: user.id,
        status: "cart",
      },
      include: {
        model: OrderItem,
        include: { model: Product },
      },
    });

    res.json(cart);
  } catch (err) {
    next(err);
  }
});

// logic to add item
router.post("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.cookies.token);
    const order = await Order.findOne({
      where: {
        userId: user.id,
        status: "cart",
      },
      include: {
        model: OrderItem,
        include: { model: Product },
      },
    });
    const cart = await OrderItem.create({
      orderId: order.id,
      productId: req.body.productId,
      quantity: req.body.quantity,
    });
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

// logic to edit quanity
router.put("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.cookies.token);
    const cart = await OrderItem.findByPk(req.body.id);
    const updatedCart = await cart.update(req.body);
    res.json(updatedCart);
  } catch (err) {
    next(err);
  }
});

// logic to remove an item object -- send in req.body
router.delete("/", async (req, res, next) => {
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
