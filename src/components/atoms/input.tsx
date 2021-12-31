import React, { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("");
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="text-slate-300 bg-transparent focus:outline-none focus:text-white mr-3"
      placeholder="Add Todo"
    />
  );
};

export default Input;
