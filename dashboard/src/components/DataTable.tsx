import { useMemo } from "react";
import { priceFormatter } from "../utils/helpers";
import type { IProductsList } from "../utils/types";

export default function DataTable({ data }: { data: IProductsList }) {

    if (!data || data.length === 0) return null;

    const columns = useMemo(() => Object.keys(data[0]), [data]);

    return (
        <article className="rounded-2xl shadow-md overflow-auto">
            <table className="mx-auto w-full text-left overflow-x-auto border-separate border border-gray-400">
                <thead className="bg-red-500 text-white1 uppercase text-sm">
                    <tr className="[&>th]:capitalize [&>th]:px-6 [&>th]:py-3 [&>th]:border-solid [&>th]:gray-300">
                        {
                            columns.map(col => col !== "id" ? (
                                <th>{col}</th>
                            ) : null)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => (
                            <tr key={item.id} className="[&>td]:px-6 [&>td]:py-2">
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.brand}</td>
                                <td>{priceFormatter(item.price)}</td>
                                <td>{item.rating}</td>
                                <td>
                                    <a 
                                        href={item.imageUrl}
                                        className="hover:opacity-70"
                                        target="_blank"
                                    >
                                        {item.imageUrl}
                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </article>
    );
}