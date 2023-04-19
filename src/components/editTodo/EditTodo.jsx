import { useSelector, useDispatch } from "react-redux";
import { setTodoValue, editTodo, editFormToggle } from "../../actions";

const EditTodo = ({ todo, onCancelEdit, onEditTodo }) => {
  const text = useSelector((state) => state.handleTodoChange);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodo({ ...todo, text }));
    dispatch(editFormToggle());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputForm-container w-70 m-auto">
        <input
          type="text"
          value={text}
          onChange={(e) => dispatch(setTodoValue(e.target.value))}
          placeholder="Edit task.."
        />
        <button
          className="btn btn-success-custom"
          type="submit"
          disabled={!text}
        >
          Save
        </button>
        <button
          className="btn btn-danger-custom"
          type="button"
          onClick={onCancelEdit}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditTodo;
