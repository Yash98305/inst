const express = require("express");
const app = express();
const dotenv = require("dotenv");
const errorMiddleware = require("./middlewares/error.js");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
dotenv.config();

app.use(cors());
app.use(express.json());

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const authRoute = require("./routes/authRoute.js");

app.use("/api/v1/auth", authRoute);


app.get("/", (req, res) => {
  res.send({
    message: "welcome to TenserGo application",
  });
});

app.use(errorMiddleware);

module.exports = app;
