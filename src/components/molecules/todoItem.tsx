import React from "react";
import CheckBox from "../atoms/checkBox";
import Text from "../atoms/text";

interface ITodoItem {
  title: string;
}

const TodoItem = ({ title }: ITodoItem): JSX.Element => {
  return (
    <div className="flex flex-row px-3 items-center bg-gradient-to-r from-cyan-800 to-sky-800 h-12 rounded-lg w-full shadow-md text-white">
      <CheckBox />
      <Text>{title}</Text>
    </div>
  );
};

export default TodoItem;
