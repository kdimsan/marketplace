import React, { useState } from "react";
import { SelectContainer } from "./styles/selectOptionStyles";

interface SelectOptionProps {
  value: string;
  screenView: string;
}

export default function SelectOption({ value, screenView }: SelectOptionProps) {
  const [checkStatus, setCheckStatus] = useState(false);

  const handleCheckStatus = () => {
    setCheckStatus(!checkStatus);
  };

  const capitalizeFirstLetter = (color: string) => {
    return color.charAt(0).toUpperCase() + color.slice(1);
  };

  return (
    <SelectContainer>
      <label className="input-container" htmlFor={value}>
        <input
          type="checkbox"
          id={value}
          onChange={handleCheckStatus}
          checked={checkStatus}
        />
        <div className="checkmark"></div>
        <span>{capitalizeFirstLetter(screenView)}</span>
      </label>
    </SelectContainer>
  );
}
