import ButtonColors from "@/app/docs/components/button/colors";
import ButtonDefault from "@/app/docs/components/button/default";
import ButtonDisabled from "@/app/docs/components/button/disabled";
import ButtonFull from "@/app/docs/components/button/full";
import ButtonImport from "@/app/docs/components/button/import";
import ButtonOutlined from "@/app/docs/components/button/outlined";
import ButtonRounded from "@/app/docs/components/button/rounded";
import ButtonShadow from "@/app/docs/components/button/shadow";
import ButtonSizes from "@/app/docs/components/button/sizes";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";

export default async function ButtonPage() {
  return (
    <PageComponentLayout>
      <ButtonImport />

      <ButtonDefault />

      <ButtonDisabled />

      <ButtonFull />

      <ButtonSizes />

      <ButtonColors />

      <ButtonOutlined />

      <ButtonRounded />

      <ButtonShadow />
    </PageComponentLayout>
  );
}
