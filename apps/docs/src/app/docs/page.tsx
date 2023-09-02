import { Avatar } from "@/registry/ui/Avatar";
import { Button } from "@/registry/ui/Button";
import React from "react";

const DocsPage: React.FC = () => {
  return (
    <>
      <div className="my-4" />
      <Button color="primary" variant="outlined">
        Teste
      </Button>

      <div className="flex gap-2">
        <Avatar.Root>
          <Avatar.Image
            src="https://github.com/rafael-angonese.png"
            alt="@fuselagem"
          />
          <Avatar.Fallback>RA</Avatar.Fallback>
        </Avatar.Root>

        <Avatar.Root>
          <Avatar.Fallback>RA</Avatar.Fallback>
        </Avatar.Root>

        <Avatar.Root isBordered>
          <Avatar.Fallback>RA</Avatar.Fallback>
        </Avatar.Root>

        <Avatar.Root isBordered>
          <Avatar.Image
            src="https://github.com/rafael-angonese.png"
            alt="@fuselagem"
          />
          <Avatar.Fallback>RA</Avatar.Fallback>
        </Avatar.Root>
      </div>
    </>
  );
};

export default DocsPage;
