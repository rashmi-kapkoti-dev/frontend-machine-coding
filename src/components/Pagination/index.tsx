import type { PaginationProps } from './types';
import style from './Pagination.module.css';

const Pagination = ({
  startIndex,
  data,
  userPerPage,
  setStartIndex,
}: PaginationProps) => {
  const totalPages =
    data.length === 0 ? 0 : Math.ceil(data.length / userPerPage);
  const pages = Array.from({ length: totalPages }, (_, index) => index);
  return (
    <div className={style.paginationContainer}>
      <button
        className={style.pageButton}
        disabled={startIndex === 0}
        onClick={() => setStartIndex((prev: number) => prev - 1)}
      >
        {'<'} Back
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`${style.pageButton} ${page === startIndex ? style.selectedPage : ''}`}
          onClick={() => setStartIndex(page)}
        >
          {page + 1}
        </button>
      ))}
      <button
        className={style.pageButton}
        disabled={startIndex === totalPages - 1 || totalPages === 0}
        onClick={() => setStartIndex((prev: number) => prev + 1)}
      >
        Next {'>'}
      </button>
    </div>
  );
};

export default Pagination;
