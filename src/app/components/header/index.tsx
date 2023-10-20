"use client";

import styled from "styled-components";
import React from "react";
import MarketplaceLogo from "./marketplaceLogo";
import Cart from "./cart/index";

const HeaderContainer = styled.header`
  > div {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;

    padding: 0 100px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    transition: transform 0.3s;
    z-index: 99;
  }

  .hidden {
    transform: translateY(-100%);
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <div className="header">
        <MarketplaceLogo />
        <Cart />
      </div>
    </HeaderContainer>
  );
}
