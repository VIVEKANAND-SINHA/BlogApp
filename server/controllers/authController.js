var authController = {};

const { User, Post } = require("../models/accounts");

async function login(req, res, next) {
  console.log(req.body);
  console.log("hello login");
  var results = await User.insertMany([
    { username: "vivekanand sinha", email: "sinhavivekanand8505@gmail.com" },
  ]);
  var users = await User.find();
  res.json(users);
}

async function registerUser(req, res, next) {
  try {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var password = req.body.pass;
    const encodedpass = Buffer.from(password, "utf8").toString("base64");
    var results = await User.insertMany({
      username: fname,
      lastname: lname,
      email: email,
      password: encodedpass,
    });
    console.log(results);
    res.status(200).json(results[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

authController.registerUser = registerUser;
authController.login = login;
module.exports = authController;
