const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://yerimko:0217@boilerplate.iywlb.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      usernerUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!안뇽");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
