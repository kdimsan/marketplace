"use client";
import React from "react";
import styled from "styled-components";
import SelectOption from "./selectOption";
import useProducts from "@/hooks/useProducts";
import FiltersTitle from "./filtersTitle";

const FilterByColorContainer = styled.div`
  ul {
    display: flex;
    flex-direction: column;

    margin-top: 10px;

    li + li {
      margin-top: 5px;
    }
  }
`;

export default function FilterByColors() {
  const { products } = useProducts();
  const allColors = products.map((product) => product.color);
  const uniqueColors = Array.from(new Set(allColors));
  return (
    <FilterByColorContainer>
      <FiltersTitle title={"Colors"} />
      <ul>
        {uniqueColors.map((color, index) => (
          <li key={index}>
            <SelectOption screenView={color} value={color} />
          </li>
        ))}
      </ul>
    </FilterByColorContainer>
  );
}
