const express = require("express");
const router = express.Router();
const { Order, OrderItem, User, Product } = require("../db/index");

router.get("/", async (req, res) => {
  const token = req.cookies.token;
  const user = await User.findByToken(token);
  const orders = await Order.findAll({
    where: { userId: user.id },
    include: { model: OrderItem, include: { model: Product } },
  });
  res.json(orders);
});

router.get("/:id", async (req, res) => {
  const order = await Order.findByPk(req.params.id, {
    include: { model: OrderItem, include: { model: Product } },
  });
  if (!order) {
    res.status(404).send("Order not found");
  } else {
    res.json(order);
  }
});

// router.put("/:id", (req, res) => {
//   const orderId = parseInt(req.params.id);
//   const order = orders.find((o) => o.id === orderId);
//   if (!order) {
//     res.status(404).send("Order not found");
//   } else {
//     const { status } = req.body;
//     if (!status) {
//       res.status(400).send("Status is required");
//     } else {
//       order.status = status;
//       res.json(order);
//     }
//   }
// });

module.exports = router;
