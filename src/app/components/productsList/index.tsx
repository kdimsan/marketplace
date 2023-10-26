import React from "react";
import ProductsRender from "./productsRender";
import useProducts from "@/hooks/useProducts";
import useFilters from "@/hooks/useFilters";

import styled from "styled-components";

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 200px);
  gap: 10px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, 250px);
    justify-content: start;
    gap: 40px 15px;
  }
`;

export default function ProductList() {
  const { products } = useProducts();
  const { colors, size } = useFilters();

  const allFilteredProducts = products.filter((product) => {
    const colorMatch = colors.length === 0 || colors.includes(product.color);
    const sizeMatch =
      size.length === 0 || product.size.some((s) => size.includes(s));

    return colorMatch && sizeMatch;
  });

  return (
    <Container>
      {allFilteredProducts.map((data) => (
        <ProductsRender data={data} key={String(data.id)} />
      ))}
    </Container>
  );
}
