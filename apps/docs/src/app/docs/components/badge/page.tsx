import BadgeColors from "@/app/docs/components/badge/colors";
import BadgeImport from "@/app/docs/components/badge/import";
import BadgeSizes from "@/app/docs/components/badge/sizes";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import React from "react";

const TextPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <BadgeImport />

        <BadgeColors />

        <BadgeSizes />
      </PageComponentLayout>
    </>
  );
};

export default TextPage;
