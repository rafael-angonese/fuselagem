import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { Radio } from "@/registry/ui/Radio";
import { Text } from "@/registry/ui/text";
import React from "react";

const RadioPage: React.FC = () => {
  return (
    <>
      <PageComponentLayout>
        <ComponentLayout>
          <Text variant="h1">Default</Text>

          <div>
            <Radio.Group defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <Radio.Item value="default" id="r1" />
                <label htmlFor="r1">Default</label>
              </div>
              <div className="flex items-center space-x-2">
                <Radio.Item value="comfortable" id="r2" />
                <label htmlFor="r2">Comfortable</label>
              </div>
              <div className="flex items-center space-x-2">
                <Radio.Item value="compact" id="r3" />
                <label htmlFor="r3">Compact</label>
              </div>
            </Radio.Group>
          </div>
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Orientation</Text>

          <div>
            <label className="my-2">Horizontal</label>
            <Radio.Group defaultValue="success" orientation="horizontal">
              <Radio.Item value="primary" color="primary" />
              <Radio.Item value="secondary" color="secondary" />
              <Radio.Item value="success" color="success" />
              <Radio.Item value="warning" color="warning" />
              <Radio.Item value="error" color="error" />
            </Radio.Group>
          </div>

          <div>
            <label className="my-2">Vertical</label>
            <Radio.Group defaultValue="success" orientation="vertical">
              <Radio.Item value="primary" color="primary" />
              <Radio.Item value="secondary" color="secondary" />
              <Radio.Item value="success" color="success" />
              <Radio.Item value="warning" color="warning" />
              <Radio.Item value="error" color="error" />
            </Radio.Group>
          </div>
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Colors</Text>

          <div>
            <Radio.Group defaultValue="success">
              <Radio.Item value="primary" color="primary" />
              <Radio.Item value="secondary" color="secondary" />
              <Radio.Item value="success" color="success" />
              <Radio.Item value="warning" color="warning" />
              <Radio.Item value="error" color="error" />
            </Radio.Group>
          </div>
        </ComponentLayout>

        <ComponentLayout>
          <Text variant="h1">Sizes</Text>

          <div>
            <Radio.Group defaultValue="xs" className="items-center">
              <Radio.Item value="xs" size="xs" />
              <Radio.Item value="sm" size="sm" />
              <Radio.Item value="md" size="md" />
              <Radio.Item value="lg" size="lg" />
              <Radio.Item value="xl" size="xl" />
            </Radio.Group>
          </div>
        </ComponentLayout>
      </PageComponentLayout>
    </>
  );
};

export default RadioPage;
