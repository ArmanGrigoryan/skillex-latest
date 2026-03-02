import { wait } from "../utils/helpers";
import type { ProductFilters } from "../utils/types";

const API_Url = import.meta.env.VITE_API_URL;

export async function fetchProducts(filters: ProductFilters) {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(v => params.append(key, v));
    } else {
      params.append(key, String(value));
    }
  });

  const response = await fetch(`${API_Url}/products?${params.toString()}`);
  await wait(1000);

  if (!response.ok) throw new Error("Failed to fetch");

  return response.json();
}