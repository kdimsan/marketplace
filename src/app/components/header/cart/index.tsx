import React from "react";
import CartIcon from "../cartIcon";
import styled from "styled-components";

const Container = styled.div``;

export default function Cart() {
  return (
    <Container>
      <CartIcon />
      <span>2</span>
    </Container>
  );
}
