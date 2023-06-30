import FormLabelDefault from "@/app/docs/components/form-label/default";
import FormLabelImport from "@/app/docs/components/form-label/import";
import FormLabelInvalid from "@/app/docs/components/form-label/invalid";
import FormLabelRequired from "@/app/docs/components/form-label/required";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import React from "react";

const FormLabelPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <FormLabelImport />

        <FormLabelDefault />

        <FormLabelRequired />

        <FormLabelInvalid />
      </PageComponentLayout>
    </>
  );
};

export default FormLabelPage;
