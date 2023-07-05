import RadioColors from "@/app/docs/components/radio/colors";
import RadioDefault from "@/app/docs/components/radio/default";
import RadioImport from "@/app/docs/components/radio/import";
import RadioRounded from "@/app/docs/components/radio/rounded";
import RadioSizes from "@/app/docs/components/radio/sizes";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import React from "react";

const RadioPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <RadioImport />

        <RadioDefault />

        <RadioColors />

        <RadioSizes />

        <RadioRounded />
      </PageComponentLayout>
    </>
  );
};

export default RadioPage;
