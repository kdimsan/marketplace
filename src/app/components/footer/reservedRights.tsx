import React from "react";
import styled from "styled-components";

const Container = styled.div`
  span {
    font-family: inherit;
    font-size: 12px;
    font-weight: 600;
    color: var(--light-blue);
  }

  @media (min-width: 1024px) {
    span {
      font-size: 14px;
    }
  }
`;

export default function ReservedRights() {
  return (
    <Container>
      <span>&copy; Marketplace By Ricardo Adame Santana</span>
    </Container>
  );
}
