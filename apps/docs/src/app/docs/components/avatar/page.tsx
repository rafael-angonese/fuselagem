import AvatarBordered from "@/app/docs/components/avatar/bordered";
import AvatarDefault from "@/app/docs/components/avatar/default";
import AvatarImport from "@/app/docs/components/avatar/import";
import AvatarRounded from "@/app/docs/components/avatar/rounded";
import AvatarSizes from "@/app/docs/components/avatar/sizes";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";

export default async function AvatarPage() {
  return (
    <PageComponentLayout>
      <AvatarImport />

      <AvatarDefault />

      <AvatarSizes />

      <AvatarRounded />

      <AvatarBordered />
    </PageComponentLayout>
  );
}
