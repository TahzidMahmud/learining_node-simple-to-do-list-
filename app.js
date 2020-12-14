const fs = require("fs");

const express = require("express");
const app = express();

const todos = JSON.parse(fs.readFileSync(`${__dirname}/data/todos.json`));

const port = 3001;
app.listen(port, () => {
  console.log(`express server runnig at http://localhost:${port}`);
});
app.get("/", (req, res) => {
  //   res.status(200).send("i am runnig from nodemon");
  res.status(200).json({
    status: "success",
    results: todos.length,
    data: todos,
  });
});
