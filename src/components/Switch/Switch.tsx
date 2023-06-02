import * as SwitchPrimitive from "@radix-ui/react-switch";
import React, { useContext } from "react";
import { NormalColorsEnum } from "../../constants/colors";
import { SizesEnum } from "../../constants/sizes";
import { NormalColorsType } from "../../types/colors";
import { Sizes } from "../../types/sizes";
import clsx from "../../utils/clsx";
import { FormControlContext } from "../Forms/FormControl/FormControl";

interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  color?: NormalColorsType;
  size?: Sizes;
}

const Switch: React.FC<SwitchProps> = ({
  color = "default",
  size = "md",
  className: classes,
  disabled,
  children,
  ...props
}) => {
  const context = useContext(FormControlContext);

  const isDisabled = disabled || context?.isDisabled;

  return (
    <>
      <SwitchPrimitive.Root
        {...(context && { id: context.id })}
        {...props}
        disabled={isDisabled}
        className={clsx(
          "group",
          "radix-state-unchecked:bg-gray-200 dark:radix-state-unchecked:bg-gray-800",
          "relative inline-flex flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
          "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
          {
            ["radix-state-checked:bg-blue-400"]:
              color === NormalColorsEnum.DEFAULT,
            ["radix-state-checked:bg-purple-400"]:
              color === NormalColorsEnum.PRIMARY,
            ["radix-state-checked:bg-cyan-400"]:
              color === NormalColorsEnum.SECONDARY,
            ["radix-state-checked:bg-green-400"]:
              color === NormalColorsEnum.SUCCESS,
            ["radix-state-checked:bg-red-400"]:
              color === NormalColorsEnum.ERROR,
            ["radix-state-checked:bg-yellow-400"]:
              color === NormalColorsEnum.WARNING,
          },
          {
            ["h-4 w-9"]: size === SizesEnum.XS,
            ["h-5 w-10"]: size === SizesEnum.SM,
            ["h-6 w-11"]: size === SizesEnum.MD,
            ["h-7 w-12"]: size === SizesEnum.LG,
            ["h-9 w-14"]: size === SizesEnum.XL,
          },
          { "opacity-50 cursor-not-allowed": isDisabled },
          { "cursor-pointer": !isDisabled }
        )}
      >
        <SwitchPrimitive.Thumb
          className={clsx(
            "group-radix-state-checked:translate-x-5",
            "group-radix-state-unchecked:translate-x-0",
            "pointer-events-none inline-block transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out",
            {
              ["h-3 w-3"]: size === SizesEnum.XS,
              ["h-4 w-4"]: size === SizesEnum.SM,
              ["h-5 w-5"]: size === SizesEnum.MD,
              ["h-6 w-6"]: size === SizesEnum.LG,
              ["h-8 w-8"]: size === SizesEnum.XL,
            },
            { "opacity-50 cursor-not-allowed": isDisabled }
          )}
        />
      </SwitchPrimitive.Root>
    </>
  );
};

export default Switch;
