import React from "react";
import CartIcon from "./cartIcon";
import styled from "styled-components";
import { LuShoppingBag } from "react-icons/lu";

const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 20px;
  margin-bottom: 15px;
  > svg {
    fill: #fff;
    width: 26px;
    height: 26px;
  }

  > h1 {
    font-family: inherit;
    font-size: 26px;
    color: var(--background-secondary);
  }
`;

export default function CartHeader() {
  return (
    <Container>
      <LuShoppingBag />
      <h1>My Cart</h1>
    </Container>
  );
}
