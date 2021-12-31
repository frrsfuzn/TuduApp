import React, { useState } from "react";

const CheckBox = (): JSX.Element => {
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className="appearance-none rounded-full w-6 h-6 border-2 border-white checked:bg-white mr-1"
      />
    </label>
  );
};

export default CheckBox;
