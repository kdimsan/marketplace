import useFilters from "@/hooks/useFilters";
import useProducts from "@/hooks/useProducts";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  gap: 20px;
`;

export default function ProductsRender() {
  const { products } = useProducts();
  const { colors } = useFilters();

  const filteredProducts =
    colors.length > 0
      ? products.filter((product) => colors.includes(product.color))
      : products;

  return (
    <Container>
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={`Product ${product.name} image`} />
          <h3>{product.name}</h3>
          <h4>{product.price}</h4>
          <button>Comprar</button>
        </div>
      ))}
    </Container>
  );
}
