import React, { useState } from "react";
import Button from "../atoms/button";
import Input from "../atoms/input";

interface IAddTodo {
  addTodo: (title: string) => void;
}

const AddTodo = ({ addTodo }: IAddTodo): JSX.Element => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title !== "") {
      addTodo(title);
      setTitle("");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row justify-evenly px-3 items-center bg-gradient-to-r from-cyan-800 to-sky-800 h-12 rounded-lg w-full shadow-md text-white"
    >
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button isDisabled={title === ""}>Add</Button>
    </form>
  );
};

export default AddTodo;
