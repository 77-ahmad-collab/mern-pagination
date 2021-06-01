const express = require("express");

const router = express.Router();
//requiring the controllers for different routes
const { getPosts } = require("./controllers");

router.post("/", getPosts);
module.exports = router;
