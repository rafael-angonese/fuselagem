import { Registry } from "@/registry/schema";

const ui: Registry = [
  {
    name: "linear-progress",
    type: "components:ui",
    dependencies: [""],
    files: [
      "ui/linear-progress/linear-progress.tsx",
      "ui/linear-progress/styles.css",
    ],
  },
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
  {
    name: "pagination",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/pagination.tsx"],
  },
  {
    name: "radio",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/radio.tsx"],
  },
  {
    name: "skeleton",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/skeleton.tsx"],
  },
  {
    name: "switch",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/switch.tsx"],
  },
  {
    name: "text",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/text.tsx"],
  },
  {
    name: "textarea",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/textarea.tsx"],
  },
  {
    name: "tooltip",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/tooltip.tsx"],
  },
];

export const registry: Registry = [...ui];
