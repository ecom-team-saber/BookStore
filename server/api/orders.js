const express = require("express");
const router = express.Router();

router.get('/orders', (req, res) => {
    res.json(orders);
});

router.get('/orders/:id', (req, res) => {
    const orderId = parseInt(req.params.id);
    const order = orders.find(o => o.id === orderId);
    if (!order) {
      res.status(404).send('Order not found');
    } else {
      res.json(order);
    }
});

router.put('/orders/:id', (req, res) => {
    const orderId = parseInt(req.params.id);
    const order = orders.find(o => o.id === orderId);
    if (!order) {
      res.status(404).send('Order not found');
    } else {
      const { status } = req.body;
      if (!status) {
        res.status(400).send('Status is required');
      } else {
        order.status = status;
        res.json(order);
      }
    }
});

module.exports = router;
