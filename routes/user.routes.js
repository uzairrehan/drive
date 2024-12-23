import express from "express";
import userModel from "./../models/user.model.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.get("/register", (req, res) => {
  res.render("register");
});

router.post(
  "/register",

  // middlewares thirdparty
  body("email").trim().isEmail(),
  body("password").trim().isLength({ min: 5 }),
  body("username").trim().isLength({ min: 3 }),

  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "invalid data",
      });
    }

    const { email, username, password } = req.body;
    console.log(req.body);
    res.send(req.body);
  }
);

export default router;
