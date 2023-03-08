const express = require("express");
const router = express.Router();
const { User, UserAddress, Order } = require("../db");

const ms = 43200000;

const requireToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

// api/users/login
router.post("/login", async (req, res, next) => {
  try {
    const token = await User.authenticate(req.body);
    console.log(token);
    const user = await User.findByToken(token);
    res.cookie("token", token, {
      expires: new Date(Date.now() + ms),
      httpOnly: true,
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// api/users/signup
router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    const token = await user.generateToken();
    await Order.create({ userId: user.id, status: "cart" });
    res.cookie("token", token, {
      expires: new Date(Date.now() + ms),
      httpOnly: true,
    });
    res.send(user);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      console.log(err);
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.cookie("token", "", { expires: new Date(Date.now()), httpOnly: true });
  res.send("Logged out");
});

//GET /api/users/
router.get("/", requireToken, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.cookie("token", "", { expires: new Date(Date.now()), httpOnly: true });
  res.send("Logged out");
});

//GET /api/users/profile/
router.get("/profile", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.cookies.token);
    const userAddress = await UserAddress.findByPk(user.id);

    res.json(user);
  } catch (err) {
    next(err);
  }
});
router.put("/address", async (req, res, next) => {
  try {
    id = req.body.userId;
    const [address, created] = await UserAddress.findOrCreate({
      where: { userId: id },
      defaults: req.body,
    });
    console.log(created, address);
    if (!created) {
      await address.update(req.body);
    }
    res.json(address);
  } catch (err) {
    console.error(err);
  }
});

//PUT /api/users/profile/
router.put("/profile", requireToken, async (req, res, next) => {
  try {
    const user = await User.findByToken(req.cookies.token);
    const userAddress = await UserAddress.findByPk(user.id);
    res.json([
      await user.update(req.body[0]),
      await userAddress.update(req.body[1]),
    ]);
  } catch (err) {
    next(err);
  }
});

// //GET /api/users/:id
// router.get("/:id", requireToken, async (req, res, next) => {
//   try {
//     const user = await User.findByPk(req.params.id);
//     res.json(user);
//   } catch (err) {
//     next(err);
//   }
// });

// //PUT /api/users/:id
// router.put("/:id", requireToken, async (req, res, next) => {
//   try {
//     const user = await User.findByPk(req.params.id);
//     res.json(await user.update(req.body));
//   } catch (err) {
//     next(err);
//   }
// });

//DELETE /api/users/:id
router.delete("/:id", requireToken, async (req, res, next) => {
  try {
    const userToDelete = await User.findByPk(req.params.id);
    if (!userToDelete) {
      let err = new Error("Cannot find user to delete");
      err.status = 404;
      next(err);
    } else {
      await userToDelete.destroy();
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
