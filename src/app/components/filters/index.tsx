import React from "react";
import FilterByColors from "./filterByColors";
import FilterBySizes from "./filterBySizes";
import styled from "styled-components";
import FilterByPriceRange from "./filterByPriceRange";

const FiltersContainer = styled.div`
  width: 160px;
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
