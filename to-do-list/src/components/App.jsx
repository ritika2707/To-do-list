import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handelChange(event) {
    setInputText(event.target.value);
  }

  function handleClick(preItems) {
    setItems((preItems) => [...preItems, inputText]);

    //to clear the inputText wala portion
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handelChange} value={inputText} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDoItem) => (
            <li>{toDoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
