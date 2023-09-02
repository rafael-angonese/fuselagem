import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { Avatar } from "@/registry/ui/Avatar";
import { Text } from "@/registry/ui/text";

export default async function AvatarPage() {
  return (
    <PageComponentLayout>
      <ComponentLayout>
        <Text variant="h1">Default</Text>

        <div className="flex items-center space-x-2">
          <Avatar.Root>
            <Avatar.Image
              src="https://github.com/rafael-angonese.png"
              alt="@fuselagem"
            />
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>
        </div>
      </ComponentLayout>

      <ComponentLayout>
        <Text variant="h1">Fallback</Text>

        <div className="flex items-center space-x-2">
          <Avatar.Root>
            <Avatar.Image
              src="https://github.com/rafael-angonese.png"
              alt="@fuselagem"
            />
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>

          <Avatar.Root>
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>
        </div>
      </ComponentLayout>

      <ComponentLayout>
        <Text variant="h1">Sizes</Text>

        <div className="flex items-center space-x-2">
          <Avatar.Root size="xs">
            <Avatar.Image
              src="https://github.com/rafael-angonese.png"
              alt="@fuselagem"
            />
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>

          <Avatar.Root size="sm">
            <Avatar.Image
              src="https://github.com/rafael-angonese.png"
              alt="@fuselagem"
            />
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>

          <Avatar.Root size="md">
            <Avatar.Image
              src="https://github.com/rafael-angonese.png"
              alt="@fuselagem"
            />
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>

          <Avatar.Root size="lg">
            <Avatar.Image
              src="https://github.com/rafael-angonese.png"
              alt="@fuselagem"
            />
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>

          <Avatar.Root size="xl">
            <Avatar.Image
              src="https://github.com/rafael-angonese.png"
              alt="@fuselagem"
            />
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>
        </div>
      </ComponentLayout>

      <ComponentLayout>
        <Text variant="h1">Rounded</Text>

        <div className="flex items-center space-x-2">
          <Avatar.Root rounded="full">
            <Avatar.Image
              src="https://github.com/rafael-angonese.png"
              alt="@fuselagem"
            />
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>

          <Avatar.Root rounded="3xl">
            <Avatar.Image
              src="https://github.com/rafael-angonese.png"
              alt="@fuselagem"
            />
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>

          <Avatar.Root rounded="2xl">
            <Avatar.Image
              src="https://github.com/rafael-angonese.png"
              alt="@fuselagem"
            />
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>

          <Avatar.Root rounded="lg">
            <Avatar.Image
              src="https://github.com/rafael-angonese.png"
              alt="@fuselagem"
            />
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>

          <Avatar.Root rounded="md">
            <Avatar.Image
              src="https://github.com/rafael-angonese.png"
              alt="@fuselagem"
            />
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>

          <Avatar.Root rounded="rounded">
            <Avatar.Image
              src="https://github.com/rafael-angonese.png"
              alt="@fuselagem"
            />
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>

          <Avatar.Root rounded="sm">
            <Avatar.Image
              src="https://github.com/rafael-angonese.png"
              alt="@fuselagem"
            />
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>

          <Avatar.Root rounded="none">
            <Avatar.Image
              src="https://github.com/rafael-angonese.png"
              alt="@fuselagem"
            />
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>
        </div>
      </ComponentLayout>

      <ComponentLayout>
        <Text variant="h1">Is Bordered</Text>

        <div className="flex items-center space-x-4">
          <Avatar.Root isBordered>
            <Avatar.Image
              src="https://github.com/rafael-angonese.png"
              alt="@fuselagem"
            />
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>

          <Avatar.Root isBordered color="secondary">
            <Avatar.Image
              src="https://github.com/rafael-angonese.png"
              alt="@fuselagem"
            />
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>

          <Avatar.Root isBordered color="success">
            <Avatar.Image
              src="https://github.com/rafael-angonese.png"
              alt="@fuselagem"
            />
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>

          <Avatar.Root isBordered color="warning">
            <Avatar.Image
              src="https://github.com/rafael-angonese.png"
              alt="@fuselagem"
            />
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>

          <Avatar.Root isBordered color="error">
            <Avatar.Image
              src="https://github.com/rafael-angonese.png"
              alt="@fuselagem"
            />
            <Avatar.Fallback>RA</Avatar.Fallback>
          </Avatar.Root>
        </div>
      </ComponentLayout>
    </PageComponentLayout>
  );
}
