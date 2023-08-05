import GridDefault from "@/app/docs/components/grid/default";
import GridImport from "@/app/docs/components/grid/import";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";

export default async function GridPage() {
  return (
    <PageComponentLayout>
      <GridImport />

      <GridDefault />
    </PageComponentLayout>
  );
}
