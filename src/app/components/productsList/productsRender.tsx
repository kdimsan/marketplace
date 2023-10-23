import { formatPrice } from "@/utils/priceFormatter";
import React from "react";
import styled from "styled-components";

interface Data {
  data: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 455px;

  background: var(--card-background);
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #eeeeee;
  border-radius: 30px;

  padding: 15px 15px 20px;

  img {
    border-radius: 20px 20px 0 0;
  }
  > div {
    margin-top: 7px;
    h3 {
      font-family: inherit;
      font-size: 17px;
      color: var(--light-gray);
    }

    h4 {
      font-family: inherit;
      font-size: 15px;
      font-weight: 400;
      color: var(--text-dark-2);

      margin-top: 5px;
    }

    button {
      width: 100%;
      background-color: none;
      border-radius: 5px;
      border: 1.5px solid var(--light-gray);

      padding: 5px 0;
      margin: 5px 0;

      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      color: var(--text-dark-2);

      transition: all 0.3s;
    }

    button:hover {
      background-color: var(--light-blue);
      color: #eee;
      border: none;
    }
  }
`;

export default function ProductsRender({ data }: Data) {
  const price = formatPrice(data.price);

  return (
    <Container>
      <img src={data.image} alt={`Product ${data.name} image`} />
      <div>
        <h3>{data.name}</h3>
        <h4>{price}</h4>
        <button>Comprar</button>
      </div>
    </Container>
  );
}
