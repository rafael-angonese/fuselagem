import React, { useState } from "react";
import Pagination from "../../../components/Pagination/Pagination";

const PaginationExample: React.FC = () => {
  const [page, setPage] = useState(49);

  const totalPages = 100;

  return (
    <>
      <h1 className="mt-8 mb-2">Pagination</h1>
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={(page) => setPage(page)}
      />
    </>
  );
};

export default PaginationExample;
