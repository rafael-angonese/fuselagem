"use client";

import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { Pagination } from "@/registry/ui/Pagination";
import { Text } from "@/registry/ui/text";
import React, { useState } from "react";

const TextPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [pageXs, setPageXs] = useState(1);
  const [pageMd, setPageMd] = useState(1);
  const [pageXl, setPageXl] = useState(1);

  return (
    <>
      <PageComponentLayout>
        <ComponentLayout>
          <Text variant="h1">Default</Text>

          <Pagination
            page={page}
            totalPages={100}
            onPageChange={(value) => setPage(value)}
          />
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Sizes</Text>

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
        </ComponentLayout>
      </PageComponentLayout>
    </>
  );
};

export default TextPage;
