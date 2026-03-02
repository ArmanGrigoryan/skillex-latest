import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchProducts } from "../../services/productService";
import type { ProductFilters } from "../types";

export default function useProducts(filters: ProductFilters) {

  return useQuery({
    queryKey: ["products", filters],

    queryFn: () => fetchProducts(filters),

    placeholderData: keepPreviousData,
  });
}