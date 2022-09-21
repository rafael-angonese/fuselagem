import React from "react";
import ButtonsExample from "./ButtonsExample/ButtonsExample";
import ModalExample from "./ModalExample/ModalExample";
import ReactHookForm from "./ReackHookForm/ReactHookForm";

const HomePage: React.FC = () => {
  return (
    <>
      <ReactHookForm />

      <ButtonsExample />

      {/* <ModalExample /> */}
    </>
  );
};

export default HomePage;
