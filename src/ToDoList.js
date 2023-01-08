import React from "react";
// import ToDo from "./ToDo";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  const handleClick = (todoItem, e) => {
    e.preventDefault();
    handleToggle(todoItem);
  };

  return (
    <ul>
      {toDoList.map((todo) => {
        const cls = todo.complete ? "todo strike" : "todo";
        return (
          <div className="todo-list-wrapper">
            <input
              key={todo.id + todo.task}
              type="checkbox"
              checked={todo.complete}
              onClick={handleClick.bind(this, todo)}
            />
            <li
              key={todo.id + todo.task}
              name="todo"
              className={`list-styles ${cls}`}
            >
              {todo.task}
            </li>
          </div>
        );
      })}
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        Clear Completed
      </button>
    </ul>
  );
};

export default ToDoList;
