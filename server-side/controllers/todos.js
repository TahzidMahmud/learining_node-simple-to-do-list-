import { readFile, writeFile } from "fs/promises";
import Todo from "../models/todo.js";

let todos = JSON.parse(await readFile(`${process.cwd()}/data/todos.json`));

export const getToDos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      status: "success",
      results: todos.length,
      data: todos,
    });
  } catch (err) {
    res.status(404).json({
      message: "data not found",
    });
  }
};
export const createToDos = async (req, res) => {
  //   const newId = todos.length + 1;
  const todo = req.body;
  const newTodo = new Todo(todo);
  //   const newTask = Object.assign({ id: newId }, todo);
  //   todos.push(newTask);

  try {
    await newTodo.save();
    res.status(201).json({
      message: "insrted successfully..!!",
      todo: newTodo,
    });
  } catch (err) {
    res.status(409).json({
      message: err.message,
    });
  }

  //   code for writing to a file
  //   writeFile(
  //     `${process.cwd()}/data/todos.json`,
  //     JSON.stringify(todos),
  //     (err) => {
  //       console.log(err);
  //     }
  //   );

  res.status(201).json({
    id: newId,
    message: "post success",
  });
};
