import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const dividerVariants = tv({
  base: "",
  variants: {
    orientation: {
      vertical: "border-l border-gray-300 h-full",
      horizontal: "border-t border-gray-300",
    },
    color: {
      primary: "border-blue-500",
      secondary: "border-purple-500",
      success: "border-green-500",
      warning: "border-yellow-500",
      error: "border-red-500",
    },
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    orientation: "horizontal",
    color: "primary",
    size: "md",
  },
});

type DividerVariants = VariantProps<typeof dividerVariants>;

export interface DividerProps
  extends Omit<ComponentProps<"hr">, "color">,
    DividerVariants {}

const Divider: React.FC<DividerProps> = ({
  color,
  size,
  orientation,
  className: classes,
  ...props
}) => {
  return (
    <hr
      className={dividerVariants({
        color,
        size,
        orientation,
        class: classes,
      })}
      {...props}
    />
  );
};

Divider.displayName = "Divider";

export { Divider, dividerVariants };
