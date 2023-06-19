import ButtonColors from "@/app/docs/components/button/colors";
import ButtonDefault from "@/app/docs/components/button/default";
import ButtonDisabled from "@/app/docs/components/button/disabled";
import ButtonFull from "@/app/docs/components/button/full";
import ButtonImport from "@/app/docs/components/button/import";
import ButtonOutlined from "@/app/docs/components/button/outlined";
import ButtonRounded from "@/app/docs/components/button/rounded";
import ButtonShadow from "@/app/docs/components/button/shadow";
import ButtonSizes from "@/app/docs/components/button/sizes";

export default async function ButtonPage() {
  return (
    <div className="flex flex-col gap-12">
      <ButtonImport />

      <ButtonDefault />

      <ButtonDisabled />

      <ButtonFull />

      <ButtonSizes />

      <ButtonColors />

      <ButtonOutlined />

      <ButtonRounded />

      <ButtonShadow />
    </div>
  );
}
