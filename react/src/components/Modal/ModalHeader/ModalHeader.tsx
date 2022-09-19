import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import CloseIcon from "../../Icons/CloseIcon";

interface ModalHeaderProps {
  children?: React.ReactNode;
  closeButton?: boolean;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  closeButton = true,
}) => {
  return (
    <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
      <DialogPrimitive.Title className="" asChild>
        {children}
      </DialogPrimitive.Title>

      {closeButton && (
        <DialogPrimitive.Close asChild>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <CloseIcon />
            <span className="sr-only">Close modal</span>
          </button>
        </DialogPrimitive.Close>
      )}
    </div>
  );
};

export default ModalHeader;
