import React from "react";
import styled from "styled-components";

const FilterBySizeContainer = styled.div`
  margin: 15px 0;

  ul {
    list-style: none;

    display: grid;
    grid-template-columns: repeat(auto-fill, 30px);
    gap: 5px;
    margin-top: 10px;

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 2.5px;

      border: 1px solid black;

      cursor: pointer;
    }
  }
`;

export default function FilterBySizes() {
  return (
    <FilterBySizeContainer>
      <h3>Sizes</h3>
      <ul>
        <li>PP</li>
        <li>P</li>
        <li>M</li>
        <li>G</li>
        <li>GG</li>
      </ul>
    </FilterBySizeContainer>
  );
}
