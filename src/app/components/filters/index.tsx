import React from "react";
import FilterByColors from "./filterByColors";
import FilterBySizes from "./filterBySizes";
import styled from "styled-components";
import FilterByPriceRange from "./filterByPriceRange";

const FiltersContainer = styled.div`
  width: 200px;
  height: fit-content;

  background: var(--card-background);
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  border-radius: 25px;
  padding: 15px 15px 20px;
`;

export default function Filters() {
  return (
    <FiltersContainer>
      <FilterByColors />
      <FilterBySizes />
      <FilterByPriceRange />
    </FiltersContainer>
  );
}
