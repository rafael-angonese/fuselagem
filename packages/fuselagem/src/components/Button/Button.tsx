import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const solidVariants = cva("", {
  variants: {
    variant: {
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
  },
});

const outlineVariants = cva("", {
  variants: {
    variant: {
      primary:
        "text-blue-400 hover:text-white border border-blue-400 hover:bg-blue-500 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800",
      secondary:
        "text-purple-400 hover:text-white border border-purple-400 hover:bg-purple-500 focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900",
      success:
        "text-green-400 hover:text-white border border-green-400 hover:bg-green-500 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800",
      warning:
        "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900",
      error:
        "text-red-400 hover:text-white border border-red-400 hover:bg-red-500 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900",
    },
  },
});

const shadowVariants = cva("", {
  variants: {
    variant: {
      primary: "shadow-blue-400/50",
      secondary: "shadow-purple-400/50",
      success: "shadow-green-400/50",
      warning: "shadow-yellow-400/50",
      error: "shadow-red-400/50",
    },
  },
});

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
        md: "px-5 py-2.5 text-base",
        lg: "py-3 px-5 text-lg",
        xl: "py-6 px-6 text-xl",
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
        true: "shadow-lg",
      },
      bordered: {
        true: "w-full",
      },

      ghost: {
        true: "w-full",
      },
    },
    compoundVariants: [
      // OUTLINED
      {
        color: "primary",
        outlined: true,
        className: outlineVariants({ variant: "primary" }),
      },
      {
        color: "secondary",
        outlined: true,
        className: outlineVariants({ variant: "secondary" }),
      },
      {
        color: "success",
        outlined: true,
        className: outlineVariants({ variant: "success" }),
      },
      {
        color: "warning",
        outlined: true,
        className: outlineVariants({ variant: "warning" }),
      },
      {
        color: "error",
        outlined: true,
        className: outlineVariants({ variant: "error" }),
      },

      // SOLID
      {
        color: "primary",
        outlined: false,
        className: solidVariants({ variant: "primary" }),
      },
      {
        color: "secondary",
        outlined: false,
        className: solidVariants({ variant: "secondary" }),
      },
      {
        color: "success",
        outlined: false,
        className: solidVariants({ variant: "success" }),
      },
      {
        color: "warning",
        outlined: false,
        className: solidVariants({ variant: "warning" }),
      },
      {
        color: "error",
        outlined: false,
        className: solidVariants({ variant: "error" }),
      },

      // SHADOW
      {
        color: "primary",
        shadow: true,
        className: shadowVariants({ variant: "primary" }),
      },
      {
        color: "secondary",
        shadow: true,
        className: shadowVariants({ variant: "secondary" }),
      },
      {
        color: "success",
        shadow: true,
        className: shadowVariants({ variant: "success" }),
      },
      {
        color: "warning",
        shadow: true,
        className: shadowVariants({ variant: "warning" }),
      },
      {
        color: "error",
        shadow: true,
        className: shadowVariants({ variant: "error" }),
      },
    ],
    defaultVariants: {
      color: "primary",
      size: "md",
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
  className: classes,
  ...props
}) => {
  return (
    <button
      className={cn(
        baseButtonVariants({
          color,
          rounded,
          disabled,
          size,
          outlined,
          shadow,
          fullWidth,
        }),
        classes
      )}
      disabled={disabled ? true : false}
      {...props}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
