import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Text } from "fuselagem";
import React from "react";

const code = `import { Text } from "fuselagem";

export default function App() {
  return (
    <>
      <Text variant="span">Manipulated from above, dancing on a string</Text>
      <Text variant="p">Manipulated from above, dancing on a string</Text>
      <Text variant="h6">Manipulated from above, dancing on a string</Text>
      <Text variant="h5">Manipulated from above, dancing on a string</Text>
      <Text variant="h4">Manipulated from above, dancing on a string</Text>
      <Text variant="h3">Manipulated from above, dancing on a string</Text>
      <Text variant="h2">Manipulated from above, dancing on a string</Text>
      <Text variant="h1">Manipulated from above, dancing on a string</Text>
    </>
  )
}
`;

const TextVariants: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Variants</Text>

      <div>
        <Text variant="span">Manipulated from above, dancing on a string</Text>
        <Text variant="p">Manipulated from above, dancing on a string</Text>
        <Text variant="h6">Manipulated from above, dancing on a string</Text>
        <Text variant="h5">Manipulated from above, dancing on a string</Text>
        <Text variant="h4">Manipulated from above, dancing on a string</Text>
        <Text variant="h3">Manipulated from above, dancing on a string</Text>
        <Text variant="h2">Manipulated from above, dancing on a string</Text>
        <Text variant="h1">Manipulated from above, dancing on a string</Text>
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default TextVariants;
