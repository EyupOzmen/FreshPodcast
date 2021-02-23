import _ from "lodash";
import PaginationStyles from "./Pagination.module.css";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <div className={PaginationStyles.pagination}>
      {pages.map((page) => (
        <div
          href={null}
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? PaginationStyles.active : null}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
