import TableDefault from "@/app/docs/components/table/default";
import TableImport from "@/app/docs/components/table/import";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";

export default async function TablePage() {
  return (
    <PageComponentLayout>
      <TableImport />

      <TableDefault />
    </PageComponentLayout>
  );
}
