import React from "react";
import CartIcon from "./cartIcon";
import styled from "styled-components";
import { useCart } from "@/hooks/useCart";

const Container = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  > svg {
    width: 24px;
    height: 24px;
  }

  div {
    background-color: var(--light-blue);
    border-radius: 100%;
    position: absolute;
    top: 14px;
    right: -9px;

    padding: 1px 5px;
    span {
      font-family: inherit;
      font-size: 14px;
      font-weight: 400;

      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  }
`;

export default function Cart() {
  const { cartItem } = useCart();
  return (
    <Container>
      <CartIcon />
      <div>
        <span>{cartItem}</span>
      </div>
    </Container>
  );
}
