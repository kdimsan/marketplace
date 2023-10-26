import React from "react";
import styled from "styled-components";
import CloseFilterIcon from "./closeFilterIcon";

interface CloseFiltersButtonProps {
  onClick: () => void;
}

const Container = styled.button`
  width: fit-content !important;
  background: none !important;
  border: none !important;
  padding: 0 !important;

  box-shadow: none !important;

  position: absolute;
  top: 20px;
  right: 15px;

  > svg {
    width: 20px;
    height: 20px;
  }
`;

export default function CloseFiltersButton({
  onClick,
}: CloseFiltersButtonProps) {
  return (
    <Container onClick={onClick}>
      <CloseFilterIcon />
    </Container>
  );
}
