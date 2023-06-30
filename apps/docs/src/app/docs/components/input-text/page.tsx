import InputTextContent from "@/app/docs/components/input-text/content/page";
import InputTextDefault from "@/app/docs/components/input-text/default";
import InputTextDisabled from "@/app/docs/components/input-text/disabled";
import InputTextFull from "@/app/docs/components/input-text/full";
import InputTextImport from "@/app/docs/components/input-text/import";
import InputTextInvalid from "@/app/docs/components/input-text/invalid";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import React from "react";

const TextPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <InputTextImport />

        <InputTextDefault />
        
        <InputTextFull />

        <InputTextDisabled />

        <InputTextInvalid />

        <InputTextContent />
      </PageComponentLayout>
    </>
  );
};

export default TextPage;
