import { useCart } from "@/hooks/useCart";
import useProducts from "@/hooks/useProducts";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface BuyButtonProps {
  title: string;
  infoID: string;
}

const Container = styled.div`
  width: 100%;
  background-color: none;
  border-radius: 5px;
  border: 1.5px solid var(--light-gray);

  margin: 5px 0;

  transition: all 0.3s;

  &:hover {
    background-color: var(--light-blue);

    border: none;
  }

  button {
    width: 100%;
    height: 100%;
    background: none;
    border: none;

    padding: 8px 0;

    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-dark-2);

    &:hover {
      color: #eee;
    }
  }

  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

const SizesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  > span {
    transition: all 0.3s ease;
    &:hover {
      filter: drop-shadow(0px 0px 4px var(--background-secondary));
    }
  }
`;

export default function BuyButton({ title, infoID }: BuyButtonProps) {
  const { products } = useProducts();
  const { addToCart } = useCart();

  const [clicked, setClicked] = useState(false);

  const handleFocus = () => {
    if (infoID) {
      setClicked(!clicked);
    }
  };

  const handleSelectedProductSize = (size: string) => {
    handleAddToCart(infoID, size);
  };

  const renderSizes = () => {
    const selectedProduct = products.find((product) => product.id === infoID);

    if (selectedProduct && selectedProduct.size) {
      return selectedProduct.size.map((size, index) => (
        <span key={index} onClick={() => handleSelectedProductSize(size)}>
          {size}
        </span>
      ));
    }
    return null;
  };
  const handleAddToCart = (id: string, size: string) => {
    addToCart(id, size);
  };

  return (
    <Container>
      <button onFocus={handleFocus} onBlur={handleFocus}>
        {!clicked && <span>{title}</span>}
        {clicked && (
          <SizesContainer>Avaiable sizes:{renderSizes()}</SizesContainer>
        )}
      </button>
    </Container>
  );
}
