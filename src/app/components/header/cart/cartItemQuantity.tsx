import React, { useState } from "react";
import styled from "styled-components";
import PlusIcon from "./plusIcon";
import MinusIcon from "./minusIcon";
import { useCart } from "@/hooks/useCart";
import { BsTrash3Fill } from "react-icons/bs";

interface CartItemQuantityProps {
  itemQuantity: number;
  size: string;
  id: string;
}

const Container = styled.div`
  width: 50%;
  height: 45px;

  margin: 7px 0;
`;

const LabelVisualyHidden = styled.div`
  position: absolute;
  clip: rect(0, 0, 0);
  width: 2px;
  height: 2px;
  margin: 2px;
  overflow: hidden;
  padding: 0;
  border: 0;
`;

const ItemQuantitySelector = styled.div`
  border: 1px solid var(--light-gray-2);
  border-radius: 4px;

  padding: 2px;

  display: flex;
  align-items: center;
  gap: 5px;

  height: 100%;
  > button {
    > svg {
      width: 12px;
      height: 12px;
    }
  }
  > div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      width: 100%;
      height: 100%;

      border: none;
      background: none;

      display: flex;
      justify-content: center;
      align-items: center;

      padding-left: 45%;

      font-family: inherit;

      font-size: 15px;
    }
  }
`;

const RemoveItem = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  > svg {
    width: 18px !important;
    height: 18px !important;

    color: var(--light-gray);
  }
`;

export default function CartItemQuantity({
  itemQuantity,
  size,
  id,
}: CartItemQuantityProps) {
  const { addToCart, decreaseFromCart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(itemQuantity);

  const handleAddQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    addToCart(id, size);
  };

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      decreaseFromCart(id, size);
    }
  };

  const handleRemove = () => {
    removeFromCart(id, size);
  };

  return (
    <Container>
      <LabelVisualyHidden>
        <label htmlFor="product-quantity">Product Quantity</label>
      </LabelVisualyHidden>

      <ItemQuantitySelector>
        <button onClick={handleDecrementQuantity}>
          <MinusIcon />
        </button>
        <div>
          <input
            type="number"
            name="product-quantity"
            id="product-quantity"
            value={itemQuantity}
          />
        </div>
        <button onClick={handleAddQuantity}>
          <PlusIcon />
        </button>
        <RemoveItem onClick={handleRemove}>
          <BsTrash3Fill />
        </RemoveItem>
      </ItemQuantitySelector>
    </Container>
  );
}
