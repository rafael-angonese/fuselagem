import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface ModalProps extends React.ComponentProps<typeof DialogPrimitive.Root> {
  overlay?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  overlay,
  ...props
}) => {
  return (
    <DialogPrimitive.Root {...props}>
        {overlay && (
          <DialogPrimitive.Overlay className="fixed inset-0 bg-black/60" />
        )}
        {children}
    </DialogPrimitive.Root>
  );
};

export default Modal;
