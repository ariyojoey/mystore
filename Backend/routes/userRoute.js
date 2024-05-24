const express = require("express");
const router = express.Router();
const { signUpValidation } = require("../helpers/validation.js");

const UserController = require("../controllers/userController");

router.post("/registerUser", signUpValidation, UserController.registerUser);
router.post("/loginUser", UserController.getUserCredentials);

module.exports = router;
