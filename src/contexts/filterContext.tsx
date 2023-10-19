"use client";

import React, { createContext, useState } from "react";

export const FilterContext = createContext({
  colors: [""],
  setColors: (value: string[]) => {},
  size: [""],
  setSize: (value: string[]) => {},
});

interface FilterContextProviderProps {
  children: React.ReactNode;
}

export function FilterContextProvider({
  children,
}: FilterContextProviderProps) {
  const [colors, setColors] = useState<string[]>([]);
  const [size, setSize] = useState<string[]>([]);

  return (
    <FilterContext.Provider value={{ colors, size, setSize, setColors }}>
      {children}
    </FilterContext.Provider>
  );
}
