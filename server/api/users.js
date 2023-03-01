const express = require("express");
const router = express.Router();
const { User } = require("../db");

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
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
    res.send({ token: token });
  } catch (err) {
    next(err);
  }
});

// api/users/signup
router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

// api/users/auth    self
router.get("/auth", async (req, res, next) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.sendStatus(404);
  }
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

//GET /api/users/:id
router.get("/:id", requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

//PUT /api/users/:id
router.put("/:id", requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(await user.update(req.body));
  } catch (err) {
    next(err);
  }
});

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
