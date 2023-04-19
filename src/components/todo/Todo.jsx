import { useState } from "react";
import Alarm from "../../icons/Alarm";
import Check2Square from "../../icons/Check2Square";
import ListTask from "../../icons/ListTask";
import PencilSquare from "../../icons/PencilSquare";
import Trash from "../../icons/Trash";
import EditTodo from "../editTodo/EditTodo";
import "./todo.css";

const Todo = ({ myState, onEditTodo, onDeleteTodo, handleCheck }) => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [filter, setFilter] = useState("all");

  const handleSelectTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const handleCancelEdit = () => {
    setSelectedTodo(null);
  };

  // const handleChagneFilter = (event) => {
  //   console.log(event.target.value);
  //   setFilter(event.target.value);
  // };

  const filteredTodos = myState.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "uncompleted") {
      return !todo.completed;
    } else {
      return true;
    }
  });

  return (
    <div>
      {myState.length > 0 && <div className="todoFilter-container my-20">
        <ul>
          <li onClick={() => { setFilter('all'); }}>
            <ListTask color={filter === 'all' ? 'black' : 'white'} />
            <div className={filter === 'all' ? 'active' : ''}>All</div>
          </li>
          <li onClick={() => { setFilter('completed'); }}>
            <Check2Square color={filter === 'completed' ? 'black' : 'white'} />
            <div className={filter === 'completed' ? 'active' : ''}>Completed</div></li>
          <li onClick={() => { setFilter('uncompleted'); }}>
            <Alarm color={filter === 'uncompleted' ? 'black' : 'white'} />
            <div className={filter === 'uncompleted' ? 'active' : ''}>Uncompleted</div></li>
        </ul>
      </div>}
      {selectedTodo &&
        <EditTodo
          todo={selectedTodo}
          onCancelEdit={handleCancelEdit}
          onEditTodo={(todo) => onEditTodo(todo)}
        />
      }
      <table className="table text-white mb-0">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col"><div className="todoActionButtons">Actions</div></th>
          </tr>
        </thead>
        <tbody>
          {
            filteredTodos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <th>
                    <div className="task-col">
                      <input
                        type="checkbox"
                        name={todo.id}
                        id={todo.id}
                        value={todo}
                        checked={todo.completed}
                        onChange={() => handleCheck(todo)}
                      />
                      <span className="ms-2">{todo.text}</span>
                    </div>
                  </th>
                  <td className="align-middle">
                    <div className="todoActionButtons">
                      <div onClick={() => handleSelectTodo(todo)}>
                        <PencilSquare />
                      </div>
                      <div onClick={() => onDeleteTodo(todo)}>
                        <Trash />
                      </div>
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
};

export default Todo;
