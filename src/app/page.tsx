"use client";
import styles from "./page.module.css";
import Filters from "./components/filters";
import Header from "./components/header";
import ProductList from "./components/productsList";
import styled from "styled-components";

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

export default function Home() {
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
