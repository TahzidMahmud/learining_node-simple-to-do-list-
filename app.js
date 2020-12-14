const express = require("express");
const app = express();

const port = 3001;
app.listen(port, () => {
  console.log(`express server runnig at http://localhost:${port}`);
});
app.get("/", (req, res) => {
  res.status(200).send("i am runnig from nodemon");
});
