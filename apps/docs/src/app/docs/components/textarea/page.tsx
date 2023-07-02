import TextAreaDefault from "@/app/docs/components/textarea/default";
import TextAreaDisabled from "@/app/docs/components/textarea/disabled";
import TextAreaFull from "@/app/docs/components/textarea/full";
import TextAreaImport from "@/app/docs/components/textarea/import";
import TextAreaInvalid from "@/app/docs/components/textarea/invalid";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import React from "react";

const TextPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <TextAreaImport />

        <TextAreaDefault />

        <TextAreaFull />

        <TextAreaDisabled />

        <TextAreaInvalid />
      </PageComponentLayout>
    </>
  );
};

export default TextPage;
