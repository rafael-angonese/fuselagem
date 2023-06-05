import { Text } from "fuselagem";
import React from "react";

const TextPage: React.FC = () => {
  return (
    <>
      <div className="">
        <Text variant="h1">Textoooo</Text>
        <Text variant="h2">Textoooo</Text>
        <Text variant="h3">Textoooo</Text>
        <Text variant="h4">Textoooo</Text>
        <Text variant="h5">Textoooo</Text>
        <Text variant="h6">Textoooo</Text>
        <Text variant="p">Textoooo</Text>
        <Text variant="span">Textoooo</Text>
      </div>

      <div className="mt-8">
        <Text color="primary" variant="h2">
          Textoooo
        </Text>
        <Text color="secondary" variant="h2">
          Textoooo
        </Text>
        <Text color="success" variant="h2">
          Textoooo
        </Text>
        <Text color="warning" variant="h2">
          Textoooo
        </Text>
        <Text color="error" variant="h2">
          Textoooo
        </Text>

        <Text variant="h2" className="text-cyan-400">
          Textoooo
        </Text>
      </div>

      <div className="mt-8">
        <Text fontWeight="thin" variant="h2">
          Textoooo
        </Text>
        <Text fontWeight="extralight" variant="h2">
          Textoooo
        </Text>
        <Text fontWeight="light" variant="h2">
          Textoooo
        </Text>
        <Text fontWeight="normal" variant="h2">
          Textoooo
        </Text>
        <Text fontWeight="medium" variant="h2">
          Textoooo
        </Text>
        <Text fontWeight="semibold" variant="h2">
          Textoooo
        </Text>
        <Text fontWeight="bold" variant="h2">
          Textoooo
        </Text>
        <Text fontWeight="extrabold" variant="h2">
          Textoooo
        </Text>
        <Text fontWeight="black" variant="h2">
          Textoooo
        </Text>
      </div>
    </>
  );
};

export default TextPage;
