import { useCart } from "@/hooks/useCart";
import useProducts from "@/hooks/useProducts";
import React, { useState } from "react";
import styled from "styled-components";

interface BuyBttonProps {
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
    font-size: 14px;
    font-weight: 600;
    color: var(--text-dark-2);

    &:hover {
      color: #eee;
    }
  }
`;

const ButtonsSizeConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  button {
    border-radius: 5px;

    padding: 6px;
    margin: 2px 0;
    transition: all 0.3s;
    &:hover {
      border: 1px solid var(--background-primary);
    }
  }
`;

export default function BuyButton({ title, infoID }: BuyBttonProps) {
  const { products } = useProducts();
  const { cartItems, addToCart } = useCart();

  const [clicked, setClicked] = useState(false);

  let timeout: NodeJS.Timeout;

  const handleClick = () => {
    if (infoID) {
      setClicked(true);
    }
  };

  const handleMouseLeave = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setClicked(false);
    }, 3000);
  };

  const handleSelectedProductSize = (size: string) => {
    handleAddToCart(infoID, size);
  };

  const renderSizes = () => {
    const selectedProduct = products.find((product) => product.id === infoID);

    if (selectedProduct && selectedProduct.size) {
      return selectedProduct.size.map((size, index) => (
        <div key={index}>
          <button onClick={() => handleSelectedProductSize(size)}>
            {size}
          </button>
        </div>
      ));
    }
    return null;
  };
  const handleAddToCart = (id: string, size: string) => {
    addToCart(id, size);
  };

  return (
    <Container>
      {!clicked && (
        <button tabIndex={0} onClick={handleClick}>
          {title}
        </button>
      )}
      {clicked && (
        <ButtonsSizeConatiner onMouseLeave={handleMouseLeave} tabIndex={0}>
          {renderSizes()}
        </ButtonsSizeConatiner>
      )}
    </Container>
  );
}
