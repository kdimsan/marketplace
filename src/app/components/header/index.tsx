"use client";

import React from "react";
import MarketplaceLogo from "./marketplaceLogo";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 100px;
  display: flex;
  align-items: center;

  padding: 0 100px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <MarketplaceLogo />
    </HeaderContainer>
  );
}
