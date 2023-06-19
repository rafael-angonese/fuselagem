import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Text } from "fuselagem";
import React from "react";

const code = `import { Text } from "fuselagem";

export default function App() {
  return (
    <>
      <Text color="primary" variant="h2">
        Manipulated from above, dancing on a string
      </Text>
      <Text color="secondary" variant="h2">
        Manipulated from above, dancing on a string
      </Text>
      <Text color="success" variant="h2">
        Manipulated from above, dancing on a string
      </Text>
      <Text color="warning" variant="h2">
        Manipulated from above, dancing on a string
      </Text>
      <Text color="error" variant="h2">
        Manipulated from above, dancing on a string
      </Text>
      <Text variant="h2" className="text-cyan-400">
        Manipulated from above, dancing on a string
      </Text>
    </>
  )
}
`;

const TextColors: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Colors</Text>

      <div>
        <Text color="primary" variant="h2">
          Manipulated from above, dancing on a string
        </Text>
        <Text color="secondary" variant="h2">
          Manipulated from above, dancing on a string
        </Text>
        <Text color="success" variant="h2">
          Manipulated from above, dancing on a string
        </Text>
        <Text color="warning" variant="h2">
          Manipulated from above, dancing on a string
        </Text>
        <Text color="error" variant="h2">
          Manipulated from above, dancing on a string
        </Text>
        <Text variant="h2" className="text-cyan-400">
          Manipulated from above, dancing on a string
        </Text>
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default TextColors;
