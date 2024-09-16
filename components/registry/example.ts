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
  "background-gradient": {
    name: "background-gradient",
    files: [{
      name: "BackgroundGradient.tsx",
      file: "components/ui/background-gradient/background-gradient.tsx"
    }],
  },
  "grid-pattern": {
    name: "grid-pattern",
    files: [{
      name: "TypewriterEffect.tsx",
      file: "components/ui/grid-pattern/grid-pattern.tsx"
    }],
  },
  "border-beam": {
    name: "border-beam",
    files: [{
      name: "BorderBeam.tsx",
      file: "components/ui/border-beam/border-beam.tsx"
    }],
  },
  "sparkles-text": {
    name: "sparkles-text",
    files: [{
      name: "SparklesText.tsx",
      file: "components/ui/sparkles-text/sparkles-text.tsx"
    }],
  },
  "animated-shiny-text": {
    name: "animated-shiny-text",
    files: [{
      name: "SparklesText.tsx",
      file: "components/ui/animated-shiny-text/animated-shiny-text.tsx"
    }],
  },
  "animated-gradient-text": {
    name: "animated-gradient-text",
    files: [{
      name: "SparklesText.tsx",
      file: "components/ui/animated-gradient-text/animated-gradient-text.tsx"
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
    "background-gradient-demo": {
      name: "background-gradient-demo",
      files: [{
        name: "TypewriterEffectDemo.tsx",
        file: "components/demos/background-gradient-demo/background-gradient-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/background-gradient-demo/background-gradient-demo"),
      ),
    },
    "grid-pattern-demo": {
      name: "grid-pattern-demo",
      files: [{
        name: "GridPatternDemo.tsx",
        file: "components/demos/grid-pattern/grid-pattern.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/grid-pattern/grid-pattern"),
      ),
    },
    "grid-pattern-dashed-demo": {
      name: "grid-pattern-dashed-demo",
      files: [{
        name: "GridPatternDashedDemo.tsx",
        file: "components/demos/grid-pattern/grid-pattern-dashed.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/grid-pattern/grid-pattern-dashed"),
      ),
    },
    "grid-pattern-linear-gradient-demo": {
      name: "grid-pattern-linear-gradient-demo",
      files: [{
        name: "GridPatternLinearGradientDemo.tsx",
        file: "components/demos/grid-pattern/grid-pattern-linear-gradient.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/grid-pattern/grid-pattern-linear-gradient"),
      ),
    },
    "border-beam-demo": {
      name: "border-beam-demo",
      files: [{
        name: "BorderBeamDemo.tsx",
        file: "components/demos/border-beam/border-beam-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/border-beam/border-beam-demo"),
      ),
    },
    "sparkles-text-demo": {
      name: "sparkles-text-demo",
      files: [{
        name: "SparklesTextDemo.tsx",
        file: "components/demos/sparkles-text/sparkles-text-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/sparkles-text/sparkles-text-demo"),
      ),
    },
    "animated-shiny-text-demo": {
      name: "animated-shiny-text-demo",
      files: [{
        name: "SparklesTextDemo.tsx",
        file: "components/demos/animated-shiny-text/animated-shiny-text-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/animated-shiny-text/animated-shiny-text-demo"),
      ),
    },
    "animated-gradient-text-demo": {
      name: "animated-gradient-text-demo",
      files: [{
        name: "SparklesTextDemo.tsx",
        file: "components/demos/animated-gradient-text/animated-gradient-text-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/animated-gradient-text/animated-gradient-text-demo"),
      ),
    },
}

export const registry: Registry = {
  ...ui,
  ...example,
};

export type ComponentName = keyof (typeof ui & typeof example);