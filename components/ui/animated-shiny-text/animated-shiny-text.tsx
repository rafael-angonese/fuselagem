import React, { CSSProperties, ReactNode } from "react";
import { cnBase } from "tailwind-variants";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

export const AnimatedShinyText: React.FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <p
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cnBase(
        "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70",

        // Shimmer effect
        "animate-shimmer-ui bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Shimmer gradient
        "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80",

        className,
      )}
    >
      {children}
    </p>
  );
};