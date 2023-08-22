import React from "react";
import { VariantProps, tv } from "tailwind-variants";

const paginationVariants = tv({
  slots: {
    base: "flex flex-wrap gap-x-1",
    item: `data-[active="true"]:text-white data-[active="true"]:bg-blue-500 data-[active="true"]:border data-[active="true"]:border-gray-300 data-[active="true"]:hover:bg-blue-600 data-[active="true"]:dark:border-gray-600 data-[active="true"]:dark:bg-gray-700`,
    prev: "",
    next: "",
  },
  variants: {
    color: {
      primary: {
        container: "bg-blue-400 dark:bg-blue-600",
      },
      secondary: {
        container: "bg-purple-400 dark:bg-purple-600",
      },
      success: {
        container: "bg-green-400 dark:bg-green-600",
      },
      error: {
        container: "bg-red-400 dark:bg-red-600",
      },
      warning: {
        container: "bg-yellow-400 dark:bg-yellow-600",
      },
    },
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {},
      xl: {},
    },
    disabled: {
      true: {},
    },
  },
  compoundSlots: [
    {
      slots: ["item", "prev", "next"],
      class: `items-center text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200`,
    },
    {
      slots: ["item", "prev", "next"],
      size: "xs",
      class: "w-8 h-8 text-xs",
    },
    {
      slots: ["item", "prev", "next"],
      size: "sm",
      class: "w-9 h-9 text-xs",
    },
    {
      slots: ["item", "prev", "next"],
      size: "md",
      class: "w-10 h-10 text-md",
    },
    {
      slots: ["item", "prev", "next"],
      size: "lg",
      class: "w-11 h-11 text-lg",
    },
    {
      slots: ["item", "prev", "next"],
      size: "xl",
      class: "w-12 h-12 text-xl",
    },
  ],
  defaultVariants: {
    color: "primary",
    size: "md",
  },
});

type PaginationVariants = VariantProps<typeof paginationVariants>;

interface PaginationProps extends PaginationVariants {
  page: number;
  totalPages: number;
  onPageChange: (value: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  color,
  size,
  page,
  totalPages,
  onPageChange,
}) => {
  const { base, item, prev, next } = paginationVariants({
    color,
    size,
  });

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
      <div className={base()}>
        {pages.map((currentPage, index) => {
          if (currentPage === LEFT_PAGE)
            return (
              <button className={prev()} key={index} onClick={handleMoveLeft}>
                &laquo;
              </button>
            );

          if (currentPage === RIGHT_PAGE)
            return (
              <button key={index} className={next()} onClick={handleMoveRight}>
                &raquo;
              </button>
            );

          return (
            <button
              className={item()}
              data-active={page === currentPage ? true : false}
              onClick={(event) => gotoPage(+currentPage)}
              key={index}
            >
              {currentPage}
            </button>
          );
        })}
      </div>
    </>
  );
};

Pagination.displayName = "Pagination";

export { Pagination, paginationVariants };
