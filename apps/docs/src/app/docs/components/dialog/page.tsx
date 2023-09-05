"use client";

import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { Button } from "@/registry/ui/Button";
import { Dialog } from "@/registry/ui/Dialog";
import { Input } from "@/registry/ui/Input";
import { Label } from "@/registry/ui/Label";
import { Text } from "@/registry/ui/text";

export default async function DialogPage() {
  return (
    <PageComponentLayout>
      <ComponentLayout>
        <Text variant="h1">Default</Text>

        <div>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button variant="outlined">Edit Profile</Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay />
              <Dialog.Content className="sm:max-w-[425px]">
                <Dialog.Close />
                <Dialog.Header>
                  <Dialog.Title>Edit profile</Dialog.Title>
                  <Dialog.Description>
                    Make changes to your profile here. Click save when youre
                    done.
                  </Dialog.Description>
                </Dialog.Header>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      value="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <Dialog.Footer>
                  <Button type="submit">Save changes</Button>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </ComponentLayout>
    </PageComponentLayout>
  );
}
