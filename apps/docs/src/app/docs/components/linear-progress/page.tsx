import LinearProgressColors from "@/app/docs/components/linear-progress/colors";
import LinearProgressDefault from "@/app/docs/components/linear-progress/default";
import LinearProgressImport from "@/app/docs/components/linear-progress/import";
import LinearProgressIndeterminate from "@/app/docs/components/linear-progress/indeterminate";
import LinearProgressPercentage from "@/app/docs/components/linear-progress/percentage";
import LinearProgressSizes from "@/app/docs/components/linear-progress/sizes";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import React from "react";

const LinearProgressPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <LinearProgressImport />

        <LinearProgressDefault />

        <LinearProgressIndeterminate />

        <LinearProgressColors />

        <LinearProgressSizes />

        <LinearProgressPercentage />
      </PageComponentLayout>
    </>
  );
};

export default LinearProgressPage;
