"use client";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/ui/AlertDialog";
import { Button } from "@/registry/ui/Button";
import { Text } from "@/registry/ui/text";

export default async function TooltipPage() {
  return (
    <>
      <PageComponentLayout>
        <ComponentLayout>
          <Text variant="h1">Accordion</Text>

          <div className="">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outlined">Show Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </ComponentLayout>
      </PageComponentLayout>
    </>
  );
}
