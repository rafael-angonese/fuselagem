import React, { ReactNode } from "react";

interface ModalBodyProps {
  children?: ReactNode;
}

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
  return <div className="p-6 space-y-6">{children}</div>;
};

export default ModalBody;
