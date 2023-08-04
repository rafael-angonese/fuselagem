import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Skeleton, Text } from "fuselagem";
import React from "react";

const code = `import { Skeleton } from "fuselagem";

export default function App() {
  return (
    <>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </>
  )
}
`;

const SkeletonDefault: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Default</Text>

      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default SkeletonDefault;
