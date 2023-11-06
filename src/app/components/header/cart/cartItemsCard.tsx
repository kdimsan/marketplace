import React from "react";
import styled from "styled-components";
import CartItemQuantity from "./cartItemQuantity";

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
  grid-template-columns: repeat(1, 300px);

  gap: 15px;

  position: relative;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 250px);
  }
`;
const CartProductContent = styled.div`
  display: flex;
  gap: 13px;

  background: linear-gradient(315deg, #e6e6e6, #ffffff);
  border-radius: 6px;
  box-shadow: inset -13px -13px 23px #cbcbcb, inset 13px 13px 23px #ffffff;

  padding: 5px 8px;

  > div {
    display: flex;
    flex-direction: column;

    padding: 5px 0;
  }
  > img {
    width: 85px;
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
    font-size: 14px;
  }
  span {
    font-size: 14px;
  }
`;

//Adicionar o select no quantidade. usar um estado para pegar o atual e, os clicks, alteram o estado.

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
                <h4>Size: {product.size}</h4>
                <CartItemQuantity
                  id={product.id}
                  size={product.size}
                  itemQuantity={product.quantity}
                />

                <span>{product.finalPrice}</span>
              </div>
            </CartProductContent>
          )}
        </div>
      ))}
    </Container>
  );
}
