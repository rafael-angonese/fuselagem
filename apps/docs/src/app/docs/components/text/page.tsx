import TextColors from "@/app/docs/components/text/colors";
import TextImport from "@/app/docs/components/text/import";
import TextVariants from "@/app/docs/components/text/variants";
import TextWeight from "@/app/docs/components/text/weight";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import React from "react";

const TextPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <TextImport />

        <TextVariants />

        <TextColors />

        <TextWeight />
      </PageComponentLayout>
    </>
  );
};

export default TextPage;
