const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const once = require('once');
const  asyncHandler= require("express-async-handler");
router.post("/",asyncHandler (async (req, res) => {

    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const token = user.generateAuthToken();
    res.status(200).send({ data: token, message: "logged in successfully" });
  //  window.localStorage.setItem("token", token);
   
}));
router.get("/logout", once((req, res) => {
  console.log(`Hello log out page`);
  res.clearCookie("jwtoken", { path: "/" });
  localStorage.setItem("token", "");
  res.status(200).send("User LOgout");
  
}));
const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = router;
