import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Text } from "fuselagem";
import React from "react";

const code = `import { Text } from "fuselagem";

export default function App() {
  return (
    <>
      <Text fontWeight="thin" variant="h2">
        Manipulated from above, dancing on a string
      </Text>
      <Text fontWeight="extralight" variant="h2">
        Manipulated from above, dancing on a string
      </Text>
      <Text fontWeight="light" variant="h2">
        Manipulated from above, dancing on a string
      </Text>
      <Text fontWeight="normal" variant="h2">
        Manipulated from above, dancing on a string
      </Text>
      <Text fontWeight="medium" variant="h2">
        Manipulated from above, dancing on a string
      </Text>
      <Text fontWeight="semibold" variant="h2">
        Manipulated from above, dancing on a string
      </Text>
      <Text fontWeight="bold" variant="h2">
        Manipulated from above, dancing on a string
      </Text>
      <Text fontWeight="extrabold" variant="h2">
        Manipulated from above, dancing on a string
      </Text>
      <Text fontWeight="black" variant="h2">
        Manipulated from above, dancing on a string
      </Text>
    </>
  )
}
`;

const TextWeight: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Weight</Text>

      <div>
        <Text fontWeight="thin" variant="h2">
          Manipulated from above, dancing on a string
        </Text>
        <Text fontWeight="extralight" variant="h2">
          Manipulated from above, dancing on a string
        </Text>
        <Text fontWeight="light" variant="h2">
          Manipulated from above, dancing on a string
        </Text>
        <Text fontWeight="normal" variant="h2">
          Manipulated from above, dancing on a string
        </Text>
        <Text fontWeight="medium" variant="h2">
          Manipulated from above, dancing on a string
        </Text>
        <Text fontWeight="semibold" variant="h2">
          Manipulated from above, dancing on a string
        </Text>
        <Text fontWeight="bold" variant="h2">
          Manipulated from above, dancing on a string
        </Text>
        <Text fontWeight="extrabold" variant="h2">
          Manipulated from above, dancing on a string
        </Text>
        <Text fontWeight="black" variant="h2">
          Manipulated from above, dancing on a string
        </Text>
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default TextWeight;
