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
      name: "GridPattern.tsx",
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
      name: "AnimatedShinyText.tsx",
      file: "components/ui/animated-shiny-text/animated-shiny-text.tsx"
    }],
  },
  "animated-gradient-text": {
    name: "animated-gradient-text",
    files: [{
      name: "AnimatedGradientText.tsx",
      file: "components/ui/animated-gradient-text/animated-gradient-text.tsx"
    }],
  },
  "animated-beam": {
    name: "animated-beam",
    files: [{
      name: "AnimatedBeam.tsx",
      file: "components/ui/animated-beam/animated-beam.tsx"
    }],
  },
  "shine-border": {
    name: "shine-border",
    files: [{
      name: "ShineBorder.tsx",
      file: "components/ui/shine-border/shine-border.tsx"
    }],
  },
  "shiny-button": {
    name: "shiny-button",
    files: [{
      name: "ShineBorder.tsx",
      file: "components/ui/shiny-button/shiny-button.tsx"
    }],
  },
  "scratch-to-reveal": {
    name: "scratch-to-reveal",
    files: [{
      name: "ScratchToReveal.tsx",
      file: "components/ui/scratch-to-reveal/scratch-to-reveal.tsx"
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
        name: "AnimatedShinyTextDemo.tsx",
        file: "components/demos/animated-shiny-text/animated-shiny-text-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/animated-shiny-text/animated-shiny-text-demo"),
      ),
    },
    "animated-gradient-text-demo": {
      name: "animated-gradient-text-demo",
      files: [{
        name: "AnimatedGradientTextDemo.tsx",
        file: "components/demos/animated-gradient-text/animated-gradient-text-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/animated-gradient-text/animated-gradient-text-demo"),
      ),
    },
    "animated-beam-demo": {
      name: "animated-beam-demo",
      files: [{
        name: "AnimatedBeam.tsx",
        file: "components/demos/animated-beam/animated-beam-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/animated-beam/animated-beam-demo"),
      ),
    },
    "animated-beam-unidirectional-demo": {
      name: "animated-beam-unidirectional-demo",
      files: [{
        name: "AnimatedBeam.tsx",
        file: "components/demos/animated-beam/animated-beam-unidirectional-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/animated-beam/animated-beam-unidirectional-demo"),
      ),
    },
    "animated-beam-bidirectional-demo": {
      name: "animated-beam-bidirectional-demo",
      files: [{
        name: "AnimatedBeam.tsx",
        file: "components/demos/animated-beam/animated-beam-bidirectional-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/animated-beam/animated-beam-bidirectional-demo"),
      ),
    },
    "animated-beam-multiple-inputs-demo": {
      name: "animated-beam-multiple-inputs-demo",
      files: [{
        name: "AnimatedBeam.tsx",
        file: "components/demos/animated-beam/animated-beam-multiple-inputs-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/animated-beam/animated-beam-multiple-inputs-demo"),
      ),
    },
    "animated-beam-multiple-outputs-demo": {
      name: "animated-beam-multiple-outputs-demo",
      files: [{
        name: "AnimatedBeam.tsx",
        file: "components/demos/animated-beam/animated-beam-multiple-outputs-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/animated-beam/animated-beam-multiple-outputs-demo"),
      ),
    },
    "shine-border-demo": {
      name: "shine-border-demo",
      files: [{
        name: "ShineBorder.tsx",
        file: "components/demos/shine-border/shine-border-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/shine-border/shine-border-demo"),
      ),
    },
    "shine-border-button-demo": {
      name: "shine-border-button-demo",
      files: [{
        name: "ShineBorderButton.tsx",
        file: "components/demos/shine-border/shine-border-button-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/shine-border/shine-border-button-demo"),
      ),
    },
    "shiny-button-demo": {
      name: "shiny-button-demo",
      files: [{
        name: "ShinyButtonDemo.tsx",
        file: "components/demos/shiny-button/shiny-button-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/shiny-button/shiny-button-demo"),
      ),
    },
    "scratch-to-reveal-demo": {
      name: "scratch-to-reveal-demo",
      files: [{
        name: "ScratchToRevealDemo.tsx",
        file: "components/demos/scratch-to-reveal/scratch-to-reveal-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/demos/scratch-to-reveal/scratch-to-reveal-demo"),
      ),
    },
}

export const registry: Registry = {
  ...ui,
  ...example,
};

export type ComponentName = keyof (typeof ui & typeof example);