import React, { ButtonHTMLAttributes } from "react";
import {
  GradientDuoToneColorsEnum,
  NormalColorsEnum,
} from "../../constants/colors";
import {
  GradientDuoToneColorsType,
  NormalColorsType,
} from "../../types/colors";
import clsx from "../../utils/clsx";
import LoadingIcon from "../Icons/LoadingIcon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: NormalColorsType;
  gradientDuoTone?: GradientDuoToneColorsType;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  color = "default",
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
          "text-white focus:ring-4 font-medium rounded-xl text-sm px-5 py-2.5",
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

            ["text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"]:
              gradientDuoTone === GradientDuoToneColorsEnum.PURPLE_TO_BLUE,
            ["text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"]:
              gradientDuoTone === GradientDuoToneColorsEnum.CYAN_TO_BLUE,
            ["text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"]:
              gradientDuoTone === GradientDuoToneColorsEnum.GREEN_TO_BLUE,
            ["text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"]:
              gradientDuoTone === GradientDuoToneColorsEnum.PURPLE_TO_PINK,
            ["text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"]:
              gradientDuoTone === GradientDuoToneColorsEnum.PINK_TO_ORANGE,
            ["text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"]:
              gradientDuoTone === GradientDuoToneColorsEnum.TEAL_TO_LIME,
            ["text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"]:
              gradientDuoTone === GradientDuoToneColorsEnum.RED_TO_YELLOW,

            ["opacity-50 cursor-not-allowed"]: isDisabled,
          },
          [classes]
        )}
      >
        {isLoading && <LoadingIcon />} {children}
      </button>
    </>
  );
};

export default Button;
