import React, { useState } from "react";

import { LuShoppingBag } from "react-icons/lu";
import { useCart } from "@/hooks/useCart";
import { Container, CartCounter, Overlay } from "./cartStyle";
import CartDropdown from "./cartDropdown";
import CartItem from "./cartItem";

export default function Cart() {
  const { cartItems } = useCart();

  const [dropdownStatus, setDropdownStatus] = useState(false);

  const cartItemsTotal = cartItems.map((quantity) => quantity.quantity);

  const totalProducts = cartItemsTotal.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  console.log(dropdownStatus);

  return (
    <Container>
      <div onClick={() => setDropdownStatus(true)}>
        <LuShoppingBag />
        <CartCounter>
          <span>{totalProducts}</span>
        </CartCounter>
      </div>

      {dropdownStatus && (
        <>
          <Overlay onClick={() => setDropdownStatus(false)} />

          <CartDropdown className={"open"}>
            <CartItem />
          </CartDropdown>
        </>
      )}
    </Container>
  );
}
