import React from "react";
import styled from "styled-components";
import SelectOption from "./selectOption";
import FiltersTitle from "./filtersTitle";

const FilterByPriceRangeComponent = styled.div`
  ul {
    list-style: none;

    display: flex;
    flex-direction: column;

    margin-top: 10px;

    padding: 0 7px;

    li + li {
      margin-top: 4px;
    }
  }

  @media (min-width: 1024px) {
    ul {
      padding: 0;
    }
  }
`;

export default function FilterByPriceRange() {
  return (
    <FilterByPriceRangeComponent>
      <FiltersTitle title={"Price Range"} />
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
