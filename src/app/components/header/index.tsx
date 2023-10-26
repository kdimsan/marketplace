"use client";

import styled from "styled-components";
import React from "react";
import MarketplaceLogo from "./marketplaceLogo";
import Cart from "./cart/index";

const HeaderContainer = styled.header`
  > div {
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #fff;

    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;

    transition: transform 0.3s;
    z-index: 99;
  }
  .hidden {
    transform: translateY(-100%);
  }
  @media (min-width: 1024px) {
    > div {
      padding: 0 100px;
    }
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
