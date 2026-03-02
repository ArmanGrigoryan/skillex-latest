import { useReducer, useState } from "react";
import BaseLoader from "../components/shared/BaseLoader";
import FiltersPanel from "../components/filter/Panel";
import ViewButtons from "../components/ViewButtons";
import DataTable from "../components/DataTable";
import List from "../components/List";
import { type TDataView } from "../utils/types";
import { Debounce_Timeout } from "../utils/constants";
import { filterReducer, initialFilters } from "../reducers";
import { useDebounce, useProducts, useCustomParams } from "../utils/hooks";

export default function ProductsPage() {
    const [filters, dispatch] = useReducer(filterReducer, initialFilters);
    const [view, setView] = useState<TDataView>("card");
    useCustomParams(filters, dispatch);

    const debouncedSearch = useDebounce({
        defValue: filters.brand,
        delay: Debounce_Timeout
    });

    const { data, isLoading } = useProducts({
        ...filters,
        brand: debouncedSearch,
    });

    return (
        <section className="text-center">
            <h1 className="text-4xl text-red-500 font-bold mt-5 px-5">
                Welcome to Products page!
            </h1>

            {
                isLoading || !data ?
                <BaseLoader /> :
                    <>
                        <FiltersPanel 
                            data={data.data}
                            pagination={data.pagination}
                            filters={filters}
                            dispatch={dispatch}
                        />

                        {
                            data.data.length !== 0 ?
                            <ViewButtons 
                                view={view}
                                changeHandler={setView}
                            /> :
                                null
                        }

                        {
                            view === "card" ? 
                            <List data={data.data} /> :
                                <DataTable data={data.data} />
                        }

                        {
                            data.data.length === 0 ?
                            (
                                <div className="rounded-2xl">
                                    <hr className="mt-5 pb-5" />

                                    <h4 className="text-3xl text-red-500 font-bold mt-5">
                                        Sorry, try with different parameters.
                                    </h4>
                                </div> 
                            ) :
                                null
                        }
                    </>
            }
        </section>
    );
}