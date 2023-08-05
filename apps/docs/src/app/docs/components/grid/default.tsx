import CodePreview from "@/components/CodePreview/CodePreview";
import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import { Grid, GridItem, Text } from "fuselagem";
import React from "react";

const code = `import { Grid, GridItem } from "fuselagem";

export default function App() {
  return (
    <Grid>
      <GridItem xs={12} sm={12} md={6} lg={4} xl={3}>
        <div className="h-12 w-full bg-slate-600 rounded-lg animate-pulse" />
      </GridItem>

      <GridItem xs={12} sm={12} md={6} lg={4} xl={3}>
        <div className="h-12 w-full bg-slate-600 rounded-lg animate-pulse" />
      </GridItem>

      <GridItem xs={12} sm={12} md={6} lg={4} xl={3}>
        <div className="h-12 w-full bg-slate-600 rounded-lg animate-pulse" />
      </GridItem>

      <GridItem xs={12} sm={12} md={6} lg={4} xl={3}>
        <div className="h-12 w-full bg-slate-600 rounded-lg animate-pulse" />
      </GridItem>
    </Grid>
  )
}
`;

const GridDefault: React.FC = () => {
  return (
    <ComponentLayout>
      <Text variant="h1">Default</Text>

      <Grid>
        <GridItem xs={12} sm={12} md={6} lg={4} xl={3}>
          <div className="h-12 w-full bg-slate-600 rounded-lg animate-pulse" />
        </GridItem>

        <GridItem xs={12} sm={12} md={6} lg={4} xl={3}>
          <div className="h-12 w-full bg-slate-600 rounded-lg animate-pulse" />
        </GridItem>

        <GridItem xs={12} sm={12} md={6} lg={4} xl={3}>
          <div className="h-12 w-full bg-slate-600 rounded-lg animate-pulse" />
        </GridItem>

        <GridItem xs={12} sm={12} md={6} lg={4} xl={3}>
          <div className="h-12 w-full bg-slate-600 rounded-lg animate-pulse" />
        </GridItem>
      </Grid>

      <CodePreview code={code} />
    </ComponentLayout>
  );
};

export default GridDefault;
