import SkeletonDefault from "@/app/docs/components/skeleton/default";
import SkeletonImport from "@/app/docs/components/skeleton/import";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";

export default async function SkeletonPage() {
  return (
    <PageComponentLayout>
      <SkeletonImport />

      <SkeletonDefault />
    </PageComponentLayout>
  );
}
