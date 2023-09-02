import React from "react";
import { VariantProps, tv } from "tailwind-variants";

import "./styles.css";

const linearProgressVariants = tv({
  slots: {
    wrapper: "w-full bg-gray-600 relative overflow-hidden rounded-full",
    container: "h-full rounded-full",
    content: "flex items-center justify-end h-full pr-2 text-xs text-white",
  },
  variants: {
    color: {
      primary: {
        container: "bg-blue-400 dark:bg-blue-600",
      },
      secondary: {
        container: "bg-purple-400 dark:bg-purple-600",
      },
      success: {
        container: "bg-green-400 dark:bg-green-600",
      },
      error: {
        container: "bg-red-400 dark:bg-red-600",
      },
      warning: {
        container: "bg-yellow-400 dark:bg-yellow-600",
      },
    },
    size: {
      xs: {
        wrapper: "h-1",
      },
      sm: {
        wrapper: "h-2",
      },
      md: {
        wrapper: "h-3",
      },
      lg: {
        wrapper: "h-4",
      },
      xl: {
        wrapper: "h-5",
      },
    },
    indeterminate: {
      true: {
        wrapper: "indeterminate",
        container: "progressbar absolute top-0",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    indeterminate: false,
    size: "md",
  },
});

type LinearProgressVariants = VariantProps<typeof linearProgressVariants>;

export interface LinearProgressProps extends LinearProgressVariants {
  children?: React.ReactNode;
  percentage?: number;
}

const LinearProgress: React.FC<LinearProgressProps> = ({
  children,
  color,
  size,
  indeterminate,
  percentage = 100,
}) => {
  const { wrapper, container, content } = linearProgressVariants({
    color,
    size,
    indeterminate,
  });

  return (
    <>
      <div className={wrapper()}>
        <div
          className={container()}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <span className={content()}>{children}</span>
        </div>
      </div>
    </>
  );
};

LinearProgress.displayName = "LinearProgress";

export { LinearProgress, linearProgressVariants };
