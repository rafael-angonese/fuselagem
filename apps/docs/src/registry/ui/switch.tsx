import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const switchVariants = tv({
  slots: {
    label: "flex items-center cursor-pointer",
    wrapper: "relative",
    input: "sr-only peer",
    content:
      "peer-focus:outline-none peer-focus:ring-4 block bg-gray-200 rounded-full",
    dot: "dot peer-checked:translate-x-full absolute left-1 top-1 bg-white rounded-full transition",
  },
  variants: {
    color: {
      primary: {
        content: "peer-focus:ring-blue-300 peer-checked:bg-blue-500",
      },
      secondary: {
        content: "peer-focus:ring-purple-300 peer-checked:bg-purple-500",
      },
      success: {
        content: "peer-focus:ring-green-300 peer-checked:bg-green-500",
      },
      warning: {
        content: "peer-focus:ring-yellow-300 peer-checked:bg-yellow-500",
      },
      error: {
        content: "peer-focus:ring-red-300 peer-checked:bg-red-500",
      },
    },
    size: {
      xs: {
        content: "w-10 h-6",
        dot: "w-4 h-4",
      },
      sm: {
        content: "w-12 h-7",
        dot: "w-5 h-5",
      },
      md: {
        content: "w-14 h-8",
        dot: "w-6 h-6",
      },
      lg: {
        content: "w-16 h-9",
        dot: "w-7 h-7",
      },
      xl: {
        content: "w-20 h-11",
        dot: "w-9 h-9",
      },
    },
    disabled: {
      true: {
        input: "opacity-80 !cursor-not-allowed",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
});

type SwitchVariants = VariantProps<typeof switchVariants>;

export interface SwitchProps
  extends Omit<ComponentProps<"input">, "color" | "disabled" | "size">,
    SwitchVariants {}

const Switch: React.FC<SwitchProps> = ({
  disabled,
  size,
  color,
  className: classes,
  ...props
}) => {
  const { content, wrapper, label, input, dot } = switchVariants({
    color,
    disabled,
    size,
  });

  return (
    <>
      <label className={label()}>
        <div className={wrapper()}>
          <input type="checkbox" {...props} className={input()} />
          <div className={content()} />

          <div className={dot()}>
            {/* <svg
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
              </svg> */}
          </div>
        </div>

        <div className="ml-3 text-gray-700 font-medium">Toggle Me!</div>
      </label>
    </>
  );
};

Switch.displayName = "Switch";

export { Switch, switchVariants };
