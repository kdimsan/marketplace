import { useCart } from "@/hooks/useCart";
import useProducts from "@/hooks/useProducts";
import { PricesArray, cartFinalPrice } from "@/utils/cartTotalPrice";
import { formatPrice, totalPrice } from "@/utils/priceFormatter";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 15px;
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
    return { finalPrice: "Erro" };
  });

  const cartTotalPrice = cartFinalPrice(priceArray);

  return (
    <Container>
      {combinedArray.map((product, index) => (
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
      <CartTotalPrice>
        <span>Cart price: {formatPrice(cartTotalPrice)}</span>
      </CartTotalPrice>
    </Container>
  );
}
