import React from "react";
import ItemButton from "./ItemButton/ItemButton";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (value: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
}) => {
  const LEFT_PAGE = "LEFT";
  const RIGHT_PAGE = "RIGHT";
  const pageNeighbours = 2;

  const gotoPage = (value: number) => {
    const currentPage = Math.max(0, Math.min(value, totalPages));

    onPageChange(currentPage);
  };

  const range = (from: number, to: number, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      let pages = [];

      const leftBound = page - pageNeighbours;
      const rightBound = page + pageNeighbours;
      const beforeLastPage = totalPages - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      const pagesCount = pages.length;
      const singleSpillOffset = totalNumbers - pagesCount - 1;

      const leftSpill = startPage > 2;
      const rightSpill = endPage < beforeLastPage;

      const leftSpillPage = LEFT_PAGE;
      const rightSpillPage = RIGHT_PAGE;

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1);
        pages = [leftSpillPage, ...extraPages, ...pages];
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset);
        pages = [...pages, ...extraPages, rightSpillPage];
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage];
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  const handleMoveRight = () => {
    gotoPage(page + pageNeighbours * 2 + 1);
  };

  const handleMoveLeft = () => {
    gotoPage(page - pageNeighbours * 2 - 1);
  };

  const pages = fetchPageNumbers();

  return (
    <>
      <div className="flex">
        {pages.map((currentPage, index) => {
          if (currentPage === LEFT_PAGE)
            return (
              <ItemButton key={index} isActive={false} onClick={handleMoveLeft}>
                &laquo;
              </ItemButton>
            );

          if (currentPage === RIGHT_PAGE)
            return (
              <ItemButton
                key={index}
                isActive={false}
                onClick={handleMoveRight}
              >
                &raquo;
              </ItemButton>
            );

          return (
            <ItemButton
              isActive={page === currentPage ? true : false}
              onClick={(event) => gotoPage(+currentPage)}
              key={index}
            >
              {currentPage}
            </ItemButton>
          );
        })}
      </div>
    </>
  );
};

export default Pagination;
