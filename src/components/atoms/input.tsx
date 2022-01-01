import React from "react";

interface IInput {
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string;
}

const Input = ({ value, onChange }: IInput): JSX.Element => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="w-full text-slate-300 bg-transparent focus:outline-none focus:text-white mr-3"
      placeholder="Add Todo"
    />
  );
};

export default Input;
