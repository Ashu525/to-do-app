const initialState = [];

const handleTodo = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    case "edit":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
        return todo;
      });
    case "update":
      return state.map((todo) => {
        if (todo.id === action.payload.id) todo.completed = !todo.completed;
        return todo;
      });
    case "clear":
      return state.filter((todo) => todo.completed !== true);
    default:
      return state;
  }
};

export default handleTodo;
