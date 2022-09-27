import React from "react";
import ButtonsExample from "./ButtonsExample/ButtonsExample";
import CheckboxExample from "./CheckboxExample/CheckboxExample";
import ModalExample from "./ModalExample/ModalExample";
import RadioExample from "./RadioExample/RadioExample";
import ReactHookForm from "./ReackHookForm/ReactHookForm";
import SwitchExample from "./SwitchExample/SwitchExample";

const HomePage: React.FC = () => {
  return (
    <>
      <ReactHookForm />

      <CheckboxExample />

      <RadioExample />

      <SwitchExample />

      <ButtonsExample />

      <ModalExample />
    </>
  );
};

export default HomePage;
