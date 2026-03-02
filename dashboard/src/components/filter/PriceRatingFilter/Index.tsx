import type { ProductFilters } from "../../../utils/types";

interface Props {
    minPrice: number | null;
    maxPrice: number | null;
    minRating: number | null;
    onChange: <K extends keyof ProductFilters>(
        key: K,
        value: ProductFilters[K]
    ) => void;
}

export default function PriceRatingFilter({
    minPrice,
    maxPrice,
    minRating,
    onChange,
}: Props) {

    return (
        <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-5 text-sm sm:text-base">
            <label className="flex flex-col text-sm">
                Min Price

                <input
                    type="number"
                    value={minPrice || 0}
                    onChange={e => onChange("minPrice", Number(e.target.value || 0))}
                    className="bg-white text-black px-2 py-1 rounded border"
                />
            </label>

            <label className="flex flex-col text-sm">
                Max Price

                <input
                    type="number"
                    value={maxPrice || 0}
                    onChange={e => onChange("maxPrice", Number(e.target.value || 0))}
                    className="bg-white text-black px-2 py-1 rounded border"
                />
            </label>

            <label className="flex flex-col text-sm">
                Min Rating

                <select
                    value={minRating || 0}
                    onChange={e => onChange("minRating", Number(e.target.value || 0))}
                    className="bg-white text-black px-2 py-1 rounded border"
                >
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5</option>
                </select>
            </label>
        </div>
    );
}