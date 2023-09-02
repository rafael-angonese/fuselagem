import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { LinearProgress } from "@/registry/ui/LinearProgress";
import { Text } from "@/registry/ui/text";
import React from "react";

const LinearProgressPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <ComponentLayout>
          <Text variant="h1">Default</Text>

          <LinearProgress />
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Indeterminate</Text>

          <LinearProgress size="xs" indeterminate />
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Colors</Text>

          <div className="space-y-4">
            <LinearProgress percentage={50} color="primary" />
            <LinearProgress percentage={30} color="secondary" />
            <LinearProgress percentage={70} color="success" />
            <LinearProgress percentage={90} color="warning" />
            <LinearProgress percentage={10} color="error" />
          </div>
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Sizes</Text>

          <div className="space-y-4">
            <LinearProgress percentage={30} size="xs" />
            <LinearProgress percentage={32} size="sm" />
            <LinearProgress percentage={34} size="md" />
            <LinearProgress percentage={36} size="lg" />
            <LinearProgress percentage={38} size="xl" />
          </div>
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Percentage</Text>

          <div className="space-y-4">
            <LinearProgress size="xl" percentage={15}>
              15%
            </LinearProgress>
            <LinearProgress size="xl" percentage={35}>
              35%
            </LinearProgress>
            <LinearProgress size="xl" percentage={55}>
              55%
            </LinearProgress>
            <LinearProgress size="xl" percentage={75}>
              75%
            </LinearProgress>
          </div>
        </ComponentLayout>
      </PageComponentLayout>
    </>
  );
};

export default LinearProgressPage;
