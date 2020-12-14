import express from "express";
import { readFile } from "fs/promises";
import path from "path";

const app = express();
// __dirname is not defined in REPL(shell exe ) files in v-14 so user import.meta.url
// const todos = JSON.parse(await readFile(`./data/todos.json`)); => like this relative path or
const todos = JSON.parse(await readFile(`${process.cwd()}/data/todos.json`));

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
