import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import React, { ReactNode, useId } from "react";
import { NormalColorsEnum } from "../../constants/colors";
import { SizesEnum } from "../../constants/sizes";
import { NormalColorsType } from "../../types/colors";
import { Sizes } from "../../types/sizes";
import clsx from "../../utils/clsx";
import FormLabel from "../Forms/FormLabel/FormLabel";

interface RadioGroupProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {
  children?: ReactNode;
  color?: NormalColorsType;
  size?: Sizes;
}

const Radio: React.FC<RadioGroupProps> = ({
  size = "md",
  color = "default",
  disabled: isDisabled,
  children,
  ...props
}) => {
  const id = useId();
  return (
    <>
      <div className="flex items-center">
        <RadioGroupPrimitive.Item
          {...props}
          disabled={isDisabled}
          id={id}
          className={clsx(
            "peer relative rounded-full",
            "border border-transparent text-white",
            "radix-state-unchecked:bg-gray-200 dark:radix-state-unchecked:bg-gray-900",
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
              ["h-3 w-3"]: size === SizesEnum.XS,
              ["h-4 w-4"]: size === SizesEnum.SM,
              ["h-5 w-5"]: size === SizesEnum.MD,
              ["h-6 w-6"]: size === SizesEnum.LG,
              ["h-7 w-7"]: size === SizesEnum.XL,
            },
            { "opacity-50 cursor-not-allowed": isDisabled }
          )}
        >
          <RadioGroupPrimitive.Indicator className="absolute inset-0 flex items-center justify-center leading-0">
            <div
              className={clsx("rounded-full bg-white", {
                ["w-1 h-1"]: size === SizesEnum.XS,
                ["w-1.5 h-1.5"]: size === SizesEnum.SM,
                ["w-2 h-2"]: size === SizesEnum.MD,
                ["h-2.5 w-2.5"]: size === SizesEnum.LG,
                ["h-3 w-3"]: size === SizesEnum.XL,
              })}
            ></div>
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        <FormLabel
          htmlFor={id}
          className={clsx(
            "ml-2",
            { "opacity-50 cursor-not-allowed": isDisabled },
            { "cursor-pointer": !isDisabled }
          )}
        >
          {children}
        </FormLabel>
      </div>
    </>
  );
};

export default Radio;
