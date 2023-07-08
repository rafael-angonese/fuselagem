import DividerColors from "@/app/docs/components/divider/colors";
import DividerDefault from "@/app/docs/components/divider/default";
import DividerImport from "@/app/docs/components/divider/import";
import DividerOrientation from "@/app/docs/components/divider/orintation";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import React from "react";

const TooltipPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <DividerImport />

        <DividerDefault />

        <DividerOrientation />

        <DividerColors />
      </PageComponentLayout>
    </>
  );
};

export default TooltipPage;
