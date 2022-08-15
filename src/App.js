import "./App.css";
import React, { useState, useRef } from "react";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const inputRef = useRef();

  const removeHandler = (id) => {
    setToDoList((prevState) => {
      return [
        ...prevState.filter((el) => {
          return el.id !== id;
        }),
      ];
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredInput = inputRef.current.value;

    if (enteredInput === "") {
      alert("Enter A Value");
    } else {
      setToDoList((prevState) => [
        ...prevState,
        { text: enteredInput, id: Math.trunc(Math.random() * 100000) },
      ]);
      inputRef.current.value = "";
    }
  };

  console.log(toDoList);
  return (
    <main>
      <div className="container">
        <div className="box">
          <form onSubmit={submitHandler} className="input">
            <h1>To Do List</h1>
            <input ref={inputRef} type="text" />
            <button className="btn-add">Add</button>
          </form>
          <div className="to-do">
            {toDoList.map((toDo) => {
              return (
                <div style={{ margin: "20px", textAlign: "right" }}>
                  <span style={{ marginRight: "10px" }}>{toDo.text}</span>
                  <button
                    className="btn-check"
                    onClick={() => removeHandler(toDo.id)}
                  >
                    ✔
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
