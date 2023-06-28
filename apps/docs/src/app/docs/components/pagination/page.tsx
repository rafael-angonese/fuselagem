import PaginationDefault from "@/app/docs/components/pagination/default/default";
import PaginationImport from "@/app/docs/components/pagination/import";
import PaginationSizes from "@/app/docs/components/pagination/sizes/sizes";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import React from "react";

const TextPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <PaginationImport />

        <PaginationDefault />

        <PaginationSizes />
      </PageComponentLayout>
    </>
  );
};

export default TextPage;
