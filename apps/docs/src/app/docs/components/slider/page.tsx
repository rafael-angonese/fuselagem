"use client";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { Button } from "@/registry/ui/Button";
import { Input } from "@/registry/ui/Input";
import { Label } from "@/registry/ui/Label";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/ui/Popover";
import { Slider } from "@/registry/ui/Slider";
import { Text } from "@/registry/ui/text";

export default async function TooltipPage() {
  return (
    <>
      <PageComponentLayout>
        <ComponentLayout>
          <Text variant="h1">Slider</Text>

          <div className="">
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
        </ComponentLayout>
      </PageComponentLayout>
    </>
  );
}
