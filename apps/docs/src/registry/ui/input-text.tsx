import React, { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const inputTextVariants = tv({
  slots: {
    wrapper: "relative",
    input: [
      "border-2 text-sm rounded-lg focus:outline-1 block p-2.5 placeholder:text-gray-400",
      "bg-white border-gray-300 hover:border-gray-400 text-black focus:outline-gray-500",
      "dark:bg-black dark:text-white dark:border-gray-500 dark:hover:border-gray-400 focus:dark:border-gray-300 dark:focus:outline-0",
      `data-[left-content="true"]:pl-9 data-[right-content="true"]:pr-9`,
    ],
  },
  variants: {
    size: {
      xs: {
        input: "p-2.5 text-base",
      },
      sm: {
        input: "p-2.5 text-base",
      },
      md: {
        input: "p-2.5 text-base",
      },
      lg: {
        input: "p-2.5 text-base",
      },
      xl: {
        input: "p-2.5 text-base",
      },
    },
    fullWidth: {
      true: {
        input: "w-full",
      },
    },
    disabled: {
      true: {
        input: "opacity-80 !cursor-not-allowed",
      },
    },
    isInvalid: {
      true: {
        input: [
          "placeholder:text-red-500",
          "border-red-500 hover:border-red-500 text-red-500 focus:outline-red-500",
          "dark:text-red-500 dark:border-red-500 dark:hover:border-red-500 focus:dark:border-red-500 dark:focus:outline-0",
        ],
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type InputTextVariants = VariantProps<typeof inputTextVariants>;

export interface InputTextProps
  extends Omit<ComponentProps<"input">, "color" | "size">,
    InputTextVariants {
  disabled?: boolean;
  isInvalid?: boolean;
  leftContent?: React.ReactElement;
  rightContent?: React.ReactElement;
}

const InputText: React.FC<InputTextProps> = ({
  disabled,
  isInvalid,
  size,
  fullWidth,
  leftContent,
  rightContent,
  className,
  ...props
}) => {
  const { wrapper, input } = inputTextVariants({
    disabled,
    isInvalid,
    fullWidth,
    size,
  });

  return (
    <div className={wrapper()}>
      {leftContent && (
        <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
          {leftContent}
        </div>
      )}
      <input
        className={input({ className })}
        data-left-content={leftContent ? true : false}
        data-right-content={rightContent ? true : false}
        disabled={disabled}
        {...props}
      />

      {rightContent && (
        <div className="flex absolute inset-y-0 right-0 items-center pr-2">
          {rightContent}
        </div>
      )}
    </div>
  );
};

InputText.displayName = "InputText";

export { InputText, inputTextVariants };
