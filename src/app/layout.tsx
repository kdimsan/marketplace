import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { CartContextProvider } from "../contexts/cartContext";
import { FilterContextProvider } from "@/contexts/filterContext";

const inter = Inter({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FilterContextProvider>
          <CartContextProvider>{children}</CartContextProvider>
        </FilterContextProvider>
      </body>
    </html>
  );
}
