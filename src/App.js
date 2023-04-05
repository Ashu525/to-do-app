import "./App.css";
import { useState } from "react";
import Todo from "./components/todo/Todo";
import AddTodo from "./components/addTodo/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleEditTodo = (selectedTodo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === selectedTodo.id) {
          todo.text = selectedTodo.text;
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (selectedTodo) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== selectedTodo.id;
      })
    );
  };

  const updateTodoStatus = (selectedTodo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === selectedTodo.id) todo.completed = !todo.completed;
        return todo;
      })
    );
  };

  const clearTodos = () => {
    setTodos(todos.filter((todo) => todo.completed !== true));
  };
  return (
    <section className="h-100 gradient-custom-2">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-10">

            <div className="mask-custom">
              <div className="text-white">

                <div className="text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                    alt="Check" width="60" />
                  <h2 className="my-4">Task List</h2>
                </div>
                <div className="my-40">

                  <div className="text-center">
                    {!showAddForm && <div>
                      {
                        !todos.length && <div>What do you need to do today?</div>
                      }
                      <button className="btn btn-primary-custom my-20" onClick={() => { setShowAddForm(true) }}>Add</button>
                    </div>}
                    {showAddForm && (
                      <AddTodo
                        onAddTodo={handleAddTodo}
                        closeForm={() => setShowAddForm(false)}
                      />
                    )}
                  </div>
                  {todos.length > 0 && <Todo
                    todos={todos}
                    onEditTodo={handleEditTodo}
                    onDeleteTodo={handleDeleteTodo}
                    handleCheck={updateTodoStatus}
                  />}
                </div>
                {todos.length > 0 && <button className="btn btn-primary-custom" onClick={clearTodos}>Clear</button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App;
