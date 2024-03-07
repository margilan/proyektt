import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      const h1Element = document.getElementById("myH1");
      if (h1Element) {
        h1Element.textContent = userInput;
      }

      localStorage.setItem("userTask", userInput);
      setUserInput("");
    }
  };

  useEffect(() => {
    const storedTask = localStorage.getItem("userTask");
    if (storedTask) {
      setUserInput(storedTask);
      const h1Element = document.getElementById("myH1");
      if (h1Element) {
        h1Element.textContent = storedTask;
      }
    }
  }, []);

  const handleDelete = () => {
    localStorage.removeItem("userTask");
    setUserInput("");
    const h1Element = document.getElementById("myH1");
    if (h1Element) {
      h1Element.textContent = "";
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="one-card">
          <input
            type="text"
            placeholder="Enter your task here..."
            value={userInput}
            onChange={handleChange}
            onKeyDown={handleEnter}
          />
          <div className="formss">
            <h1 id="myH1">Todo List</h1>
            <button onClick={handleDelete}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
