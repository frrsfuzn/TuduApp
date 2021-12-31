import React from "react";

interface IButton {
  children: React.ReactNode;
}

const Button = ({ children }: IButton): JSX.Element => {
  return (
    <button className="rounded-full bg-slate-500 px-3 py-1 shadow-md bg-gradient-to-r from-cyan-900 to-sky-900 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-sky-700">
      {children}
    </button>
  );
};

export default Button;
