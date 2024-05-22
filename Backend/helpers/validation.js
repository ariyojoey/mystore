const { check } = require("express-validator");

exports.signUpValidation = [
  check("FirstName", "FirstName is required").not().isEmpty(),
  check("LastName", "LastName is required").not().isEmpty(),
  check("Email", "Enter a valid mail")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("Password", "Password is required").isLength({ min: 6 }),
  check("ConfirmPassword", "Passwords do not match").custom((value, { req }) => {
    if (value !== req.body.Password) {
      throw new Error("Passwords must match");
    }
    return true;
  })
];

