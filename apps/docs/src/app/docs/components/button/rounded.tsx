import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Button, Text } from "fuselagem";
import React from "react";

const code = `import { Button } from "fuselagem";

export default function App() {
  return (
    <>
      <div className="space-x-2">
        <Button rounded color="primary">
          Primary
        </Button>
        <Button rounded color="secondary">
          Secondary
        </Button>
        <Button rounded color="success">
          Success
        </Button>
        <Button rounded color="warning">
          Warning
        </Button>
        <Button rounded color="error">
          Error
        </Button>
      </div>

      <div className="space-x-2">
        <Button outlined rounded color="primary">
          Primary
        </Button>
        <Button outlined rounded color="secondary">
          Secondary
        </Button>
        <Button outlined rounded color="success">
          Success
        </Button>
        <Button outlined rounded color="warning">
          Warning
        </Button>
        <Button outlined rounded color="error">
          Error
        </Button>
      </div>
    </>
  )
}
`;

const ButtonRounded: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Rounded</Text>

      <div className="space-y-2">
        <div className="space-x-2">
          <Button rounded color="primary">
            Primary
          </Button>
          <Button rounded color="secondary">
            Secondary
          </Button>
          <Button rounded color="success">
            Success
          </Button>
          <Button rounded color="warning">
            Warning
          </Button>
          <Button rounded color="error">
            Error
          </Button>
        </div>

        <div className="space-x-2">
          <Button outlined rounded color="primary">
            Primary
          </Button>
          <Button outlined rounded color="secondary">
            Secondary
          </Button>
          <Button outlined rounded color="success">
            Success
          </Button>
          <Button outlined rounded color="warning">
            Warning
          </Button>
          <Button outlined rounded color="error">
            Error
          </Button>
        </div>
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default ButtonRounded;
