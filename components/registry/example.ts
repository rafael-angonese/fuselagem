import { Registry } from "@/components/registry/schema";
import React from "react";

export const example: Registry = {
    "typewriter-effect-demo": {
      name: "typewriter-effect-demo",
      files: [{
        name: "TypewriterEffectDemo.tsx",
        file: "@/components/demos/typewriter-effect-demo/typewriter-effect-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/typewriter-effect-demo/typewriter-effect-demo"),
      ),
    },

}

export type ComponentName = keyof typeof example;