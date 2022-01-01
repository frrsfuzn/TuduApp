import React from "react";

interface IButton {
  children: React.ReactNode;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({
  children,
  isDisabled = false,
  onClick,
}: IButton): JSX.Element => {
  let styleClass = `rounded-full px-3 py-1 shadow-md  disabled:cursor-default ${
    isDisabled
      ? "bg-sky-900 text-slate-300 opacity-30"
      : "bg-gradient-to-r from-cyan-900 to-sky-900 hover:from-cyan-700 hover:to-sky-700"
  }`;
  return (
    <button onClick={onClick} disabled={isDisabled} className={styleClass}>
      {children}
    </button>
  );
};

export default Button;
