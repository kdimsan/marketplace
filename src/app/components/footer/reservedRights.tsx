import React from "react";
import styled from "styled-components";

const Container = styled.div`
  span {
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    color: var(--light-blue);
  }
`;

export default function ReservedRights() {
  return (
    <Container>
      <span>&copy; Marketplace By Ricardo Adame Santana</span>
    </Container>
  );
}
