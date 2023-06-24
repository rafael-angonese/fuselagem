"use client";
import { Checks, Copy } from "@phosphor-icons/react";
import React, { useState } from "react";
interface CopyButtonProps {
  code: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ code }) => {
  const [hasCopiedToClipboard, setCopiedToClipboard] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopiedToClipboard(true);
    setTimeout(() => setCopiedToClipboard(false), 2000);
  };

  return (
    <>
      <button
        onClick={handleCopyToClipboard}
        className="absolute right-2 top-6  hover:opacity-80"
      >
        {hasCopiedToClipboard ? (
          <Checks className="text-green-400" size={22} />
        ) : (
          <Copy size={22} />
        )}
      </button>
    </>
  );
};

export default CopyButton;
