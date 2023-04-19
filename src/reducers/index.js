import handleTodo from "./todosReducer";
import handleTodoChange from "./todoReducers";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  handleTodo,
  handleTodoChange,
});

export default rootReducer;
