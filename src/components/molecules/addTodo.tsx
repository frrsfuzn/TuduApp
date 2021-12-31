import React from "react";
import Button from "../atoms/button";
import Input from "../atoms/input";

const AddTodo = (): JSX.Element => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("oke");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row justify-evenly px-3 items-center bg-gradient-to-r from-cyan-800 to-sky-800 h-12 rounded-lg w-full shadow-md text-white"
    >
      <Input />
      <Button>Add</Button>
    </form>
  );
};

export default AddTodo;
