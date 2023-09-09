"use client";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { AvatarFallback } from "@/registry/ui/Avatar/AvatarFallback";
import { AvatarImage } from "@/registry/ui/Avatar/AvatarImage";
import { AvatarRoot } from "@/registry/ui/Avatar/AvatarRoot";
import { Button } from "@/registry/ui/Button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/ui/HoverCard";
import { Text } from "@/registry/ui/text";
import { CalendarDays } from "lucide-react";

export default async function TooltipPage() {
  return (
    <>
      <PageComponentLayout>
        <ComponentLayout>
          <Text variant="h1">Hover Card</Text>

          <div className="">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="ghost">@nextjs</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <AvatarRoot>
                    <AvatarImage src="https://github.com/vercel.png" />
                    <AvatarFallback>VC</AvatarFallback>
                  </AvatarRoot>

                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@nextjs</h4>
                    <p className="text-sm">
                      The React Framework – created and maintained by @vercel.
                    </p>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        Joined December 2021
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </ComponentLayout>
      </PageComponentLayout>
    </>
  );
}
