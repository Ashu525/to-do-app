const initialState = "";

const handleTodoChange = (state = initialState, action) => {
  switch (action.type) {
    case "setTodo":
      return action.payload;
    default:
      return state;
  }
};

export default handleTodoChange;
