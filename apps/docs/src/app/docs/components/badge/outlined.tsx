import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Badge, Text } from "fuselagem";
import React from "react";

const code = `import { Badge } from "fuselagem";

export default function App() {
  return (
    <div className="space-x-2">
      <Badge variant="outlined">Default</Badge>
      <Badge variant="outlined" color="primary">
        Primary
      </Badge>
      <Badge variant="outlined" color="secondary">
        Secondary
      </Badge>
      <Badge variant="outlined" color="success">
        Success
      </Badge>
      <Badge variant="outlined" color="error">
        Error
      </Badge>
      <Badge variant="outlined" color="warning">
        Warning
      </Badge>
    </div>
  )
}
`;

const BadgeOutlined: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Outlined</Text>

      <div className="space-x-2">
        <Badge variant="outlined">Default</Badge>
        <Badge variant="outlined" color="primary">
          Primary
        </Badge>
        <Badge variant="outlined" color="secondary">
          Secondary
        </Badge>
        <Badge variant="outlined" color="success">
          Success
        </Badge>
        <Badge variant="outlined" color="error">
          Error
        </Badge>
        <Badge variant="outlined" color="warning">
          Warning
        </Badge>
      </div>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default BadgeOutlined;
