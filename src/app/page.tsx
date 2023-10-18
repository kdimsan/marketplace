"use client";
import { useEffect, useState } from "react";
import { api } from "./../api";

export default function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get("/");
      setData(response.data);
    }

    fetchProducts();
  }, []);

  console.log(data);

  return (
    <div>
      <main>Main Component</main>
    </div>
  );
}
