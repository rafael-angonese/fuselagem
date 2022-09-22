import React from "react";
import ButtonsExample from "./ButtonsExample/ButtonsExample";
import ModalExample from "./ModalExample/ModalExample";
import ReactHookForm from "./ReackHookForm/ReactHookForm";
import SwitchExample from "./SwitchExample/SwitchExample";

const HomePage: React.FC = () => {
  return (
    <>
      <ReactHookForm />

      <SwitchExample />

      <ButtonsExample />

      <ModalExample />
    </>
  );
};

export default HomePage;
