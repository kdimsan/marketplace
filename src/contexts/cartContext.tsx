"use client";
import { CartContextProps } from "@/types/cartContextType";
import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
});

interface CartContextProviderProps {
  children: React.ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<
    Array<{ id: string; size: string }>
  >([]);

  const addToCart = (id: string, size: string) => {
    setCartItems([...cartItems, { id, size }]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
