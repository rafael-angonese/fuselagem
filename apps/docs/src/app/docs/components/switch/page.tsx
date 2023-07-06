import SwitchColors from "@/app/docs/components/switch/colors";
import SwitchDefault from "@/app/docs/components/switch/default";
import SwitchImport from "@/app/docs/components/switch/import";
import SwitchSizes from "@/app/docs/components/switch/sizes";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import React from "react";

const CheckboxPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <SwitchImport />

        <SwitchDefault />

        <SwitchColors />

        <SwitchSizes />
      </PageComponentLayout>
    </>
  );
};

export default CheckboxPage;
