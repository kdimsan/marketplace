"use client";
import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
  cartItem: 0,
  setCartItem: (value: number) => {},
});

interface CartContextProviderProps {
  children: React.ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItem, setCartItem] = useState(0);

  return (
    <CartContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </CartContext.Provider>
  );
}
