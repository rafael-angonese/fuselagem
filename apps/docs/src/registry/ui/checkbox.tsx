import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const checkboxVariants = tv({
  slots: {
    wrapper: "inline-flex items-center",
    label: "relative flex cursor-pointer items-center rounded-full p-2",
    input: [
      "before:content[''] peer relative cursor-pointer",
      "appearance-none border",
      "transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full",
      "before:opacity-0 before:transition-opacity",
      "hover:before:opacity-10",
    ],
    indicator:
      "pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100",
  },
  variants: {
    color: {
      primary: {
        input:
          "border-blue-500 before:bg-blue-500 checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500",
      },
      secondary: {
        input:
          "border-purple-500 before:bg-purple-500 checked:border-purple-500 checked:bg-purple-500 checked:before:bg-purple-500",
      },
      success: {
        input:
          "border-green-500 before:bg-green-500 checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500",
      },
      warning: {
        input:
          "border-yellow-500 before:bg-yellow-500 checked:border-yellow-500 checked:bg-yellow-500 checked:before:bg-yellow-500",
      },
      error: {
        input:
          "border-red-500 before:bg-red-500 checked:border-red-500 checked:bg-red-500 checked:before:bg-red-500",
      },
    },
    size: {
      xs: {
        input: "h-3 w-3",
      },
      sm: {
        input: "h-4 w-4",
      },
      md: {
        input: "h-5 w-5",
      },
      lg: {
        input: "h-6 w-6",
      },
      xl: {
        input: "h-7 w-7",
      },
    },
    rounded: {
      none: {
        input: "rounded-none",
      },
      sm: {
        input: "rounded-sm",
      },
      rounded: {
        input: "rounded",
      },
      md: {
        input: "rounded-md",
      },
      lg: {
        input: "rounded-lg",
      },
      xl: {
        input: "rounded-xl",
      },
      "2xl": {
        input: "rounded-2xl",
      },
      "3xl": {
        input: "rounded-3xl",
      },
      full: {
        input: "rounded-full",
      },
    },
    disabled: {
      true: {
        input: "opacity-80 !cursor-not-allowed",
      },
    },
  },
  defaultVariants: {
    rounded: "md",
    color: "primary",
    size: "md",
  },
});

type CheckboxVariants = VariantProps<typeof checkboxVariants>;

export interface CheckboxProps
  extends Omit<ComponentProps<"input">, "color" | "disabled" | "size">,
    CheckboxVariants {}

const Checkbox: React.FC<CheckboxProps> = ({
  disabled,
  size,
  rounded,
  color,
  className: classes,
  ...props
}) => {
  const { wrapper, label, input, indicator } = checkboxVariants({
    color,
    disabled,
    rounded,
    size,
  });

  return (
    <>
      <div className={wrapper()}>
        <label className={label()} htmlFor="checkbox-1" data-ripple-dark="true">
          <input
            type="checkbox"
            className={input()}
            id="checkbox-1"
            {...props}
          />

          <div className={indicator()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </label>
      </div>
    </>
  );
};

Checkbox.displayName = "Checkbox";

export { Checkbox, checkboxVariants };
