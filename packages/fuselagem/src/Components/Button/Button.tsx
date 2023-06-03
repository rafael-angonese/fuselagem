import { ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

const baseButtonVariants = cva(
  "text-white rounded-lg text-center font-medium focus:outline-none focus:ring-2",
  {
    variants: {
      color: {
        primary:
          "bg-blue-400 hover:bg-blue-500 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
        secondary:
          "bg-purple-400 hover:bg-purple-500 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800",
        success:
          "bg-green-400 hover:bg-green-500 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
        warning:
          "bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800",
        error:
          "bg-red-400 hover:bg-red-500 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",
      },
      size: {
        xs: "py-2 px-3 text-xs",
        sm: "py-2 px-3 text-sm",
        md: "px-5 py-2.5 text-sm",
        lg: "py-3 px-5 text-base",
        xl: "py-6 px-6 text-base",
      },
      fullWidth: {
        true: "w-full",
      },
      rounded: {
        true: "rounded-full",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
      },
      outlined: {
        true: "",
        false: "",
      },

      shadow: {
        true: "w-full",
      },
      bordered: {
        true: "w-full",
      },

      ghost: {
        true: "w-full",
      },
    },
    // compoundVariants: [
    //   { color: "primary", outlined: true, className: "!bg-red-500" },
    // ],
    defaultVariants: {
      color: "primary",
      size: "sm",
    },
  }
);

export interface ButtonProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      "color" | "disabled" | "size"
    >,
    VariantProps<typeof baseButtonVariants> {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  color,
  size,
  disabled,
  fullWidth,
  rounded,
  outlined,
  children,
  ...props
}) => {
  return (
    <button
      className={baseButtonVariants({
        color,
        rounded,
        disabled,
        size,
        outlined,
        fullWidth,
      })}
      disabled={disabled ? true : false}
      {...props}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
