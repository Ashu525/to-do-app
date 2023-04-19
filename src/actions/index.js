export const addTodo = (todo) => {
  return {
    type: "add",
    payload: todo,
  };
};

export const deleteTodo = (todo) => {
  return {
    type: "delete",
    payload: todo,
  };
};

export const editTodo = (todo) => {
  return {
    type: "edit",
    payload: todo,
  };
};

export const changeTodoStatus = (payload) => {
  return {
    type: "update",
    payload: payload,
  };
};

export const filterTodo = (payload) => {
  return {
    type: "filter",
    payload: payload,
  };
};

export const clearCompletedTodos = (payload) => {
  return {
    type: "clear",
    payload: payload,
  };
};

export const setTodoValue = (payload) => {
  return {
    type: "setTodo",
    payload: payload,
  };
};

export const editFormToggle = () => {
  return {
    type: "editToggle",
  };
};
