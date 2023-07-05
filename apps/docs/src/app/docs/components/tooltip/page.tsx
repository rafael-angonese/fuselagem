import TooltipDefault from "@/app/docs/components/tooltip/default";
import TooltipImport from "@/app/docs/components/tooltip/import";
import TooltipPosition from "@/app/docs/components/tooltip/position";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import React from "react";

const TooltipPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <TooltipImport />

        <TooltipDefault />

        <TooltipPosition />
      </PageComponentLayout>
    </>
  );
};

export default TooltipPage;
