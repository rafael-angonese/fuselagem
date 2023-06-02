import React from "react";
import Badge from "../../../components/Badge/Badge";
import FormControl from "../../../components/Forms/FormControl/FormControl";

const BadgeExample: React.FC = () => {
  return (
    <>
      <h1 className="mt-8 mb-2">Badges</h1>
      <div className="space-x-2">
        <FormControl>
          <Badge>Aceitas?</Badge>
        </FormControl>
      </div>

      <h1 className="mt-8">Colors</h1>
      <div className="space-x-4 flex items-center">
        <Badge color="default">Default</Badge>
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="error">Error</Badge>
        <Badge color="warning">Warning</Badge>
      </div>

      <h1 className="mt-8">Sizes</h1>
      <div className="space-x-4 flex items-center">
        <Badge size="xs">Extra small</Badge>
        <Badge size="sm">Small</Badge>
        <Badge size="md">Base</Badge>
        <Badge size="lg">Large</Badge>
        <Badge size="xl">Extra large</Badge>
      </div>
    </>
  );
};

export default BadgeExample;
