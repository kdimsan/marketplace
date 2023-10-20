import useProducts from "@/hooks/useProducts";
import React from "react";
import styled from "styled-components";
import SelectSizeButton from "./selectSizeButton";
import FiltersTitle from "./filtersTitle";

const FilterBySizeContainer = styled.div`
  margin: 15px 0;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, 30px);
    gap: 5px 7px;
    margin-top: 10px;

    li {
      display: flex;
      align-items: center;

      cursor: pointer;
    }
  }
`;

export default function FilterBySizes() {
  const { products } = useProducts();

  const sizes = products.flatMap((sizes) => sizes.size);
  const uniqueSizes = Array.from(new Set(sizes));

  return (
    <FilterBySizeContainer>
      <FiltersTitle title={"Sizes"} />
      <ul>
        {uniqueSizes.sort().map((product, index) => (
          <li key={index}>
            <SelectSizeButton product={product} />
          </li>
        ))}
      </ul>
    </FilterBySizeContainer>
  );
}
