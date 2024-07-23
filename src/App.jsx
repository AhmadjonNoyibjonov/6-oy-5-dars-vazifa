import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleClearAll = () => {
    setTodos([]);
  };

  return (
    <div className="todo-container">
      <h2>Todo App</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add your new todo"
        className="todo-input"
      />
      <button onClick={handleAddTodo} className="add-button">
        Add +
      </button>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            <button
              onClick={() => handleDeleteTodo(index)}
              className="delete-button"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
      <p>You have {todos.length} pending tasks</p>
      <button onClick={handleClearAll} className="clear-button">
        Clear All
      </button>
    </div>
  );
}

export default App;
