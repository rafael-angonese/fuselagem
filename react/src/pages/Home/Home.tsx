import React from "react";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import ButtonsExample from "./ButtonsExample/ButtonsExample";
import ModalExample from "./ModalExample/ModalExample";
import RadioExample from "./RadioExample/RadioExample";
import ReactHookForm from "./ReackHookForm/ReactHookForm";
import SwitchExample from "./SwitchExample/SwitchExample";

const HomePage: React.FC = () => {
  return (
    <>
      <ReactHookForm />

      <RadioExample />

      <SwitchExample />

      <ButtonsExample />

      <ModalExample />
    </>
  );
};

export default HomePage;
