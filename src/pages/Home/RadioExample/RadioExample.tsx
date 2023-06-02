import React from "react";
import FormControl from "../../../components/Forms/FormControl/FormControl";
import FormLabel from "../../../components/Forms/FormLabel/FormLabel";
import Radio from "../../../components/Radio/Radio";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";

const RadioExample: React.FC = () => {
  return (
    <>
      <h1 className="mt-8 mb-2">Radio</h1>


      <FormControl>
        <FormLabel>Choose your starter</FormLabel>

        <RadioGroup className="space-y-2">
          <Radio value="bulbasaur">Bulbasaur</Radio>
          <Radio value="charmader">Charmader</Radio>
          <Radio value="squirtle">Squirtle</Radio>
        </RadioGroup>
      </FormControl>

      <FormControl className="mt-4">
        <FormLabel>Colors</FormLabel>

        <RadioGroup className="space-x-2 flex items-center">
          <Radio color="default" value="default">Default</Radio>
          <Radio color="primary" value="primary">Primary</Radio>
          <Radio color="secondary" value="secondary">Secondary</Radio>
          <Radio color="success" value="success">Success</Radio>
          <Radio color="error" value="error">Error</Radio>
          <Radio color="warning" value="warning">Warning</Radio>
        </RadioGroup>
      </FormControl>

      <FormControl className="mt-4">
        <FormLabel>Sizes</FormLabel>

        <RadioGroup className="space-x-2 flex items-center">
          <Radio size="xs" value="xs">Extra small</Radio>
          <Radio size="sm" value="sm">Small</Radio>
          <Radio size="md" value="md">Base/Medium</Radio>
          <Radio size="lg" value="lg">Large</Radio>
          <Radio size="xl" value="xl">Extra large</Radio>
        </RadioGroup>
      </FormControl>

      <FormControl className="mt-4">
        <FormLabel>Status</FormLabel>

        <RadioGroup className="space-x-2 flex items-center">
          <Radio disabled value="xs">Disabled</Radio>
         
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default RadioExample;
