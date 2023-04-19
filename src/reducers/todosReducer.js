const initialState = {
  todos: [],
  showEditForm: false,
  showAddForm: false,
};

const handleTodo = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return { ...state, todos: [...state.todos, action.payload] };
    case "delete":
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload.id;
        }),
      };
    case "edit":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.text = action.payload.text;
          }
          return todo;
        }),
      };
    case "update":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) todo.completed = !todo.completed;
          return todo;
        }),
      };
    case "clear":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.completed !== true),
      };
    case "handleAddFormToggle":
      return { ...state, showAddForm: !state.showAddForm };
    case "editToggle":
      return { ...state, showEditForm: !state.showEditForm };
    default:
      return state;
  }
};

export default handleTodo;
