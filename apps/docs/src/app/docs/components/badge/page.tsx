import BadgeColors from "@/app/docs/components/badge/colors";
import BadgeDefault from "@/app/docs/components/badge/default";
import BadgeImport from "@/app/docs/components/badge/import";
import BadgeOutlined from "@/app/docs/components/badge/outlined";
import BadgeShadow from "@/app/docs/components/badge/shadow";
import BadgeSizes from "@/app/docs/components/badge/sizes";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import React from "react";

const TextPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <BadgeImport />

        <BadgeDefault />

        <BadgeSizes />

        <BadgeColors />

        <BadgeOutlined />

        <BadgeShadow />
      </PageComponentLayout>
    </>
  );
};

export default TextPage;
