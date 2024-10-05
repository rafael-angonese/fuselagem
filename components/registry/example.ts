import { Registry } from "@/components/registry/schema";
import React from "react";

export const example: Registry = {
    "typewriter-effect-demo": {
      name: "typewriter-effect-demo",
      files: [{
        name: "TypewriterEffectDemo.tsx",
        file: "components/examples/typewriter-effect-demo/typewriter-effect-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/typewriter-effect-demo/typewriter-effect-demo"),
      ),
    },
    "background-gradient-demo": {
      name: "background-gradient-demo",
      files: [{
        name: "TypewriterEffectDemo.tsx",
        file: "components/examples/background-gradient-demo/background-gradient-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/background-gradient-demo/background-gradient-demo"),
      ),
    },
    "grid-pattern-demo": {
      name: "grid-pattern-demo",
      files: [{
        name: "GridPatternDemo.tsx",
        file: "components/examples/grid-pattern/grid-pattern.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/grid-pattern/grid-pattern"),
      ),
    },
    "grid-pattern-dashed-demo": {
      name: "grid-pattern-dashed-demo",
      files: [{
        name: "GridPatternDashedDemo.tsx",
        file: "components/examples/grid-pattern/grid-pattern-dashed.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/grid-pattern/grid-pattern-dashed"),
      ),
    },
    "grid-pattern-linear-gradient-demo": {
      name: "grid-pattern-linear-gradient-demo",
      files: [{
        name: "GridPatternLinearGradientDemo.tsx",
        file: "components/examples/grid-pattern/grid-pattern-linear-gradient.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/grid-pattern/grid-pattern-linear-gradient"),
      ),
    },
    "border-beam-demo": {
      name: "border-beam-demo",
      files: [{
        name: "BorderBeamDemo.tsx",
        file: "components/examples/border-beam/border-beam-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/border-beam/border-beam-demo"),
      ),
    },
    "sparkles-text-demo": {
      name: "sparkles-text-demo",
      files: [{
        name: "SparklesTextDemo.tsx",
        file: "components/examples/sparkles-text/sparkles-text-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/sparkles-text/sparkles-text-demo"),
      ),
    },
    "animated-shiny-text-demo": {
      name: "animated-shiny-text-demo",
      files: [{
        name: "AnimatedShinyTextDemo.tsx",
        file: "components/examples/animated-shiny-text/animated-shiny-text-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/animated-shiny-text/animated-shiny-text-demo"),
      ),
    },
    "animated-gradient-text-demo": {
      name: "animated-gradient-text-demo",
      files: [{
        name: "AnimatedGradientTextDemo.tsx",
        file: "components/examples/animated-gradient-text/animated-gradient-text-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/animated-gradient-text/animated-gradient-text-demo"),
      ),
    },
    "animated-beam-demo": {
      name: "animated-beam-demo",
      files: [{
        name: "AnimatedBeam.tsx",
        file: "components/examples/animated-beam/animated-beam-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/animated-beam/animated-beam-demo"),
      ),
    },
    "animated-beam-unidirectional-demo": {
      name: "animated-beam-unidirectional-demo",
      files: [{
        name: "AnimatedBeam.tsx",
        file: "components/examples/animated-beam/animated-beam-unidirectional-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/animated-beam/animated-beam-unidirectional-demo"),
      ),
    },
    "animated-beam-bidirectional-demo": {
      name: "animated-beam-bidirectional-demo",
      files: [{
        name: "AnimatedBeam.tsx",
        file: "components/examples/animated-beam/animated-beam-bidirectional-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/animated-beam/animated-beam-bidirectional-demo"),
      ),
    },
    "animated-beam-multiple-inputs-demo": {
      name: "animated-beam-multiple-inputs-demo",
      files: [{
        name: "AnimatedBeam.tsx",
        file: "components/examples/animated-beam/animated-beam-multiple-inputs-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/animated-beam/animated-beam-multiple-inputs-demo"),
      ),
    },
    "animated-beam-multiple-outputs-demo": {
      name: "animated-beam-multiple-outputs-demo",
      files: [{
        name: "AnimatedBeam.tsx",
        file: "components/examples/animated-beam/animated-beam-multiple-outputs-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/animated-beam/animated-beam-multiple-outputs-demo"),
      ),
    },
    "shine-border-demo": {
      name: "shine-border-demo",
      files: [{
        name: "ShineBorder.tsx",
        file: "components/examples/shine-border/shine-border-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/shine-border/shine-border-demo"),
      ),
    },
    "shine-border-button-demo": {
      name: "shine-border-button-demo",
      files: [{
        name: "ShineBorderButton.tsx",
        file: "components/examples/shine-border/shine-border-button-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/shine-border/shine-border-button-demo"),
      ),
    },
    "shiny-button-demo": {
      name: "shiny-button-demo",
      files: [{
        name: "ShinyButtonDemo.tsx",
        file: "components/examples/shiny-button/shiny-button-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/shiny-button/shiny-button-demo"),
      ),
    },
    "scratch-to-reveal-demo": {
      name: "scratch-to-reveal-demo",
      files: [{
        name: "ScratchToRevealDemo.tsx",
        file: "components/examples/scratch-to-reveal/scratch-to-reveal-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/scratch-to-reveal/scratch-to-reveal-demo"),
      ),
    },
    "scroll-progress-demo": {
      name: "scroll-progress-demo",
      files: [{
        name: "ScratchToRevealDemo.tsx",
        file: "components/examples/scroll-progress/scroll-progress-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/scroll-progress/scroll-progress-demo"),
      ),
    },
    "animated-cursor-demo": {
      name: "animated-cursor-demo",
      files: [{
        name: "AnimatedCursorDemo.tsx",
        file: "components/examples/animated-cursor/animated-cursor-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/animated-cursor/animated-cursor-demo"),
      ),
    },
    "meteors-demo": {
      name: "meteors-demo",
      files: [{
        name: "MeteorsDemo.tsx",
        file: "components/examples/meteors/meteors-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/meteors/meteors-demo"),
      ),
    },
    "particles-demo": {
      name: "particles-demo",
      files: [{
        name: "ParticlesDemo.tsx",
        file: "components/examples/particles/particles-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/particles/particles-demo"),
      ),
    },
    "number-ticker-demo": {
      name: "number-ticker-demo",
      files: [{
        name: "NumberTickerDemo.tsx",
        file: "components/examples/number-ticker/number-ticker-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/number-ticker/number-ticker-demo"),
      ),
    },
    "number-ticker-decimal-demo": {
      name: "number-ticker-decimal-demo",
      files: [{
        name: "NumberTickerDecimalDemo.tsx",
        file: "components/examples/number-ticker/number-ticker-decimal-demo.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/number-ticker/number-ticker-decimal-demo"),
      ),
    },
    "safari-example": {
      name: "safari-example",
      files: [{
        name: "SafariExample.tsx",
        file: "components/examples/safari/safari-example.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/safari/safari-example"),
      ),
    },
    "safari-with-image-example": {
      name: "safari-example",
      files: [{
        name: "SafariWithImageExample.tsx",
        file: "components/examples/safari/safari-with-image-example.tsx"
      }],
      component: React.lazy(
        () => import("@/components/examples/safari/safari-with-image-example"),
      ),
    },
}