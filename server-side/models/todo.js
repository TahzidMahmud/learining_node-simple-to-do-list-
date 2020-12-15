import mongoose from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema({
  id: Number, // String is shorthand for {type: String}
  task: String,
  description: String,
});

const Todo = mongoose.model("todo", todoSchema);
export default Todo;
