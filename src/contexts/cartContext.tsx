"use client";
import { CartContextProps } from "@/types/cartContextType";
import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
  decreaseFromCart: () => {},
  removeFromCart: () => {},
});

interface CartContextProviderProps {
  children: React.ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<
    Array<{ id: string; size: string; quantity: number }>
  >([]);

  const addToCart = (id: string, size: string) => {
    const updatedCartItems = [...cartItems];

    const existingItemIndex = updatedCartItems.findIndex(
      //retorna o index do array updatedCartItems
      (item) => item.id === id && item.size === size
    );

    if (existingItemIndex !== -1) {
      updatedCartItems[existingItemIndex].quantity += 1;
    } else {
      updatedCartItems.push({ id, size, quantity: 1 });
    }
    setCartItems(updatedCartItems);
  };

  const decreaseFromCart = (id: string, size: string) => {
    const updatedCartItems = [...cartItems];

    const existingItemIndex = updatedCartItems.findIndex(
      (item) => item.id === id && item.size === size
    );

    if (existingItemIndex !== -1) {
      updatedCartItems[existingItemIndex].quantity -= 1;
    } else {
      updatedCartItems.push({ id, size, quantity: 1 });
    }
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (id: string, size: string) => {
    const updatedCartItems = cartItems.filter(
      (item) => !(item.id === id && item.size === size)
    );

    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, decreaseFromCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
