import useProducts from "@/hooks/useProducts";
import React from "react";
import styled from "styled-components";
import SelectSizeButton from "./selectSizeButton";

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
  const { products } = useProducts();

  const sizes = products.flatMap((sizes) => sizes.size);
  const uniqueSizes = Array.from(new Set(sizes));

  const handleSelectedSize = () => {};

  return (
    <FilterBySizeContainer>
      <h3>Sizes</h3>
      <ul>
        {uniqueSizes.sort().map((product) => (
          <li>
            <SelectSizeButton product={product} />
          </li>
        ))}
      </ul>
    </FilterBySizeContainer>
  );
}
