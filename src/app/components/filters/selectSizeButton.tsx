import React, { useState } from "react";

import { SelecSizeContainer } from "./styles/selectFilterBySizeStyles";
import useFilters from "@/hooks/useFilters";

interface SelectSizeButtonProps {
  product: string;
}

export default function SelectSizeButton({ product }: SelectSizeButtonProps) {
  const [selected, setSelected] = useState(false);
  const { size, setSize } = useFilters();

  const handleSelectedSize = (selectedSize: string) => {
    if (size.includes(selectedSize)) {
      setSize(size.filter((removedSize) => removedSize !== selectedSize));
    } else {
      setSize([...size, selectedSize]);
    }
    setSelected(!selected);
  };

  return (
    <SelecSizeContainer>
      <label
        className={`${
          selected ? "input-container selected" : "input-container"
        } `}
        htmlFor={product}
        onClick={() => handleSelectedSize(product)}
      >
        <span>{product}</span>
      </label>
    </SelecSizeContainer>
  );
}
