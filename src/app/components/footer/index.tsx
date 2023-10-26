import React from "react";
import styled from "styled-components";
import Contact from "./contact";
import ReservedRights from "./reservedRights";

const Container = styled.footer`
  width: 100%;
  height: 100px;

  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  background-color: #fff;

  @media (min-width: 1024px) {
    padding: 0 100px;
    gap: 0;
  }
`;

export default function Footer() {
  return (
    <Container>
      <ReservedRights />
      <Contact />
    </Container>
  );
}
