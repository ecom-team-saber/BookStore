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
    console.log(req.body);
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
    const [cart, created] = await OrderItem.findOrCreate({
      where: {
        orderId: order.id,
        productId: req.body.productId,
      },
      defaults: {
        quantity: 1,
      },
    });
    if (!created) {
      const newQuant = cart.quantity + req.body.quantity;
      let inv;
      order.orderItems.map((item) => {
        if (item.Product.id === req.body.productId) {
          inv = item.Product.inventory;
        }
      });
      if (newQuant <= inv) {
        await cart.update({ quantity: newQuant });
      }
    }
    res.json(cart);
  } catch (err) {
    console.log(err);
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
router.put("/submit", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.cookies.token);
    const cart = await Order.findOne({
      where: {
        userId: user.id,
        status: "cart",
      },
    });
    await cart.update({ status: "pending" });
    const newCart = await Order.create({ userId: user.id, status: "cart" });
    res.json(newCart);
  } catch (e) {
    next(e);
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

router.get("/guest-items", async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
});
