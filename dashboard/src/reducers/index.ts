import type { Action, ProductFilters } from "../utils/types";

export const initialFilters: ProductFilters = {
  brand: "",
  category: "",
  minRating: 0,
  minPrice: 0,
  maxPrice: 5000,
  page: 1,
  limit: 10,
};

export function filterReducer(
  state: ProductFilters,
  action: Action
): ProductFilters {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        page: 1, // in case the key is not 'page'
        [action.payload.key]: action.payload.value,
      };
    case "RESET_FILTERS":
      return initialFilters;
    default:
      return state;
  }
}