"use client";
import React from "react";
import styled from "styled-components";
import SelectOption from "./selectOption";

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
  return (
    <FilterByColorContainer>
      <h3>Colors</h3>
      <ul>
        <li>
          <SelectOption screenView="Amarelo" value={"amarelo"} />
        </li>
        <li>
          <SelectOption screenView="Azul" value={"azul"} />
        </li>
        <li>
          <SelectOption screenView="Vermelho" value={"vermelho"} />
        </li>
        <li>
          <SelectOption screenView="Verde" value={"verde"} />
        </li>
      </ul>
    </FilterByColorContainer>
  );
}
