import React from "react";
import Button from "../../../components/Button/Button";

const ButtonsExample: React.FC = () => {
  return (
    <>
      <h1 className="mt-8">Colors</h1>
      <div className="space-x-2">
        <Button color="default">Enviar</Button>
        <Button color="primary">Enviar</Button>
        <Button color="secondary">Enviar</Button>
        <Button color="success">Enviar</Button>
        <Button color="error">Enviar</Button>
        <Button color="warning">Enviar</Button>
      </div>

      <h1 className="mt-8">Gridient Duo Tone</h1>
      <div className="space-x-2">
        <Button gradientDuoTone="purpleToBlue">Enviar</Button>
        <Button gradientDuoTone="cyanToBlue">Enviar</Button>
        <Button gradientDuoTone="greenToBlue">Enviar</Button>
        <Button gradientDuoTone="purpleToPink">Enviar</Button>
        <Button gradientDuoTone="tealToLime">Enviar</Button>
        <Button gradientDuoTone="redToYellow">Enviar</Button>
      </div>

      <h1 className="mt-8">Status</h1>
      <div className="space-x-2">
        <Button isDisabled color="default">
          Disabled
        </Button>
        <Button isLoading isDisabled color="default">
          Loading
        </Button>
      </div>

      <h1 className="mt-8">Sizes</h1>
      <div className="space-x-2">
        <Button size="xs">Extra small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Base/Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra large</Button>
      </div>
    </>
  );
};

export default ButtonsExample;
