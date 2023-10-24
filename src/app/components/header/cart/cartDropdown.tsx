import React from "react";
import styled from "styled-components";
import CartItem from "./cartItem";

const Container = styled.div`
  position: absolute;
  top: 40px;
  right: -5px;

  padding: 20px;

  background-color: var(--light-blue-2);
  border-radius: 10px;

  display: flex;

  justify-content: center;
  flex-direction: column;
`;

export default function CartDropdown() {
  return (
    <Container>
      <CartItem />
    </Container>
  );
}
