import { Registry } from "@/registry/schema";

const ui: Registry = [
  {
    name: "button",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/button.tsx"],
  },
];

export const registry: Registry = [...ui];
