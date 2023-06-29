import InputTextContent from "@/app/docs/components/input-text/content/page";
import InputTextDefault from "@/app/docs/components/input-text/default";
import InputTextDisabled from "@/app/docs/components/input-text/disabled";
import InputTextImport from "@/app/docs/components/input-text/import";
import InputTextInvalid from "@/app/docs/components/input-text/invalid";
import InputTextVariants from "@/app/docs/components/input-text/variants";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import React from "react";

const TextPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <InputTextImport />

        <InputTextDefault />

        <InputTextVariants />

        <InputTextDisabled />

        <InputTextInvalid />

        <InputTextContent />
      </PageComponentLayout>
    </>
  );
};

export default TextPage;
