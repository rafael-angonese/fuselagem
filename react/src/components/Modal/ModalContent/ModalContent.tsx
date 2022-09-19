import React, { ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import clsx from "../../../utils/clsx";

interface ModalContentProps {
  children?: ReactNode;
  className?: string;
}

const ModalContent: React.FC<ModalContentProps> = ({
  className: classes,
  children,
}) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Content
        className={clsx(
          "w-4/6	fixed bg-white rounded-lg text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          classes
        )}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

export default ModalContent;
