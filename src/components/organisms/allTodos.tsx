import React from "react";
import TodoItem from "../molecules/todoItem";

interface ITodoItem {
  id: number;
  title: string;
  completed: boolean;
}

interface IAllTodos {
  todos: ITodoItem[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const AllTodos = ({ todos, toggleTodo, removeTodo }: IAllTodos) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </>
  );
};

export default AllTodos;
