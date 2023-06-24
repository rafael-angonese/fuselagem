import React from "react";

import PaginationDefaultClient from "@/app/docs/components/pagination/default/pagination";
import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Text } from "fuselagem";

const code = `import { Pagination } from "fuselagem";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState(1);

  return (
    <>
      <Pagination
        page={page}
        totalPages={100}
        onPageChange={(value) => setPage(value)}
      />
    </>
  )
}
`;

const PaginationDefault: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Default</Text>

      <PaginationDefaultClient />

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default PaginationDefault;
