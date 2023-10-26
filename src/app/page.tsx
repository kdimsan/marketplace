"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Filters from "./components/filters";
import Header from "./components/header";
import ProductList from "./components/productsList";
import styled from "styled-components";
import Carousel from "./components/carousel";
import Footer from "./components/footer";

import { register } from "swiper/element";
register();

const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const MainSection = styled.div`
  display: grid;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr;
    gap: 20px;
  }
  @media (min-width: 1300px) {
    grid-template-columns: 1fr 3fr;
  }
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
          <Carousel />
          <MainSection>
            <Filters />
            <ProductList />
          </MainSection>
        </Content>
      </main>
      <Footer />
    </div>
  );
}
