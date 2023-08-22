import { Registry } from "@/registry/schema";

const ui: Registry = [
  {
    name: "badge",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/badge.tsx"],
  },
  {
    name: "button",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/button.tsx"],
  },
  {
    name: "checkbox",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/checkbox.tsx"],
  },
  {
    name: "divider",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/divider.tsx"],
  },
  {
    name: "form-label",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/form-label.tsx"],
  },
  {
    name: "grid-item",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/grid-item.tsx"],
  },
  {
    name: "grid",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/grid.tsx"],
  },
  {
    name: "input-text",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/input-text.tsx"],
  },
];

export const registry: Registry = [...ui];
