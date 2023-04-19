import "./addTodo.css";
import { useSelector, useDispatch } from "react-redux";
import { setTodoValue } from "../../actions";

const AddTodo = ({ onAddTodo, closeForm }) => {
  const text = useSelector((state) => state.handleTodoChange);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo({
      id: Date.now(),
      text,
      completed: false,
    });
    closeForm();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputForm-container">
        <input
          type="text"
          value={text}
          onChange={(e) => dispatch(setTodoValue(e.target.value))}
          placeholder="New task..."
        />
        <button
          className="btn btn-success-custom"
          type="submit"
          disabled={!text}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
