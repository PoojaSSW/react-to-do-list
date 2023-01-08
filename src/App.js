import React, { useState } from "react";
//mock data
import data from "./data.json";
//components

function App() {
  const [toDoList, setToDoList] = useState(data);
  const [inputtodo, setInputtodo] = useState("");
  React.useEffect = () => {
    setToDoList(data);
  };
  const handleCheckbox = (todoItem, e) => {
    const cloneTodos = [...toDoList];
    const newtodolist = cloneTodos.map((i) => {
      return i.id === todoItem.id ? { ...i, complete: e.target.checked } : i;
    });

    setToDoList(newtodolist);
  };
  const handleClear = () => {
    const newMappedList = toDoList.filter((item) => {
      return !item.complete;
    });
    setToDoList(newMappedList);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    let clonearray = [...toDoList];
    clonearray = [
      ...clonearray,
      { id: clonearray.length + 1, task: inputtodo, complete: false }
    ];
    setToDoList(clonearray);
    setInputtodo("");
  };
  const inputChange = (e) => {
    setInputtodo(e.target.value);
  };
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ul>
        {toDoList.map((todo) => {
          return (
            <div className="todo-wrapper">
              <input
                type="checkbox"
                checked={todo.complete}
                onClick={handleCheckbox.bind(this, todo)}
              />
              <li
                className={`list-style ${
                  todo.complete ? "strike-through" : ""
                }`}
                key={todo.id}
              >
                {todo.task}
              </li>
            </div>
          );
        })}
      </ul>
      <button onClick={handleClear}>Clear completed</button>
      <form onSubmit={formSubmit}>
        <input type="text" value={inputtodo} onChange={inputChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
