import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import todosRoutes from "./routes/todos.js";

const app = express();
// __dirname is not defined in REPL(shell exe ) files in v-14 so user import.meta.url
// const todos = JSON.parse(await readFile(`./data/todos.json`)); => like this relative path or

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use("/todos", todosRoutes);

const CONNECTION_URL =
  "mongodb+srv://trahzid:49lbXXwnH9ClGIxj@todos.qxxkj.mongodb.net/Todos?retryWrites=true&w=majority";
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`express server runnig at http://localhost:${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
mongoose.set("useFindAndModify", false);
//middlewares

app.use(express.json());
app.use(morgan("dev"));
