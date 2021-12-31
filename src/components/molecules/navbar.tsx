import React from "react";
import Text from "../atoms/text";

const Navbar = () => {
  return (
    <div className="flex flex-row px-3 mb-3 items-center justify-evenly bg-gradient-to-r from-cyan-800 to-sky-800 h-12 rounded-full w-full shadow-md text-white">
      <Text size="small">All</Text>
      <Text size="small" isDisabled>
        Active
      </Text>
      <Text size="small" isDisabled>
        Finished
      </Text>
    </div>
  );
};

export default Navbar;
