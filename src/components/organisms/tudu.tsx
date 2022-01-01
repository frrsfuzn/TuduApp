import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTodo from "../molecules/addTodo";
import Navbar from "../molecules/navbar";
import ActiveTodos from "./activeTodos";
import AllTodos from "./allTodos";
import CompleteTodos from "./completeTodos";

interface ITodoItem {
  id: number;
  title: string;
  completed: boolean;
}

const Tudu = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([
    { id: Date.now(), title: "Mandi", completed: false },
  ]);

  const newTodo = (title: string): ITodoItem => {
    return { id: Date.now(), title, completed: false };
  };

  const addTodo = (title: string): void => {
    setTodos((prev) => [...prev, newTodo(title)]);
  };

  const toggleTodo = (id: number) => {
    const newTodos: ITodoItem[] = todos.map((todo) => {
      if (todo.id === id) return { ...todo, completed: !todo.completed };
      return todo;
    });
    setTodos(newTodos);
  };

  const removeTodo = (id: number) => {
    const newTodos: ITodoItem[] = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <Router>
      <div className="bg-gradient-to-r from-cyan-700 to-sky-700 w-72 h-80 rounded-lg p-3 overflow-auto">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <AllTodos
                todos={todos}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
            }
          />
          <Route
            path="active"
            element={
              <ActiveTodos
                todos={todos}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
            }
          />
          <Route
            path="finish"
            element={
              <CompleteTodos
                todos={todos}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
            }
          />
        </Routes>
        <AddTodo addTodo={addTodo} />
      </div>
    </Router>
  );
};

export default Tudu;
