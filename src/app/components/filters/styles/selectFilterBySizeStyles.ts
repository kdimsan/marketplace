import styled from "styled-components";

export const SelecSizeContainer = styled.div`
  span {
    font-size: 13px;
    font-family: inherit;
    font-weight: 400;
    color: var(--text-dark-2);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input-container {
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;

    cursor: pointer;
  }

  .selected {
    border: 2px solid var(--light-blue);
    transition: all 0.2s;
  }
`;
