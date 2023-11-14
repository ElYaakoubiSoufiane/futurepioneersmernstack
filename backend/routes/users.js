const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const asyncHandler = require("express-async-handler");

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already Exist!" });
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created successfully" });
  })
);
// 

// db.users.createIndex( { userName: 1 }, { unique: true, sparse: true } )
const validate = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required().label("User Name"),
    level: Joi.string().required().label("level"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
  });
  return schema.validate(data);
};
module.exports = router;
