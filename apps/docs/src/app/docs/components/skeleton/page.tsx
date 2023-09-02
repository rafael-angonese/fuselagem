import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { Skeleton } from "@/registry/ui/Skeleton";
import { Text } from "@/registry/ui/text";

export default async function SkeletonPage() {
  return (
    <PageComponentLayout>
      <ComponentLayout>
        <Text variant="h1">Default</Text>

        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </ComponentLayout>
    </PageComponentLayout>
  );
}
