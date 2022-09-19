import React, { useState } from "react";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import ModalActions from "../../Modal/ModalActions/ModalActions";
import ModalBody from "../../Modal/ModalBody/ModalBody";
import ModalContent from "../../Modal/ModalContent/ModalContent";
import ModalHeader from "../../Modal/ModalHeader/ModalHeader";
import ModalTrigger from "../../Modal/ModalTrigger/ModalTrigger";

const ModalExample: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal overlay open={open} onOpenChange={(value) => setOpen(value)}>
        <ModalTrigger asChild>
          <Button color="primary">Abrir o bixo aqui</Button>
        </ModalTrigger>

        <ModalContent>
          <ModalHeader>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Terms of Service
            </h3>
          </ModalHeader>
          <ModalBody>asdjfoas fjsdaofsdajfosadkj fsoadkfsdaf</ModalBody>
          <ModalActions align="end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              onClick={() => setOpen(false)}
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Decline
            </button>
          </ModalActions>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalExample;
