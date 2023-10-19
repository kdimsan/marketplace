import React, { useState } from "react";
import { SelectContainer } from "./styles/selectOptionStyles";
import useFilters from "@/hooks/useFilters";

interface SelectOptionProps {
  value: string;
  screenView: string;
}

export default function SelectOption({ value, screenView }: SelectOptionProps) {
  const [checkStatus, setCheckStatus] = useState(false);

  const { colors, setColors } = useFilters();

  const capitalizeFirstLetter = (color: string) => {
    return color.charAt(0).toUpperCase() + color.slice(1);
  };

  const handleSelectedFilter = (value: string) => {
    if (colors.includes(value)) {
      setColors(colors.filter((color) => color !== value));
    } else {
      setColors([...colors, value]);
    }
    setCheckStatus(!checkStatus);
  };

  return (
    <SelectContainer>
      <label className="input-container" htmlFor={value}>
        <input
          type="checkbox"
          id={value}
          onChange={() => handleSelectedFilter(value)}
          checked={checkStatus}
        />
        <div className="checkmark"></div>
        <span>{capitalizeFirstLetter(screenView)}</span>
      </label>
    </SelectContainer>
  );
}
