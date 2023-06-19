import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Button, Text } from "fuselagem";
import React from "react";

const code = `import { Button } from "fuselagem";

export default function App() {
  return (
    <>
      <div className="space-x-2">
        <Button shadow rounded color="primary">
          Primary
        </Button>
        <Button shadow rounded color="secondary">
          Secondary
        </Button>
        <Button shadow rounded color="success">
          Success
        </Button>
        <Button shadow rounded color="warning">
          Warning
        </Button>
        <Button shadow rounded color="error">
          Error
        </Button>
      </div>

      <div className="space-x-2">
        <Button shadow outlined rounded color="primary">
          Primary
        </Button>
        <Button shadow outlined rounded color="secondary">
          Secondary
        </Button>
        <Button shadow outlined rounded color="success">
          Success
        </Button>
        <Button shadow outlined rounded color="warning">
          Warning
        </Button>
        <Button shadow outlined rounded color="error">
          Error
        </Button>
      </div>
    </>
  )
}
`;

const ButtonShadow: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Shadow</Text>

      <div className="space-y-2">
        <div className="space-x-2">
          <Button shadow rounded color="primary">
            Primary
          </Button>
          <Button shadow rounded color="secondary">
            Secondary
          </Button>
          <Button shadow rounded color="success">
            Success
          </Button>
          <Button shadow rounded color="warning">
            Warning
          </Button>
          <Button shadow rounded color="error">
            Error
          </Button>
        </div>

        <div className="space-x-2">
          <Button shadow outlined rounded color="primary">
            Primary
          </Button>
          <Button shadow outlined rounded color="secondary">
            Secondary
          </Button>
          <Button shadow outlined rounded color="success">
            Success
          </Button>
          <Button shadow outlined rounded color="warning">
            Warning
          </Button>
          <Button shadow outlined rounded color="error">
            Error
          </Button>
        </div>
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default ButtonShadow;
