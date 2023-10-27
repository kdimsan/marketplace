import React from "react";
import styled from "styled-components";
import CartItem from "./cartItem";

interface CartDropdownProps {
  value: boolean;
}

const Container = styled.div`
  position: fixed;
  top: 80px;
  right: -100%;

  padding: 15px 15px 25px;

  background-color: var(--light-blue-2);
  border-radius: 10px;

  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;

  box-shadow: 16px 16px 40px var(--light-gray);

  transition: all 0.5s ease-out;

  &:before {
    position: absolute;
    content: "";
    width: 25px;
    height: 25px;

    rotate: 45deg;
    border-radius: 3px;

    top: -5px;
    right: 4px;

    z-index: -1;
    background-color: var(--light-blue-2);
  }
`;

export default function CartDropdown({ value }: CartDropdownProps) {
  return (
    <Container className={value ? "open" : ""}>
      <CartItem />
    </Container>
  );
}
