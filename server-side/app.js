import express from "express";
import { readFile, writeFile } from "fs/promises";
import morgan from "morgan";
import cors from "cors";

const app = express();
// __dirname is not defined in REPL(shell exe ) files in v-14 so user import.meta.url
// const todos = JSON.parse(await readFile(`./data/todos.json`)); => like this relative path or
let todos = JSON.parse(await readFile(`${process.cwd()}/data/todos.json`));

const port = 3001;
app.listen(port, () => {
  console.log(`express server runnig at http://localhost:${port}`);
});

app.use(cors());
//middlewares

app.use(express.json());
app.use(morgan("dev"));

app.get("/todos", (req, res) => {
  //   res.status(200).send("i am runnig from nodemon");
  res.status(200).json({
    status: "success",
    results: todos.length,
    data: todos,
  });
});
app.post("/todos", (req, res) => {
  const newId = todos.length + 1;
  const body = req.body;
  const newTask = Object.assign({ id: newId }, body);
  todos.push(newTask);
  writeFile(
    `${process.cwd()}/data/todos.json`,
    JSON.stringify(todos),
    (err) => {
      console.log(err);
    }
  );

  res.status(201).json({
    id: newId,
    message: "post success",
  });
});
