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

  box-shadow: -10px -10px 40px #ffffff, 20px 20px 40px var(--light-gray);

  transition: all 0.5s ease-out;

  &:before {
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;

    rotate: 45deg;
    border-radius: 3px;

    top: -5px;
    right: 4px;

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
