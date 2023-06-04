import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import React, { ReactNode } from "react";

const baseTextVariants = cva("text-white", {
  variants: {
    variant: {
      h1: "text-5xl font-bold",
      h2: "text-4xl font-bold",
      h3: "text-3xl font-bold",
      h4: "text-2xl font-bold",
      h5: "text-xl font-bold",
      h6: "text-lg font-bold",
      p: "text-base font-normal",
      span: "text-sm font-normal",
    },
    color: {
      primary: "text-blue-400",
      secondary: "text-purple-400",
      success: "text-green-400",
      warning: "text-yellow-400",
      error: "text-red-400",
    },
    fontWeight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    },
  },
  defaultVariants: {
    variant: "span",
  },
});

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof baseTextVariants> {
  children?: ReactNode;
}

const Text: React.FC<TextProps> = ({
  variant,
  color,
  fontWeight,
  className: classes,
  children,
  ...props
}) => {
  const Component = variant || "span";

  return (
    <>
      <Component
        className={cn(
          baseTextVariants({
            variant,
            fontWeight,
            color,
          }),
          classes
        )}
        {...props}
      >
        {children}
      </Component>
    </>
  );
};

export default Text;
