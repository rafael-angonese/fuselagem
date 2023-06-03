import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const baseButtonVariants = cva(
  "text-white rounded-lg text-center font-medium focus:outline-none focus:ring-2",
  {
    variants: {
      color: {
        primary: "",
        secondary: "",
        success: "",
        warning: "",
        error: "",
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
        true: "shadow-lg shadow-white/50",
      },
      bordered: {
        true: "w-full",
      },

      ghost: {
        true: "w-full",
      },
    },
    compoundVariants: [
      {
        color: "primary",
        outlined: true,
        className:
          "text-blue-400 hover:text-white border border-blue-400 hover:bg-blue-500 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800",
      },
      {
        color: "primary",
        outlined: false,
        className:
          "bg-blue-400 hover:bg-blue-500 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      },

      {
        color: "secondary",
        outlined: true,
        className:
          "text-purple-400 hover:text-white border border-purple-400 hover:bg-purple-500 focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900",
      },
      {
        color: "secondary",
        outlined: false,
        className:
          "bg-purple-400 hover:bg-purple-500 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800",
      },

      {
        color: "success",
        outlined: true,
        className:
          "text-green-400 hover:text-white border border-green-400 hover:bg-green-500 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800",
      },
      {
        color: "success",
        outlined: false,
        className:
          "bg-green-400 hover:bg-green-500 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
      },

      {
        color: "warning",
        outlined: true,
        className:
          "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900",
      },
      {
        color: "warning",
        outlined: false,
        className:
          "bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800",
      },

      {
        color: "error",
        outlined: true,
        className:
          "text-red-400 hover:text-white border border-red-400 hover:bg-red-500 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900",
      },
      {
        color: "error",
        outlined: false,
        className:
          "bg-red-400 hover:bg-red-500 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",
      },
    ],
    defaultVariants: {
      color: "primary",
      size: "sm",
      outlined: false,
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
  shadow,
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
        shadow,
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
