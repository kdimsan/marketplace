import { formatPrice } from "@/utils/priceFormatter";
import React from "react";
import styled from "styled-components";
import BuyButton from "../buyButton";

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
      font-size: 15px;
      color: var(--light-gray);
    }

    h4 {
      font-family: inherit;
      font-size: 13px;
      font-weight: 400;
      color: var(--text-dark-2);

      margin-bottom: 10px;
    }
  }

  @media (min-width: 1024px) {
    > div {
      h3 {
        font-size: 17px;
      }

      h4 {
        font-size: 15px;
      }
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
        <BuyButton infoID={data.id} title={"Add to bag"} />
      </div>
    </Container>
  );
}
