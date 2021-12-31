import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/molecules/todoItem";
import Navbar from "./components/molecules/navbar";

// Todo App
// 1. Implement tailwind css
// 2. using hooks (useRef, useReducer, useCallback, useMemo)
// 3. using input type color

function App() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-gray-800 to-gray-600 h-screen">
      <div className="flex flex-col justify-start bg-gradient-to-r from-cyan-700 to-sky-700 w-72 h-80 rounded-lg p-3">
        <Navbar />
        <TodoItem title="Mandi" />
      </div>
    </div>
  );
}

export default App;
