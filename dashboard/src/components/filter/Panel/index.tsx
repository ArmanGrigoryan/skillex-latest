import { useCallback } from "react";
import SelectFilter from "../Select/Index";
import LimitSelect from "../LimitSelect";
import Pagination from "../Pagination/Index";
import PriceRatingFilter from "../PriceRatingFilter/Index";
import { Category_Options } from "../../../utils/constants";
import type { IProductsList, ProductFilters, TActionDispatcherFn } from "../../../utils/types";

interface IProps {
  data: IProductsList;
  pagination: {
    total: number;
    totalPages: number;
  };
  filters: ProductFilters;
  dispatch: TActionDispatcherFn;
}

const FiltersPanel = ({ 
  data,
  pagination,
  filters, 
  dispatch 
}: IProps) => {

  if (!data) return null;

  const changeHandler = useCallback(
    <T,>(key: keyof ProductFilters, value: T) => {
      dispatch({
        type: "SET_FILTER",
        payload: { key, value },
      });
    },
    [dispatch]
  );

  return (
    <div className="px-5 pt-10">
      <section className="flex flex-col md:flex-row items-center md:items-end gap-5 justify-between">
        <div className="flex flex-col gap-5">
          <label>
            Search for:

            <input
              placeholder="Brand..."
              value={filters.brand}
              onChange={e => changeHandler("brand", e.target.value)}
              className="bg-white ml-2.5 text-black py-1 px-2 rounded-sm"
            />
          </label>

          <SelectFilter
            options={Category_Options}
            selected={filters.category}
            onChange={value => changeHandler("category", value)}
          />
        </div>

        <div className="flex flex-col items-center md:items-end gap-5">
          <Pagination
            page={filters.page}
            totalPages={pagination.totalPages}
            onPageChange={value => changeHandler("page", value)}
          />
          
          <LimitSelect
            value={filters.limit}
            onChange={value => {
              changeHandler("limit", value);
              changeHandler("page", 1);
            }}
          />
        </div>
      </section>

      <PriceRatingFilter
        minPrice={filters.minPrice}
        maxPrice={filters.maxPrice}
        minRating={filters.minRating}
        onChange={changeHandler}
      />

      <div className="text-center md:text-right mt-5">
        <button
          className="cursor-pointer hover:opacity-80 outline outline-solid py-2 px-5 rounded-lg"
          onClick={() => dispatch({ type: "RESET_FILTERS" })}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}

export default FiltersPanel;