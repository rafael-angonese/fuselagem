import React from "react";
import FormControl from "../../../components/Forms/FormControl/FormControl";
import FormLabel from "../../../components/Forms/FormLabel/FormLabel";
import Switch from "../../../components/Switch/Switch";

const SwitchExample: React.FC = () => {
  return (
    <>
      <h1 className="mt-8 mb-2">Switch</h1>
      <div className="space-x-2">
        <FormControl className="flex items-center">
          <FormLabel htmlFor="lala" className="mr-2">
            Clique aqui fion
          </FormLabel>

          <Switch id="lala" />
        </FormControl>
      </div>

      <h1 className="mt-8">Colors</h1>
      <div className="space-x-2">
        <Switch defaultChecked={true} color="default" />
        <Switch defaultChecked={true} color="primary" />
        <Switch defaultChecked={true} color="secondary" />
        <Switch defaultChecked={true} color="success" />
        <Switch defaultChecked={true} color="error" />
        <Switch defaultChecked={true} color="warning" />
      </div>

      <h1 className="mt-8">Sizes</h1>
      <div className="space-x-2">
        <Switch size="xs" />
        <Switch size="sm" />
        <Switch size="md" />
        <Switch size="lg" />
        <Switch size="xl" />
      </div>

      <h1 className="mt-8">Status</h1>
      <div className="space-x-2">
        <FormControl isDisabled className="flex items-center">
          <Switch  />
          <FormLabel className="ml-2">Disabled</FormLabel>
        </FormControl>
      </div>
    </>
  );
};

export default SwitchExample;
