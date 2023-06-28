import React from "react";

import PaginationSizesContent from "@/app/docs/components/pagination/sizes/content";
import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Text } from "fuselagem";

const code = `import { Pagination } from "fuselagem";
import { useState } from "react";

export default function App() {
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
  )
}
`;

const PaginationSizes: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Sizes</Text>

      <PaginationSizesContent />

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default PaginationSizes;
