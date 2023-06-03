"use client";
import { Button } from "fuselagem";

export default function Home() {
  return (
    <main className="bg-black h-screen text-white p-8">
      <h1 className="mt-8">Default</h1>
      <div>
        <Button>Default</Button>
      </div>

      <h1 className="mt-8">Disabled</h1>
      <div>
        <Button onClick={() => console.log("clicou")} disabled>
          Disabled
        </Button>
      </div>

      <h1 className="mt-8">Full Width</h1>
      <div>
        <Button fullWidth>Full Width</Button>
      </div>

      <h1 className="mt-8">Sizes</h1>
      <div className="space-x-2">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </div>

      <h1 className="mt-8">Colors</h1>
      <div className="flex gap-2">
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
      </div>

      <h1 className="mt-8">Outlined</h1>
      <div className="flex gap-2">
        <Button outlined color="primary">
          Primary
        </Button>
        <Button outlined color="secondary">
          Secondary
        </Button>
        <Button outlined color="success">
          Success
        </Button>
        <Button outlined color="warning">
          Warning
        </Button>
        <Button outlined color="error">
          Error
        </Button>
      </div>

      <h1 className="mt-8">Rounded</h1>
      <div className="space-x-2">
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

      <div className="flex gap-2 mt-2">
        <Button outlined rounded color="primary">
          Primary
        </Button>
        <Button outlined rounded color="secondary">
          Secondary
        </Button>
        <Button outlined rounded color="success">
          Success
        </Button>
        <Button outlined rounded color="warning">
          Warning
        </Button>
        <Button outlined rounded color="error">
          Error
        </Button>
      </div>


      <h1 className="mt-8">Shadow</h1>
      <div className="space-x-2">
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

      <div className="flex gap-2 mt-2">
        <Button shadow outlined rounded color="primary">
          Primary
        </Button>
        <Button shadow outlined rounded color="secondary">
          Secondary
        </Button>
        <Button shadow outlined rounded color="success">
          Success
        </Button>
        <Button shadow outlined rounded color="warning">
          Warning
        </Button>
        <Button shadow outlined rounded color="error">
          Error
        </Button>
      </div>
    </main>
  );
}
