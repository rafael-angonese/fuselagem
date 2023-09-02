import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { Grid } from "@/registry/ui/Grid";
import { Text } from "@/registry/ui/text";

export default async function GridPage() {
  return (
    <PageComponentLayout>
      <ComponentLayout>
        <Text variant="h1">Default</Text>

        <Grid.Row>
          <Grid.Item xs={12} sm={12} md={6} lg={4} xl={3}>
            <div className="h-12 w-full bg-slate-600 rounded-lg animate-pulse" />
          </Grid.Item>

          <Grid.Item xs={12} sm={12} md={6} lg={4} xl={3}>
            <div className="h-12 w-full bg-slate-600 rounded-lg animate-pulse" />
          </Grid.Item>

          <Grid.Item xs={12} sm={12} md={6} lg={4} xl={3}>
            <div className="h-12 w-full bg-slate-600 rounded-lg animate-pulse" />
          </Grid.Item>

          <Grid.Item xs={12} sm={12} md={6} lg={4} xl={3}>
            <div className="h-12 w-full bg-slate-600 rounded-lg animate-pulse" />
          </Grid.Item>
        </Grid.Row>
      </ComponentLayout>
    </PageComponentLayout>
  );
}
