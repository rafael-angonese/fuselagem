import React, { ButtonHTMLAttributes } from "react";
import {
  GradientDuoToneColorsEnum,
  NormalColorsEnum,
} from "../../constants/colors";
import { SizesEnum } from "../../constants/sizes";
import {
  GradientDuoToneColorsType,
  NormalColorsType,
} from "../../types/colors";
import { Sizes } from "../../types/sizes";
import clsx from "../../utils/clsx";
import LoadingIcon from "../Icons/LoadingIcon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: NormalColorsType;
  size?: Sizes;
  gradientDuoTone?: GradientDuoToneColorsType;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  color = "default",
  size = "md",
  className: classes,
  gradientDuoTone,
  isDisabled,
  isLoading,
  children,
  ...props
}) => {
  return (
    <>
      <button
        {...props}
        disabled={isDisabled}
        className={clsx(
          "text-white rounded-lg text-center font-medium focus:ring-2",
          {
            ["bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"]:
              color === NormalColorsEnum.DEFAULT,
            ["bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"]:
              color === NormalColorsEnum.PRIMARY,
            ["bg-cyan-700 hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800"]:
              color === NormalColorsEnum.SECONDARY,
            ["bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"]:
              color === NormalColorsEnum.SUCCESS,
            ["bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"]:
              color === NormalColorsEnum.ERROR,
            ["bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"]:
              color === NormalColorsEnum.WARNING,
          },
          {
            ["bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"]:
              gradientDuoTone === GradientDuoToneColorsEnum.PURPLE_TO_BLUE,
            ["bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"]:
              gradientDuoTone === GradientDuoToneColorsEnum.CYAN_TO_BLUE,
            ["bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"]:
              gradientDuoTone === GradientDuoToneColorsEnum.GREEN_TO_BLUE,
            ["bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"]:
              gradientDuoTone === GradientDuoToneColorsEnum.PURPLE_TO_PINK,
            ["bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"]:
              gradientDuoTone === GradientDuoToneColorsEnum.PINK_TO_ORANGE,
            ["bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700"]:
              gradientDuoTone === GradientDuoToneColorsEnum.TEAL_TO_LIME,
            ["bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"]:
              gradientDuoTone === GradientDuoToneColorsEnum.RED_TO_YELLOW,
          },
          {
            ["py-2 px-3 text-xs"]: size === SizesEnum.XS,
            ["py-2 px-3 text-sm"]: size === SizesEnum.SM,
            ["px-5 py-2.5 text-sm"]: size === SizesEnum.MD,
            ["py-3 px-5 text-base"]: size === SizesEnum.LG,
            ["py-6 px-6 text-base"]: size === SizesEnum.XL,
          },
          { "opacity-50 cursor-not-allowed": isDisabled },
          [classes]
        )}
      >
        {isLoading && <LoadingIcon />} {children}
      </button>
    </>
  );
};

export default Button;
