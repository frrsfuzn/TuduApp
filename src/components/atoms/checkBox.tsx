import React, { useState } from "react";

interface ICheckBox {
  checked?: boolean | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const CheckBox = ({ checked, onChange }: ICheckBox): JSX.Element => {
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className="appearance-none rounded-full w-6 h-6 border-2 border-white checked:bg-white mr-1"
        onChange={onChange}
        checked={checked}
      />
    </label>
  );
};

export default CheckBox;
