import React from "react";
import { NormalColorsEnum } from "../../constants/colors";
import { SizesEnum } from "../../constants/sizes";
import { NormalColorsType } from "../../types/colors";
import { Sizes } from "../../types/sizes";
import clsx from "../../utils/clsx";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: NormalColorsType;
  size?: Sizes;
  ariaLabel?: string;
  outlined?: boolean;
  rounded?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  color = "default",
  size = "md",
  className: classes,
  outlined = false,
  rounded = false,
  ariaLabel = "",
  children,
  ...props
}) => {
  return (
    <>
      <button
        {...props}
        className={clsx(
          " text-white focus:ring-2 focus:outline-none rounded-lg inline-flex items-center",
          {
            ["bg-blue-400 hover:bg-blue-500 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"]:
              color === NormalColorsEnum.DEFAULT && !outlined,
            ["bg-purple-400 hover:bg-purple-500 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"]:
              color === NormalColorsEnum.PRIMARY && !outlined,
            ["bg-cyan-400 hover:bg-cyan-500 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"]:
              color === NormalColorsEnum.SECONDARY && !outlined,
            ["bg-green-400 hover:bg-green-500 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"]:
              color === NormalColorsEnum.SUCCESS && !outlined,
            ["bg-red-400 hover:bg-red-500 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"]:
              color === NormalColorsEnum.ERROR && !outlined,
            ["bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"]:
              color === NormalColorsEnum.WARNING && !outlined,
          },
          {
            ["text-blue-400 hover:text-white border border-blue-400 hover:bg-blue-500 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"]:
              color === NormalColorsEnum.DEFAULT && outlined,
            ["text-purple-400 hover:text-white border border-purple-400 hover:bg-purple-500 focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"]:
              color === NormalColorsEnum.PRIMARY && outlined,
            ["text-cyan-400 hover:text-white border border-cyan-400 hover:bg-cyan-500 focus:ring-cyan-300 dark:border-cyan-300 dark:text-cyan-300 dark:hover:text-white dark:hover:bg-cyan-400 dark:focus:ring-cyan-900"]:
              color === NormalColorsEnum.SECONDARY && outlined,
            ["text-green-400 hover:text-white border border-green-400 hover:bg-green-500 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"]:
              color === NormalColorsEnum.SUCCESS && outlined,
            ["text-red-400 hover:text-white border border-red-400 hover:bg-red-500 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"]:
              color === NormalColorsEnum.ERROR && outlined,
            ["text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"]:
              color === NormalColorsEnum.WARNING && outlined,
          },
          {
            ["p-1.5 text-xs"]: size === SizesEnum.XS,
            ["p-2 tex-sm"]: size === SizesEnum.SM,
            ["p-2.5 text-base"]: size === SizesEnum.MD,
            ["p-3 text-lg"]: size === SizesEnum.LG,
            ["p-3.5 text-xl"]: size === SizesEnum.XL,
          },
          { "rounded-full": rounded },
          [classes]
        )}
      >
        {children}
        <span className="sr-only">{ariaLabel}</span>
      </button>
    </>
  );
};

export default IconButton;
