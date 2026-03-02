interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ 
  page, 
  totalPages, 
  onPageChange 
}: Props) {

  return totalPages > 0 ?
    (
      <article className="flex items-center gap-10 text-sm sm:text-base">
        <button 
          disabled={page === 1} 
          onClick={() => onPageChange(page - 1)}
          className={page !== 1 ? "cursor-pointer hover:opacity-80" : "opacity-50"}
        >
          {"<"} Prev 
        </button>

        <span>Page <b>{ page }</b> of <b>{ totalPages }</b></span>

        <button
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
          className={page !== totalPages ? "cursor-pointer hover:opacity-80" : "opacity-50"}
        >
          Next {">"} 
        </button>
      </article>
    ) :
      null;
}