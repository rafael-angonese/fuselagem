"use client";

import { EnvelopeSimple, Eye, EyeSlash } from "@phosphor-icons/react";
import { InputText } from "fuselagem";
import React, { useState } from "react";

const InputTextContentClient: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex gap-4">
      <InputText
        placeholder="Enter your text"
        type={isVisible ? "text" : "password"}
        rightContent={
          <>
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlash className="text-2xl pointer-events-none" />
              ) : (
                <Eye className="text-2xl pointer-events-none" />
              )}
            </button>
          </>
        }
      />

      <InputText
        placeholder="you@example.com"
        leftContent={
          <>
            <EnvelopeSimple className="text-2xl pointer-events-none" />
          </>
        }
      />

      <InputText
        placeholder="fuselagem"
        className="!pl-14"
        leftContent={<span className="text-sm">https://</span>}
        rightContent={<span className="text-sm">.com</span>}
      />
    </div>
  );
};

export default InputTextContentClient;
