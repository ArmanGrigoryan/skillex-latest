import type { ActionDispatch } from "react";

export interface IProduct {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  rating: number;
  imageUrl: string;
}

export type IProductsList = Array<IProduct>;

export type TDataView = "card" | "table";

export interface ProductFilters {
  brand: string;
  category: string;
  minRating: number;
  minPrice: number;
  maxPrice: number;
  page: number;
  limit: number;
}

export type Action =
  { type: "SET_FILTER"; payload: { key: keyof ProductFilters; value: any } }
  | { type: "RESET_FILTERS" };

export type TActionDispatcherFn = ActionDispatch<[action: Action]>