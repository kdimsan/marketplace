import { ProductsResponse } from "@/types/productsResponse";
import { ProductType } from "@/types/productsType";
import { api } from "@/utils/api";
import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    api.get<ProductsResponse>("/").then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  return { products };
}
