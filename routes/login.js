const express = require("express");
const { AuthenticateUser } = require("../controllers/login");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email, password } = await req.body;
    const loginCredentials = await AuthenticateUser(email, password);
    console.log(loginCredentials);
    if (loginCredentials === "Invalid User name or Password") {
      res.status(200).send("Invalid User name or Password");
    } else if (loginCredentials === "Server Busy") {
      res.status(200).send("Server Busy");
    } else {
      res.status(200).json({ token: loginCredentials.token });
    }
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
