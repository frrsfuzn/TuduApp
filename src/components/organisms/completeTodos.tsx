import { AnimatePresence } from "framer-motion";
import React from "react";
import TodoItem from "../molecules/todoItem";

interface ITodoItem {
  id: number;
  title: string;
  completed: boolean;
}

interface ICompleteTodos {
  todos: ITodoItem[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const CompleteTodos = ({ todos, toggleTodo, removeTodo }: ICompleteTodos) => {
  return (
    <>
      <AnimatePresence>
        {todos
          .filter((todo) => todo.completed !== false)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          ))}
      </AnimatePresence>
    </>
  );
};

export default CompleteTodos;
