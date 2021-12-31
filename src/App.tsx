import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Todo App
// 1. Implement tailwind css
// 2. using hooks (useRef, useReducer, useCallback, useMemo)
// 3. using input type color

function App() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-gray-800 to-gray-600 h-screen">
      <div className="flex justify-center bg-gradient-to-r from-cyan-700 to-sky-700 w-72 h-80 rounded-lg p-3">
        <div className="flex flex-row justify-center items-center bg-red-600 h-12 rounded-lg w-full">
          <input type="checkbox" />
          <h3 className="text-xl">Mandi</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
