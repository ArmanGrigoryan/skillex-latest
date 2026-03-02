import type { IProduct } from "../utils/types";

const CardItem = ({ product }: { product: IProduct }) => {

  return (
    <article className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden w-full max-w-sm">
      
      <div className="overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
          {product.category}
        </span>

        <h2 className="text-2xl font-bold text-gray-800 mt-3">
          {product.name}
        </h2>

        <p className="text-sm text-gray-500">{product.brand}</p>

        <div className="flex items-center mt-2.5 md:mt-5">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < product.rating ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.959c.3.921-.755 1.688-1.54 1.118l-3.37-2.45a1 1 0 00-1.176 0l-3.37 2.45c-.784.57-1.838-.197-1.539-1.118l1.287-3.959a1 1 0 00-.364-1.118L2.075 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
            </svg>
          ))}
        </div>

        <div className="flex items-center justify-between mt-2.5 md:mt-5">
          <span className="text-xl md:text-2xl font-bold text-indigo-600">
            ${product.price}
          </span>

          <button className="bg-red-500 text-white text-sm md:text-base px-4 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardItem;