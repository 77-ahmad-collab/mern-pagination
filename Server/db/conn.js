const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/poster", {
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"))
  .catch((err) => console.log("not connected"));
