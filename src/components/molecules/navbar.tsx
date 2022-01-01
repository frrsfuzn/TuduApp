import React from "react";
import Text from "../atoms/text";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="flex flex-row px-3 mb-3 items-center justify-evenly bg-gradient-to-r from-cyan-800 to-sky-800 h-12 rounded-full w-full shadow-md text-white">
      <Link to="/">
        <Text size="small" isDisabled={location.pathname !== "/"}>
          All
        </Text>
      </Link>
      <Link to="/active">
        <Text size="small" isDisabled={location.pathname !== "/active"}>
          Active
        </Text>
      </Link>
      <Link to="/finish">
        <Text size="small" isDisabled={location.pathname !== "/finish"}>
          Finished
        </Text>
      </Link>
    </div>
  );
};

export default Navbar;
