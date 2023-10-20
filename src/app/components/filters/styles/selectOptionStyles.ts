import styled from "styled-components";

export const SelectContainer = styled.div`
  span {
    font-size: 14px;
    font-family: inherit;
    font-weight: 400;
    color: var(--text-dark-2);

    margin-left: 3px;
  }

  .input-container input {
    display: none;
  }
  .input-container {
    display: flex;
    width: fit-content;

    position: relative;
    cursor: pointer;

    font-size: 15px;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #2196f300;
    border-radius: 5px;
    transition: all 0.25s;
  }

  .input-container input:checked ~ .checkmark {
    background-color: var(--light-blue);
  }

  .checkmark::after {
    content: "";
    position: absolute;
    transform: rotate(0deg);
    border: 1px solid black;
    left: 0;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 5px;
    transition: all 0.25s, border-width 0.1s;
  }

  .input-container input:checked ~ .checkmark::after {
    left: 0.45em;
    top: 0.25em;
    width: 0.25em;
    height: 0.5em;
    border-color: #fff0 white white #fff0;
    border-width: 0 0.15em 0.15em 0;
    border-radius: 0em;
    transform: rotate(45deg);
  }
`;
