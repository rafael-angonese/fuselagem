import CheckboxColors from "@/app/docs/components/checkbox/colors";
import CheckboxDefault from "@/app/docs/components/checkbox/default";
import CheckboxImport from "@/app/docs/components/checkbox/import";
import CheckboxRounded from "@/app/docs/components/checkbox/rounded";
import CheckboxSizes from "@/app/docs/components/checkbox/sizes";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import React from "react";

const CheckboxPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <CheckboxImport />

        <CheckboxDefault />

        <CheckboxColors />

        <CheckboxSizes />

        <CheckboxRounded />
      </PageComponentLayout>
    </>
  );
};

export default CheckboxPage;
