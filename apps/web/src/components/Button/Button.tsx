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
  outlined?: boolean;
  gradientDuoTone?: GradientDuoToneColorsType;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = "default",
      size = "md",
      outlined = false,
      className: classes,
      gradientDuoTone,
      isDisabled,
      isLoading,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <>
        <button
          ref={ref}
          {...props}
          disabled={isDisabled}
          className={clsx(
            "text-white rounded-lg text-center font-medium focus:outline-none focus:ring-2",
            {
              ["bg-blue-400 hover:bg-blue-500 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"]:
                color === NormalColorsEnum.DEFAULT &&
                !outlined &&
                !gradientDuoTone,
              ["bg-purple-400 hover:bg-purple-500 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"]:
                color === NormalColorsEnum.PRIMARY &&
                !outlined &&
                !gradientDuoTone,
              ["bg-cyan-400 hover:bg-cyan-500 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"]:
                color === NormalColorsEnum.SECONDARY &&
                !outlined &&
                !gradientDuoTone,
              ["bg-green-400 hover:bg-green-500 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"]:
                color === NormalColorsEnum.SUCCESS &&
                !outlined &&
                !gradientDuoTone,
              ["bg-red-400 hover:bg-red-500 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"]:
                color === NormalColorsEnum.ERROR &&
                !outlined &&
                !gradientDuoTone,
              ["bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"]:
                color === NormalColorsEnum.WARNING &&
                !outlined &&
                !gradientDuoTone,
            },
            {
              ["text-blue-400 hover:text-white border border-blue-400 hover:bg-blue-500 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"]:
                color === NormalColorsEnum.DEFAULT &&
                outlined &&
                !gradientDuoTone,
              ["text-purple-400 hover:text-white border border-purple-400 hover:bg-purple-500 focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"]:
                color === NormalColorsEnum.PRIMARY &&
                outlined &&
                !gradientDuoTone,
              ["text-cyan-400 hover:text-white border border-cyan-400 hover:bg-cyan-500 focus:ring-cyan-300 dark:border-cyan-300 dark:text-cyan-300 dark:hover:text-white dark:hover:bg-cyan-400 dark:focus:ring-cyan-900"]:
                color === NormalColorsEnum.SECONDARY &&
                outlined &&
                !gradientDuoTone,
              ["text-green-400 hover:text-white border border-green-400 hover:bg-green-500 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"]:
                color === NormalColorsEnum.SUCCESS &&
                outlined &&
                !gradientDuoTone,
              ["text-red-400 hover:text-white border border-red-400 hover:bg-red-500 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"]:
                color === NormalColorsEnum.ERROR &&
                outlined &&
                !gradientDuoTone,
              ["text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"]:
                color === NormalColorsEnum.WARNING &&
                outlined &&
                !gradientDuoTone,
            },
            {
              ["bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800"]:
                gradientDuoTone === GradientDuoToneColorsEnum.PURPLE_TO_BLUE &&
                !outlined,
              ["bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800"]:
                gradientDuoTone === GradientDuoToneColorsEnum.CYAN_TO_BLUE &&
                !outlined,
              ["bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800"]:
                gradientDuoTone === GradientDuoToneColorsEnum.GREEN_TO_BLUE &&
                !outlined,
              ["bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800"]:
                gradientDuoTone === GradientDuoToneColorsEnum.PURPLE_TO_PINK &&
                !outlined,
              ["bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800"]:
                gradientDuoTone === GradientDuoToneColorsEnum.PINK_TO_ORANGE &&
                !outlined,
              ["bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-lime-200 dark:focus:ring-teal-700"]:
                gradientDuoTone === GradientDuoToneColorsEnum.TEAL_TO_LIME &&
                !outlined,
              ["bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400"]:
                gradientDuoTone === GradientDuoToneColorsEnum.RED_TO_YELLOW &&
                !outlined,
            },
            {
              ["relative inline-flex items-center justify-center p-0.5 overflow-hidden text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-blue-300 dark:focus:ring-blue-800"]:
                gradientDuoTone === GradientDuoToneColorsEnum.PURPLE_TO_BLUE &&
                outlined,
              ["relative inline-flex items-center justify-center p-0.5 overflow-hidden text-gray-900 group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-cyan-200 dark:focus:ring-cyan-800"]:
                gradientDuoTone === GradientDuoToneColorsEnum.CYAN_TO_BLUE &&
                outlined,
              ["relative inline-flex items-center justify-center p-0.5 overflow-hidden text-gray-900 group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-green-200 dark:focus:ring-green-800"]:
                gradientDuoTone === GradientDuoToneColorsEnum.GREEN_TO_BLUE &&
                outlined,
              ["relative inline-flex items-center justify-center p-0.5 overflow-hidden text-gray-900 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-purple-200 dark:focus:ring-purple-800"]:
                gradientDuoTone === GradientDuoToneColorsEnum.PURPLE_TO_PINK &&
                outlined,
              ["relative inline-flex items-center justify-center p-0.5 overflow-hidden text-gray-900 group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-pink-200 dark:focus:ring-pink-800"]:
                gradientDuoTone === GradientDuoToneColorsEnum.PINK_TO_ORANGE &&
                outlined,
              ["relative inline-flex items-center justify-center p-0.5 overflow-hidden text-gray-900 group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 hover:text-white dark:text-white focus:ring-lime-200 dark:focus:ring-lime-800"]:
                gradientDuoTone === GradientDuoToneColorsEnum.TEAL_TO_LIME &&
                outlined,
              ["relative inline-flex items-center justify-center p-0.5 overflow-hidden text-gray-900 group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 hover:text-white dark:text-white focus:ring-red-100 dark:focus:ring-red-400"]:
                gradientDuoTone === GradientDuoToneColorsEnum.RED_TO_YELLOW &&
                outlined,
            },
            { "opacity-50 cursor-not-allowed": isDisabled },
            [classes]
          )}
        >
          <div
            className={clsx(
              {
                "relative transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0":
                  gradientDuoTone && outlined,
              },
              {
                ["py-2 px-3 text-xs"]: size === SizesEnum.XS,
                ["py-2 px-3 text-sm"]: size === SizesEnum.SM,
                ["px-5 py-2.5 text-sm"]: size === SizesEnum.MD,
                ["py-3 px-5 text-base"]: size === SizesEnum.LG,
                ["py-6 px-6 text-base"]: size === SizesEnum.XL,
              }
            )}
          >
            {isLoading && <LoadingIcon />} {children}
          </div>
        </button>
      </>
    );
  }
);

export default Button;
