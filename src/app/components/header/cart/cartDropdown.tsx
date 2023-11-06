import React from "react";
import styled from "styled-components";
import CartHeader from "./cartHeader";
export interface CartDropdownProps {
  className: string;
  children: React.ReactNode;
}

const Container = styled.div`
  > div {
    position: fixed;
    top: 80px;
    right: -100%;

    width: 90%;
    min-height: 50%;
    max-height: 50%;

    padding: 15px 15px 25px;

    background-color: var(--light-blue-2);
    border-radius: 7px;

    display: flex;

    justify-content: start;
    align-items: center;
    flex-direction: column;

    box-shadow: 16px 16px 40px var(--light-gray);

    transition: all 0.5s ease-out;

    z-index: 2;

    &:before {
      position: absolute;
      content: "";
      width: 25px;
      height: 25px;

      rotate: 45deg;
      border-radius: 2px;

      top: -5px;
      right: 5px;

      z-index: -1;
      background-color: var(--light-blue-2);
    }
  }
`;

export default function CartDropdown({
  className,
  children,
}: CartDropdownProps) {
  return (
    <Container>
      <div className={className}>
        <CartHeader />
        {children}
      </div>
    </Container>
  );
}
