import "./App.css";
import { useState } from "react";
import Todo from "./components/todo/Todo";
import AddTodo from "./components/addTodo/AddTodo";

import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  changeTodoStatus,
  clearCompletedTodos,
} from "./actions";

function App() {
  const myState = useSelector((state) => state.handleTodo);
  const dispatch = useDispatch();
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleEditTodo = (todo) => {
    dispatch(editTodo(todo));
  };

  const handleDeleteTodo = (selectedTodo) => {
    dispatch(deleteTodo(selectedTodo));
  };

  const updateTodoStatus = (todo) => {
    dispatch(changeTodoStatus(todo));
  };

  const clearTodos = () => {
    dispatch(clearCompletedTodos());
  };
  return (
    <section className="h-100 gradient-custom-2">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-10">
            <div className="mask-custom">
              <div className="text-white">
                <div className="text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                    alt="Check"
                    width="60"
                  />
                  <h2 className="my-4">Task List</h2>
                </div>
                <div className="my-40">
                  <div className="text-center">
                    {!showAddForm && (
                      <div>
                        {!myState.todos.length && (
                          <div>What do you need to do today?</div>
                        )}
                        <button
                          className="btn btn-primary-custom my-20"
                          onClick={() => {
                            setShowAddForm(true);
                          }}
                        >
                          Add
                        </button>
                      </div>
                    )}
                    {showAddForm && (
                      <AddTodo
                        onAddTodo={handleAddTodo}
                        closeForm={() => setShowAddForm(false)}
                      />
                    )}
                  </div>
                  {myState.todos.length > 0 && (
                    <Todo
                      myState={myState.todos}
                      onEditTodo={handleEditTodo}
                      onDeleteTodo={handleDeleteTodo}
                      handleCheck={updateTodoStatus}
                    />
                  )}
                </div>
                {myState.todos.length > 0 && (
                  <button
                    className="btn btn-primary-custom"
                    onClick={clearTodos}
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
