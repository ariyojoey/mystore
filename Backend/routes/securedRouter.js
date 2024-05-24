const passport = require("passport");
const express = require("express");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const db = require("../config/dbConnection");

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(jwtOptions, (jwtPayload, done) => {
    let id = jwtPayload.sub;
    db.query(
      `SELECT * FROM users WHERE PersonID = ${db.escape(id)};`,
      (err, result) => {
        if (!err && result.length > 0) {
          delete result[0].Password;
          done(null, { user: result[0] });
        } else {
          done(null, false);
        }
      }
    );
  })
);

const securedRouter = express.Router();

securedRouter.use(passport.authenticate("jwt", { session: false }));

securedRouter.get("/ping", (req, res) => {
  res.json({
    message: "pong",
    user: req.user,
  });
});

securedRouter.get("/user", (req, res) => {
  res.json({
    msg: "User Info fetched successfully",
    user: req.user,
  });
});

module.exports = securedRouter;

