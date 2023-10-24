import React, { useState } from "react";
import CartIcon from "./cartIcon";
import { useCart } from "@/hooks/useCart";
import { Container, CartCounter } from "./cartStyle";
import CartDropdown from "./cartDropdown";

export default function Cart() {
  const { cartItems } = useCart();

  const [dropdownStatus, setDropdownStatus] = useState(false);

  const handleDropdownStatus = () => {
    setDropdownStatus(!dropdownStatus);
  };

  const cartItemsTotal = cartItems.map((quantity) => quantity.quantity);

  const totalProducts = cartItemsTotal.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return (
    <Container onClick={handleDropdownStatus}>
      <CartIcon />
      <CartCounter>
        <span>{totalProducts}</span>
      </CartCounter>
      {dropdownStatus && <CartDropdown />}
    </Container>
  );
}
