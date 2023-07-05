import { ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const tooltipVariants = tv({
  slots: {
    container: "relative inline-flex cursor-pointer w-fit group",
    content: [
      "hidden group-hover:flex whitespace-nowrap",
      "text-white absolute z-50 p-2 text-base rounded-md",
      "bg-slate-600 shadow-lg shadow-slate-600",
    ],
    arrow: "absolute w-0 h-0",
  },
  variants: {
    position: {
      top: {
        content: "bottom-[calc(100%+18px)] left-1/2	-translate-x-1/2",
        arrow: [
          "bottom-[-8px] left-[calc(50%-10px)]",
          "border-r-[10px] border-r-transparent",
          "border-t-[10px] border-t-slate-600",
          "border-l-[10px] border-l-transparent",
        ],
      },
      bottom: {
        content: "top-[calc(100%+18px)] left-1/2 -translate-x-1/2",
        arrow: [
          "top-[-8px] left-[calc(50%-10px)]",
          "border-r-[10px] border-r-transparent",
          "border-b-[10px] border-b-slate-600",
          "border-l-[10px] border-l-transparent",
        ],
      },
      left: {
        content: "right-[calc(100%+18px)] top-1/2 -translate-y-1/2",
        arrow: [
          "right-[-8px] top-[calc(50%-10px)]",
          "border-t-[10px] border-t-transparent",
          "border-l-[10px] border-l-slate-600",
          "border-b-[10px] border-b-transparent",
        ],
      },
      right: {
        content: "left-[calc(100%+18px)] top-1/2 -translate-y-1/2",
        arrow: [
          "left-[-8px] top-[calc(50%-10px)]",
          "border-t-[10px] border-t-transparent",
          "border-r-[10px] border-r-slate-600",
          "border-b-[10px] border-b-transparent",
        ],
      },
    },
    color: {
      primary: {
        content: "",
      },
      secondary: {
        content: "",
      },
      success: {
        content: "",
      },
      warning: {
        content: "",
      },
      error: {
        content: "",
      },
    },
    rounded: {
      none: {
        content: "rounded-none",
      },
      sm: {
        content: "rounded-sm",
      },
      rounded: {
        content: "rounded",
      },
      md: {
        content: "rounded-md",
      },
      lg: {
        content: "rounded-lg",
      },
      xl: {
        content: "rounded-xl",
      },
      "2xl": {
        content: "rounded-2xl",
      },
      "3xl": {
        content: "rounded-3xl",
      },
      full: {
        content: "rounded-full",
      },
    },
  },
  defaultVariants: {
    position: "top",
    color: "primary",
  },
});

type TooltipVariants = VariantProps<typeof tooltipVariants>;

export interface TooltipProps
  extends Omit<
      React.HTMLAttributes<HTMLDivElement>,
      "color" | "disabled" | "size"
    >,
    TooltipVariants {
  title?: string;
  children?: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  position,
  color,
  rounded,
  className: classes,
  children,
  title,
  ...props
}) => {
  const { container, content, arrow } = tooltipVariants({
    color,
    position,
    rounded,
  });

  return (
    <>
      <div className={container()}>
        <div {...props}>{children}</div>

        <div className={content()}>
          <span className={arrow()}></span>
          {title}
        </div>
      </div>
    </>
  );
};

export default Tooltip;
