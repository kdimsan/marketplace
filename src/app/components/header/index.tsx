"use client";

import styled from "styled-components";
import React from "react";
import MarketplaceLogo from "./marketplaceLogo";
import Cart from "./cart";

const HeaderContainer = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 100px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <MarketplaceLogo />
      <Cart />
    </HeaderContainer>
  );
}
