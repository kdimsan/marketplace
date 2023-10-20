import React from "react";
import styled from "styled-components";

interface FiltersTitleProps {
  title: string;
}

const Title = styled.h3`
  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  color: var(--light-gray);
`;

export default function FiltersTitle({ title }: FiltersTitleProps) {
  return <Title>{title}</Title>;
}
