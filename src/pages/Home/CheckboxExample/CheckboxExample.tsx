import React from "react";
import Checkbox from "../../../components/Checkbox/Checkbox";
import FormControl from "../../../components/Forms/FormControl/FormControl";

const CheckboxExample: React.FC = () => {
  return (
    <>
      <h1 className="mt-8 mb-2">Checkbox</h1>
      <div className="space-x-2">
        <FormControl>
          <Checkbox>Aceitas?</Checkbox>
        </FormControl>
      </div>

      <h1 className="mt-8">Colors</h1>
      <div className="space-x-4 flex items-center">
        <Checkbox defaultChecked color="default">
          Default
        </Checkbox>
        <Checkbox defaultChecked color="primary">
          Primary
        </Checkbox>
        <Checkbox defaultChecked color="secondary">
          Secondary
        </Checkbox>
        <Checkbox defaultChecked color="success">
          Success
        </Checkbox>
        <Checkbox defaultChecked color="error">
          Error
        </Checkbox>
        <Checkbox defaultChecked color="warning">
          Warning
        </Checkbox>
      </div>

      <h1 className="mt-8">Sizes</h1>
      <div className="space-x-4 flex items-center">
        <Checkbox defaultChecked size="xs">
          Extra small
        </Checkbox>
        <Checkbox defaultChecked size="sm">
          Small
        </Checkbox>
        <Checkbox defaultChecked size="md">
          Base
        </Checkbox>
        <Checkbox defaultChecked size="lg">
          Large
        </Checkbox>
        <Checkbox defaultChecked size="xl">
          Extra large
        </Checkbox>
      </div>

      <h1 className="mt-8">Status</h1>
      <div className="space-x-2">
        <FormControl isDisabled className="flex items-center">
          <Checkbox>Disabled</Checkbox>
        </FormControl>
      </div>
    </>
  );
};

export default CheckboxExample;
