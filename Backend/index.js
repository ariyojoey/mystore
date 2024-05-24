require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

require("./config/dbConnection");

const userRouter = require("./routes/userRoute");
const securedRouter = require("./routes/securedRouter");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use("/user", userRouter);
app.use("/api", securedRouter);

////Error Handling middleware
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  console.error(err);
  res.status(err.statusCode).json({ message: err.message });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
