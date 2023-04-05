import handleTodo from "./todoReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  handleTodo,
});

export default rootReducer;
