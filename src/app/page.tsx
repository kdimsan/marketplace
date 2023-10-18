"use client";
import styles from "./page.module.css";
import Filters from "./components/filters";

export default function Home() {
  return (
    <main className={styles.main}>
      <Filters />
    </main>
  );
}
