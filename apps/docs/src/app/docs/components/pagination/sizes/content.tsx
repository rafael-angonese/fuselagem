"use client";

import React, { useState } from "react";

import { Pagination } from "fuselagem";

const PaginationSizesContent: React.FC = () => {
  const [pageXs, setPageXs] = useState(1);
  const [pageMd, setPageMd] = useState(1);
  const [pageXl, setPageXl] = useState(1);

  return (
    <div className="space-y-2">
      <Pagination
        page={pageXs}
        size="xs"
        totalPages={100}
        onPageChange={(value) => setPageXs(value)}
      />

      <Pagination
        page={pageMd}
        size="md"
        totalPages={100}
        onPageChange={(value) => setPageMd(value)}
      />

      <Pagination
        page={pageXl}
        size="xl"
        totalPages={100}
        onPageChange={(value) => setPageXl(value)}
      />
    </div>
  );
};

export default PaginationSizesContent;
