import { useCart } from "@/hooks/useCart";
import useProducts from "@/hooks/useProducts";
import { PricesArray, cartFinalPrice } from "@/utils/cartTotalPrice";
import { formatPrice, totalPrice } from "@/utils/priceFormatter";
import React from "react";
import styled from "styled-components";
import CartItemsCard, { DataProps } from "./cartItemsCard";

const Container = styled.div`
  > div {
    > h1 {
      font-family: inherit;
      font-size: 20px;
      color: var(--background-primary);

      padding: 20px 0;
    }
  }
`;

const CartTotalPrice = styled.div`
  position: absolute;
  bottom: 4px;
  right: 18px;

  > span {
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
  }
`;

export default function CartItem() {
  const { cartItems } = useCart();
  const { products } = useProducts();

  const productInCart = products.filter((product) => {
    return cartItems.some((cartItems) => cartItems.id === product.id);
  });

  const combinedArray = cartItems
    .map((cartItem) => {
      const correspondingProduct = productInCart.find(
        (product) => product.id === cartItem.id
      );

      if (correspondingProduct) {
        const price = formatPrice(correspondingProduct.price);
        const finalItemPrice = totalPrice(
          correspondingProduct.price,
          cartItem.quantity
        );
        return {
          id: cartItem.id,
          size: cartItem.size,
          quantity: cartItem.quantity,
          name: correspondingProduct.name,
          price: price,
          image: correspondingProduct.image,
          finalPrice: finalItemPrice,
        };
      }
      return null;
    })
    .filter((item) => item !== null);

  const priceArray: PricesArray[] = combinedArray.map((price) => {
    if (price?.finalPrice) {
      return { finalPrice: price.finalPrice };
    }
    return { finalPrice: "Error" };
  });

  const cartTotalPrice = cartFinalPrice(priceArray);

  const dataProps = { data: combinedArray } as DataProps;

  return (
    <Container>
      {productInCart.length === 0 && (
        <div>
          <h1>Your bag is empty :(</h1>
        </div>
      )}

      <CartItemsCard data={dataProps.data} />
      <CartTotalPrice>
        <span>Cart price: {formatPrice(cartTotalPrice)}</span>
      </CartTotalPrice>
    </Container>
  );
}
