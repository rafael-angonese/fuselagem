import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { Badge } from "@/registry/ui/Badge";
import { Text } from "@/registry/ui/text";
import React from "react";

const TextPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <ComponentLayout>
          <Text variant="h1">Default</Text>

          <Badge>Default</Badge>
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Sizes</Text>

          <div className="space-x-2">
            <Badge size="xs">Extra Small</Badge>
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
            <Badge size="lg">Large</Badge>
            <Badge size="xl">Extra Large</Badge>
          </div>
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Colors</Text>

          <div className="space-x-2">
            <Badge>Default</Badge>
            <Badge color="primary">Primary</Badge>
            <Badge color="secondary">Secondary</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="error">Error</Badge>
            <Badge color="warning">Warning</Badge>
          </div>
        </ComponentLayout>

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
        </ComponentLayout>

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
        </ComponentLayout>
      </PageComponentLayout>
    </>
  );
};

export default TextPage;
