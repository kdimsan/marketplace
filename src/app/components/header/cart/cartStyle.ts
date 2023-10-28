import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }

  .open {
    top: 80px;
    right: 15px;
  }

  @media (min-width: 1024px) {
    .open {
      top: 82px;
      right: 90px;
    }
  }
`;

export const CartCounter = styled.div`
  background-color: var(--light-blue);
  border-radius: 100%;
  position: absolute;
  top: 14px;
  right: -9px;

  padding: 1px 5px;
  > span {
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
`;
