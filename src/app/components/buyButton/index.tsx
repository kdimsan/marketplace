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
  const { cartItem, setCartItem } = useCart();
  const [clicked, setClicked] = useState(false);
  const [selectedProductId, setSelectedProduct] = useState<string>("");
  const [selectedProductSize, setSelectedProductSize] = useState("");

  let timeout: NodeJS.Timeout;

  const handleClick = () => {
    setClicked(true);
    setSelectedProduct(infoID);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setClicked(false);
    }, 10000);
  };

  const handleSelectedProductSize = (size: string) => {
    setSelectedProductSize(size);
  };

  const renderSizes = () => {
    if (selectedProductId !== undefined) {
      const selectedProduct = products.find(
        (product) => product.id === selectedProductId
      );
      if (selectedProduct && selectedProduct.size) {
        return selectedProduct.size.map((size, index) => (
          <div key={index}>
            <button onClick={() => handleSelectedProductSize(size)}>
              {size}
            </button>
          </div>
        ));
      }
    }
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