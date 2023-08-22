import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const radioVariants = tv({
  slots: {
    wrapper: "inline-flex items-center",
    label: "relative flex cursor-pointer items-center rounded-full p-2",
    input: [
      "before:content[''] peer relative h-5 w-5 cursor-pointer ",
      "appearance-none rounded-full border",
      "transition-all before:absolute before:top-2/4 before:left-2/4",
      "before:block before:h-12 before:w-12 before:-translate-y-2/4 ",
      "before:-translate-x-2/4 before:rounded-full",
      "before:opacity-0 before:transition-opacity",
      "hover:before:opacity-10",
    ],
    indicator:
      "pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 opacity-0 transition-opacity peer-checked:opacity-100",
  },
  variants: {
    color: {
      primary: {
        input:
          "border-blue-500 text-blue-500 before:bg-blue-500 checked:border-blue-500 checked:before:bg-blue-500",
        indicator: "text-blue-500",
      },
      secondary: {
        input:
          "border-purple-500 text-purple-500 before:bg-purple-500 checked:border-purple-500 checked:before:bg-purple-500",
        indicator: "text-purple-500",
      },
      success: {
        input:
          "border-green-500 text-green-500 before:bg-green-500 checked:border-green-500 checked:before:bg-green-500",
        indicator: "text-green-500",
      },
      warning: {
        input:
          "border-yellow-500 text-yellow-500 before:bg-yellow-500 checked:border-yellow-500 checked:before:bg-yellow-500",
        indicator: "text-yellow-500",
      },
      error: {
        input:
          "border-red-500 text-red-500 before:bg-red-500 checked:border-red-500 checked:before:bg-red-500",
        indicator: "text-red-500",
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
    // rounded: "md",
    color: "primary",
    // size: "md",
  },
});

type RadioVariants = VariantProps<typeof radioVariants>;

export interface RadioProps
  extends Omit<ComponentProps<"input">, "color" | "disabled" | "size">,
    RadioVariants {}

const Radio: React.FC<RadioProps> = ({
  disabled,
  size,
  rounded,
  color,
  className: classes,
  ...props
}) => {
  const { wrapper, label, input, indicator } = radioVariants({
    color,
    disabled,
    rounded,
    size,
  });

  return (
    <>
      <div className={wrapper()}>
        <label className={label()} htmlFor="radio-1" data-ripple-dark="true">
          <input type="radio" className={input()} id="radio-1" {...props} />

          <div className={indicator()}>
            <svg
              xmlns="http://www.w3.org/5000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </div>
        </label>
      </div>
    </>
  );
};

Radio.displayName = "Radio";

export { Radio, radioVariants };
