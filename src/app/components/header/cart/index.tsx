import React from "react";
import CartIcon from "./cartIcon";
import { useCart } from "@/hooks/useCart";
import { Container, CartCounter } from "./cartStyle";

export default function Cart() {
  const { cartItem } = useCart();
  return (
    <Container>
      <CartIcon />
      <CartCounter>
        <span>{cartItem}</span>
      </CartCounter>
    </Container>
  );
}
