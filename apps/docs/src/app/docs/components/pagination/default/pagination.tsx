"use client";

import React, { useState } from "react";

import { Pagination } from "fuselagem";

const PaginationDefaultClient: React.FC = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <Pagination
        page={page}
        totalPages={100}
        onPageChange={(value) => setPage(value)}
      />
    </>
  );
};

export default PaginationDefaultClient;
