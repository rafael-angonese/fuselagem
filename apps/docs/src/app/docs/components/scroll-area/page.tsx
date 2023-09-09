"use client";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { Text } from "@/registry/ui/text";

import { Divider } from "@/registry/ui/Divider";
import { ScrollArea } from "@/registry/ui/ScrollArea";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export default async function TooltipPage() {
  return (
    <>
      <PageComponentLayout>
        <ComponentLayout>
          <Text variant="h1">Scroll Area</Text>

          <div className="">
            <ScrollArea className="h-72 w-48 rounded-md border">
              <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                {tags.map((tag) => (
                  <>
                    <div key={tag} className="text-sm">
                      {tag}
                    </div>
                    <Divider className="my-2" />
                  </>
                ))}
              </div>
            </ScrollArea>
          </div>
        </ComponentLayout>
      </PageComponentLayout>
    </>
  );
}
