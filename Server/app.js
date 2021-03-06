const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./routes/routes.js");

//************** port */
const PORT = process.env.PORT || 5000;
//connect to datavbase
require("./db/conn");
//require the moddel
const posts = require("./models/post");

app.get("/", (req, res) => {
  res.send("hello");
});

//middlewares
app.use(express.json());
app.use("/ahmad/v1/posts", router);


app.listen(PORT, () => {
  console.log("port is running on 5000");
});
