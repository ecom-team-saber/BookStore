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

// const cookieParser = require("cookie-parser");
// const { Order, OrderItem, User, Product } = require("../db/index");

// router.use(cookieParser());
// router.get("/", async (req, res) => {
//   const token = req.cookies.token;
//   const user = await User.findByToken(token);
//   console.log(user);
//   const orders = await Order.findAll({
//     where: { userId: user.id, status: "cart" },
//   });
//   const items = await OrderItem.findAll({
//     where: { orderId: orders[0].id },
//     include: [{ model: Product }],
//   });
//   res.json(items);
// });
