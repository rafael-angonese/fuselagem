import React from "react";
import Divider from "../../components/Divider/Divider";
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

      <Divider className="my-8" />

      <CheckboxExample />
      <Divider className="my-8" />

      <RadioExample />
      <Divider className="my-8" />

      <SwitchExample />
      <Divider className="my-8" />

      <ButtonsExample />
      <Divider className="my-8" />

      <ModalExample />
      <Divider className="my-8" />
    </>
  );
};

export default HomePage;
