import type { TDataView } from "../utils/types";

interface IProps {
    view: TDataView,
    changeHandler: (p: TDataView) => void;
}

export default function ViewButtons({ 
    view,
    changeHandler,
 }: IProps) {

    return (
        <div className="flex flex-col mb-5 mt-10 px-2.5 md:px-5">
            <hr />
            
            <div className="w-fit flex bg-white rounded-xl text-sm shadow-md overflow-hidden mt-5">
                <button
                    onClick={() => changeHandler("card")}
                    className={`flex items-center gap-1 px-2.5 py-2 transition cursor-pointer
                        ${ view === "card" ? "bg-red-500 text-white" : "text-gray-600 hover:bg-gray-300" }
                    `}
                >
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M3 3h6v6H3V3zm8 0h6v6h-6V3zM3 11h6v6H3v-6zm8 0h6v6h-6v-6z" />
                    </svg>

                    Card
                </button>

                <button
                    onClick={() => changeHandler("table")}
                    className={`flex items-center gap-1 px-2.5 py-2 transition cursor-pointer
                        ${ view === "table" ? "bg-red-500 text-white" : "text-gray-600 hover:bg-gray-300" }
                    `}
                >
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M4 4h12v2H4V4zm0 5h12v2H4V9zm0 5h12v2H4v-2z" />
                    </svg>

                    Table
                </button>
            </div>
        </div>
    );
}