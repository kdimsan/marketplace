import React from "react";
import styled from "styled-components";
import Contact from "./contact";
import ReservedRights from "./reservedRights";

const Container = styled.footer`
  width: 100%;
  height: 100px;

  padding: 0 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
`;

export default function Footer() {
  return (
    <Container>
      <ReservedRights />
      <Contact />
    </Container>
  );
}
