import { useEffect } from "react";
import { useState } from "react";

const EditTodo = ({ todo, onCancelEdit, onEditTodo }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(todo.text)
  }, [todo])

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditTodo({
      ...todo,
      text,
    });
    onCancelEdit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputForm-container w-70 m-auto">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Edit task.."
        />
        <button className="btn btn-success-custom" type="submit" disabled={!text}>Save</button>
        <button className="btn btn-danger-custom" type="button" onClick={onCancelEdit}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditTodo;
