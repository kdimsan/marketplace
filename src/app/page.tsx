"use client";
import styles from "./page.module.css";
import Filters from "./components/filters";
import Header from "./components/header";
import ProductList from "./components/productsList";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

export default function Home() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos < currentScrollPos) {
        document.querySelector(".header")?.classList.add("hidden");
      } else {
        document.querySelector(".header")?.classList.remove("hidden");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Content>
          <Filters />
          <ProductList />
        </Content>
      </main>
    </div>
  );
}
