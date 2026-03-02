import { useEffect, useLayoutEffect } from "react";
import { useSearchParams } from "react-router-dom";
import type { ProductFilters, TActionDispatcherFn } from "../types";

const useCustomParams = (
    filters: ProductFilters,
    dispatchFn: TActionDispatcherFn ,
) => {
    const [searchParams, setSearchParams] = useSearchParams();

    useLayoutEffect(() => {
        const params = new URLSearchParams();

        Object.entries(filters).forEach(([key, value]) => {
            params.set(key, '' + value);
        });

        setSearchParams(params);
    }, [filters]);
    
    useEffect(() => {
        const page = searchParams.get("page");

        if (page) {
            dispatchFn({
                type: "SET_FILTER",
                payload: { key: "page", value: Number(page) },
            });
        }
    }, []);

    return {
        searchParams
    };
}

export default useCustomParams;