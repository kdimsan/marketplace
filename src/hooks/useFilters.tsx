import { FilterContext } from "@/contexts/filterContext";
import { useContext } from "react";

export default function useFilters() {
  return useContext(FilterContext);
}
