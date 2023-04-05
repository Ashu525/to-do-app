import { useState } from "react";
import './addTodo.css'

const AddTodo = ({ onAddTodo, closeForm }) => {
  const [text, setText] = useState("");

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
          onChange={(e) => setText(e.target.value)}
          placeholder="New task..."
        />
        <button className="btn btn-success-custom" type="submit" disabled={!text}>Submit</button>
      </div>
    </form>
  );
};

export default AddTodo;
