import React from "react";
import styled from "styled-components";
import SelectOption from "./selectOption";

const FilterByPriceRangeComponent = styled.div`
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

export default function FilterByPriceRange() {
  return (
    <FilterByPriceRangeComponent>
      <h3>Price Range</h3>
      <ul>
        <li>
          <SelectOption screenView="R$ 0 - R$ 50" value="0-50" />
        </li>
        <li>
          <SelectOption screenView="R$ 51 - R$ 150" value="51-150" />
        </li>
        <li>
          <SelectOption screenView="R$ 151 - R$ 300" value="151-300" />
        </li>
        <li>
          <SelectOption screenView="R$ 300 - R$ 500" value="300-500" />
        </li>
        <li>
          <SelectOption screenView="R$ 500 +" value="500+" />
        </li>
      </ul>
    </FilterByPriceRangeComponent>
  );
}
