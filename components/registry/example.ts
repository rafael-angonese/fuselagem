import { Registry } from "@/components/registry/schema";
import React from "react";

const ui: Registry = {
  "typewriter-effect": {
    name: "typewriter-effect",
    files: [{
      name: "TypewriterEffect.tsx",
      file: "components/ui/typewriter-effect/typewriter-effect.tsx"
    }],
  },

}

const example: Registry = {
    "typewriter-effect-demo": {
      name: "typewriter-effect-demo",
      files: [{
        name: "TypewriterEffectDemo.tsx",
        file: "components/demos/typewriter-effect-demo/typewriter-effect-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/typewriter-effect-demo/typewriter-effect-demo"),
      ),
    },

}

export const registry: Registry = {
  ...ui,
  ...example,
};

export type ComponentName = keyof (typeof ui & typeof example);