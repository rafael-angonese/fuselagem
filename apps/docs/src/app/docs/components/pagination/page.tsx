import PaginationDefault from "@/app/docs/components/pagination/default/default";
import PaginationImport from "@/app/docs/components/pagination/import";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import React from "react";

const TextPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <PaginationImport />

        <PaginationDefault />
      </PageComponentLayout>
    </>
  );
};

export default TextPage;
