import React from "react";
import styled from "styled-components";
import CartItem from "./cartItem";

const Container = styled.div`
  position: absolute;
  top: 45px;
  right: -5px;

  padding: 15px 15px 25px;

  background-color: var(--light-blue-2);
  border-radius: 10px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  box-shadow: -10px -10px 40px #ffffff, 20px 20px 40px var(--light-gray);
  animation: appearing 0.4s ease;

  @keyframes appearing {
    0% {
      top: -20px;
      filter: opacity(0);
    }
    100% {
      top: 45px;
      filter: opacity(1);
    }
  }
`;

const Box = styled.div`
  position: absolute;
  width: 15px;
  height: 40px;

  top: -10px;
  right: 0;

  border-radius: 100% 100% 0 0;

  background-color: var(--light-blue-2);

  &:before {
    position: absolute;
    content: "";
    width: 5px;
    height: 15px;
    border-radius: 5px;
    top: -2px;
    right: 5px;
    background-color: var(--light-blue-2);
  }
`;

export default function CartDropdown() {
  return (
    <Container>
      <Box />
      <CartItem />
    </Container>
  );
}
