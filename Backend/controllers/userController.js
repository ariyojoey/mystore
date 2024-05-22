const { validationResult, param } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../config/dbConnection");
const jwt = require("jsonwebtoken");

const registerUser = (req, res) => {
  console.log("Received registration request:", req.body);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Checking if the email field exists in the request body
  if (!req.body.Email) {
    return res.status(400).json({ msg: "Email is required" });
  }

  const Email = req.body.Email.toLowerCase();

  db.query(
    `SELECT * FROM users WHERE LOWER(Email) = LOWER(${db.escape(Email)});`,
    (err, result) => {
      if (result && result.length) {
        return res.status(409).send({
          msg: "This email is already used!",
        });
      } else {
        bcrypt.hash(req.body.Password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: "Hashing Error",
            });
          } else {
            db.query(
              `INSERT INTO users (FirstName,LastName,Email,Password)
                            VALUES(
                            ${db.escape(req.body.FirstName)},
                            ${db.escape(req.body.LastName)},
                            ${db.escape(Email)},
                            ${db.escape(hash)}
                            );`,
              (err, result) => {
                if (err) {
                  return res.status(500).send({
                    msg: err,
                  });
                }
                res.status(201).send({
                  msg: "The user has been registered with us!",
                });
              }
            );
          }
        });
      }
    }
  );
};

const getUserCredentials = (req, res) => {
  console.log("Received login request:", req.body);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Checking if the email and password fields exist in the request body
  if (!req.body.Email || !req.body.Password) {
    return res.status(400).json({ msg: "Email and password are required" });
  }

  const Email = req.body.Email.toLowerCase();

  db.query(
    `SELECT * FROM users WHERE LOWER(Email) = LOWER(${db.escape(Email)});`,
    (err, result) => {
      if (err) {
        return res.status(500).send({
          msg: "Database error",
        });
      }

      if (!result || result.length === 0) {
        return res.status(404).send({
          msg: "User not found",
        });
      }

      const user = result[0];

      // Checking if the provided password matches the hashed password in the database
      bcrypt.compare(req.body.Password, user.Password, (err, isValid) => {
        if (err) {
          return res.status(500).send({
            msg: "Error comparing passwords",
          });
        }

        if (!isValid) {
          return res.status(401).send({
            msg: "Invalid password",
          });
        }

        // Do not send password in response for security reasons
        delete user.Password;
        const token = jwt.sign({ sub: user.PersonID }, process.env.JWT_SECRET);
        res
          .status(200)
          .send({ status: "success", msg: "Login successful", token });
      });
    }
  );
};

module.exports = {
  getUserCredentials,
  registerUser,
};

