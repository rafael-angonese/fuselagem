import React from "react";
import { VariantProps, tv } from "tailwind-variants";

const textVariants = tv({
  base: "text-slate-700 dark:text-white",
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

type TextVariants = VariantProps<typeof textVariants>;

interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    TextVariants {
  children?: React.ReactNode;
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
        className={textVariants({
          variant,
          fontWeight,
          color,
          class: classes,
        })}
        {...props}
      >
        {children}
      </Component>
    </>
  );
};

Text.displayName = "Text";

export { Text, textVariants };
