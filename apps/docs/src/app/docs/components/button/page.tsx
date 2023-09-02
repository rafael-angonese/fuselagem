import ComponentLayout from "@/components/ComponentLayout/ComponentLayout";
import PageComponentLayout from "@/components/PageComponentLayout/PageComponentLayout";
import { Button } from "@/registry/ui/Button";
import { Text } from "@/registry/ui/text";
import { ChevronRight, Loader2, Mail } from "lucide-react";
import Link from "next/link";

export default async function ButtonPage() {
  return (
    <PageComponentLayout>
      <ComponentLayout>
        <Text variant="h1">Default</Text>

        <Button>Default</Button>
      </ComponentLayout>

      <ComponentLayout>
        <Text variant="h1">Disabled</Text>

        <Button disabled>Disabled</Button>
      </ComponentLayout>

      <ComponentLayout>
        <Text variant="h1">Full Width</Text>

        <Button fullWidth>Full Width</Button>
      </ComponentLayout>

      <ComponentLayout>
        <Text variant="h1">As Child</Text>

        <Button asChild>
          <Link href="/docs/components">Docs</Link>
        </Button>
      </ComponentLayout>

      <ComponentLayout>
        <Text variant="h1">Loading</Text>

        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      </ComponentLayout>

      <ComponentLayout>
        <Text variant="h1">Icon</Text>
        <div className="flex items-center space-x-2">
          <Button variant="outlined" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>

          <Button variant="outlined">
            <Mail className="mr-2 h-4 w-4" /> Login with Email
          </Button>
        </div>
      </ComponentLayout>

      <ComponentLayout>
        <Text variant="h1">Sizes</Text>

        <div className="flex items-center space-x-2">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </ComponentLayout>

      <ComponentLayout>
        <Text variant="h1">Colors</Text>

        <div className="flex items-center space-x-2">
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="error">Error</Button>
        </div>
      </ComponentLayout>

      <ComponentLayout>
        <Text variant="h1">Outlined</Text>

        <div className="flex items-center space-x-2">
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
          <Button variant="outlined" color="warning">
            Warning
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
        </div>
      </ComponentLayout>

      <ComponentLayout>
        <Text variant="h1">Rounded</Text>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Button rounded color="primary">
              Primary
            </Button>
            <Button rounded color="secondary">
              Secondary
            </Button>
            <Button rounded color="success">
              Success
            </Button>
            <Button rounded color="warning">
              Warning
            </Button>
            <Button rounded color="error">
              Error
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outlined" rounded color="primary">
              Primary
            </Button>
            <Button variant="outlined" rounded color="secondary">
              Secondary
            </Button>
            <Button variant="outlined" rounded color="success">
              Success
            </Button>
            <Button variant="outlined" rounded color="warning">
              Warning
            </Button>
            <Button variant="outlined" rounded color="error">
              Error
            </Button>
          </div>
        </div>
      </ComponentLayout>

      <ComponentLayout>
        <Text variant="h1">Shadow</Text>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Button shadow rounded color="primary">
              Primary
            </Button>
            <Button shadow rounded color="secondary">
              Secondary
            </Button>
            <Button shadow rounded color="success">
              Success
            </Button>
            <Button shadow rounded color="warning">
              Warning
            </Button>
            <Button shadow rounded color="error">
              Error
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button shadow variant="outlined" rounded color="primary">
              Primary
            </Button>
            <Button shadow variant="outlined" rounded color="secondary">
              Secondary
            </Button>
            <Button shadow variant="outlined" rounded color="success">
              Success
            </Button>
            <Button shadow variant="outlined" rounded color="warning">
              Warning
            </Button>
            <Button shadow variant="outlined" rounded color="error">
              Error
            </Button>
          </div>
        </div>
      </ComponentLayout>
    </PageComponentLayout>
  );
}
