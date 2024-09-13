import { Registry } from "@/components/registry/schema";
import React from "react";

const ui: Registry = {
  "typewriter-effect": {
    name: "typewriter-effect",
    files: [{
      name: "TypewriterEffect.tsx",
      file: "components/ui/typewriter-effect.tsx"
    }],
  },
  "background-gradient": {
    name: "background-gradient",
    files: [{
      name: "BackgroundGradient.tsx",
      file: "components/ui/background-gradient.tsx"
    }],
  },
}

const example: Registry = {
    "typewriter-effect-demo": {
      name: "typewriter-effect-demo",
      files: [{
        name: "TypewriterEffectDemo.tsx",
        file: "components/demos/typewriter-effect-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/typewriter-effect-demo"),
      ),
    },
    "background-gradient-demo": {
      name: "background-gradient-demo",
      files: [{
        name: "TypewriterEffectDemo.tsx",
        file: "components/demos/background-gradient-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/background-gradient-demo"),
      ),
    },
}

export const registry: Registry = {
  ...ui,
  ...example,
};

export type ComponentName = keyof (typeof ui & typeof example);