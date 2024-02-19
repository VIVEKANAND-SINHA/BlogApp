var authController = {};

async function login(req, res, next) {
  console.log(req.body);
  console.log("hello login");
  res.send("hello");
}

authController.login = login;
module.exports = authController;
