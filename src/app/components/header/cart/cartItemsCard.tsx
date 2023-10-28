import React from "react";
import styled from "styled-components";

export interface DataProps {
  data: {
    id: string;
    finalPrice: string;
    image: string;
    name: string;
    price: string;
    quantity: number;
    size: string;
  }[];
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 250px);

  gap: 15px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 250px);
  }
`;
const CartProductContent = styled.div`
  display: flex;
  gap: 10px;

  background: linear-gradient(315deg, #e6e6e6, #ffffff);
  border-radius: 10px;
  box-shadow: inset -13px -13px 23px #cbcbcb, inset 13px 13px 23px #ffffff;

  padding: 5px 8px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  > img {
    width: 75px;
    border-radius: 8px;
  }

  h3,
  h4,
  span {
    font-family: inherit;
    color: var(--light-blue-2);
  }

  h3 {
    font-size: 16px;
    white-space: nowrap;
    margin: -5px 0 5px;
  }
  h4 {
    font-size: 13px;
  }
  span {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

export default function CartItemsCard({ data }: DataProps) {
  return (
    <Container>
      {data.map((product, index) => (
        <div key={index}>
          {product && (
            <CartProductContent>
              <img src={product.image} alt={"Cart item image"} />
              <div>
                <h3>{product.name}</h3>
                <h4>Selected size: {product.size}</h4>
                <span>Quantity: {product.quantity}</span>
                <h4>Total Price:</h4>
                <span>{product.finalPrice}</span>
              </div>
            </CartProductContent>
          )}
        </div>
      ))}
    </Container>
  );
}
