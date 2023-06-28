import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Button, Text } from "fuselagem";
import React from "react";

const code = `import { Button } from "fuselagem";

export default function App() {
  return (
    <div className="space-x-2">
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" color="success">
        Success
      </Button>
      <Button variant="outlined" color="warning">
        Warning
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </div>
  )
}
`;

const ButtonOutlined: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Outlined</Text>

      <div className="space-x-2">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default ButtonOutlined;
