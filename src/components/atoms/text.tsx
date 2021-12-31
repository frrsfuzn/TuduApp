import React from "react";

interface IText {
  children: React.ReactNode;
  isDisabled?: boolean;
  size?: "small" | "med" | "large";
}

const Text = ({
  children,
  isDisabled = false,
  size = "med",
}: IText): JSX.Element => {
  let textSize: string | undefined = "text-base";
  switch (size) {
    case "small":
      textSize = "text-sm";
      break;
    case "med":
      textSize = "text-base";
      break;
    case "large":
      textSize = "text-lg";
      break;
    default:
      textSize = "text-base";
  }
  let customClass = `${textSize} ${
    isDisabled ? "text-slate-300" : "text-white"
  }`;
  return <h3 className={customClass}>{children}</h3>;
};

export default Text;
