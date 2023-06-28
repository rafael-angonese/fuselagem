import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Badge, Text } from "fuselagem";
import React from "react";

const code = `import { Badge } from "fuselagem";

export default function App() {
  return (
    <>
      <div className="space-x-2">
        <Badge shadow>Default</Badge>
        <Badge shadow color="primary">
          Primary
        </Badge>
        <Badge shadow color="secondary">
          Secondary
        </Badge>
        <Badge shadow color="success">
          Success
        </Badge>
        <Badge shadow color="error">
          Error
        </Badge>
        <Badge shadow color="warning">
          Warning
        </Badge>
      </div>

      <div className="space-x-2">
        <Badge shadow variant="outlined">
          Default
        </Badge>
        <Badge shadow variant="outlined" color="primary">
          Primary
        </Badge>
        <Badge shadow variant="outlined" color="secondary">
          Secondary
        </Badge>
        <Badge shadow variant="outlined" color="success">
          Success
        </Badge>
        <Badge shadow variant="outlined" color="error">
          Error
        </Badge>
        <Badge shadow variant="outlined" color="warning">
          Warning
        </Badge>
      </div>
    </>
  )
}
`;

const BadgeShadow: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Shadow</Text>

      <div className="space-x-2">
        <Badge shadow>Default</Badge>
        <Badge shadow color="primary">
          Primary
        </Badge>
        <Badge shadow color="secondary">
          Secondary
        </Badge>
        <Badge shadow color="success">
          Success
        </Badge>
        <Badge shadow color="error">
          Error
        </Badge>
        <Badge shadow color="warning">
          Warning
        </Badge>
      </div>

      <div className="space-x-2">
        <Badge shadow variant="outlined">
          Default
        </Badge>
        <Badge shadow variant="outlined" color="primary">
          Primary
        </Badge>
        <Badge shadow variant="outlined" color="secondary">
          Secondary
        </Badge>
        <Badge shadow variant="outlined" color="success">
          Success
        </Badge>
        <Badge shadow variant="outlined" color="error">
          Error
        </Badge>
        <Badge shadow variant="outlined" color="warning">
          Warning
        </Badge>
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default BadgeShadow;
