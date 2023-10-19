"use client";
import React from "react";
import styled from "styled-components";
import SelectOption from "./selectOption";
import useProducts from "@/hooks/useProducts";

const FilterByColorContainer = styled.div`
  h3 {
    font-family: inherit;
    font-size: 18px;
    font-weight: 600;
    color: var(--light-gray);
  }

  ul {
    list-style: none;

    display: flex;
    flex-direction: column;

    margin-top: 10px;

    li + li {
      margin-top: 4px;
    }
  }
`;

export default function FilterByColors() {
  const { products } = useProducts();
  const allColors = products.map((product) => product.color);
  const uniqueColors = Array.from(new Set(allColors));
  return (
    <FilterByColorContainer>
      <h3>Colors</h3>
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
