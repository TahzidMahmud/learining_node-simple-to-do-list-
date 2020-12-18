// reducer = (state,action)
const todos_reducer = (todos = [], action) => {
  switch (action.type) {
    case "crate":
      return todos;

    default:
      break;
  }
};

export default todos_reducer;
