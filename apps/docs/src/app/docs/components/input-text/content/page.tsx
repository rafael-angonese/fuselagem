import InputTextContentClient from "@/app/docs/components/input-text/content/content";
import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Text } from "fuselagem";
import React from "react";

const code = `import React, { useState } from "react";
import { InputText } from "fuselagem";
import { EnvelopeSimple, Eye, EyeSlash } from "@phosphor-icons/react";

export default function App() {
  const [isVisible, setIsVisible] = React.useState(false);

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
  )
}
`;

const InputTextContent: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Start & End Content</Text>

      <InputTextContentClient />

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default InputTextContent;
