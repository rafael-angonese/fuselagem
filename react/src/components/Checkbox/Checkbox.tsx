import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import React, { useContext, useId } from "react";
import { NormalColorsEnum } from "../../constants/colors";
import { SizesEnum } from "../../constants/sizes";
import { NormalColorsType } from "../../types/colors";
import { Sizes } from "../../types/sizes";
import clsx from "../../utils/clsx";
import { FormControlContext } from "../Forms/FormControl/FormControl";
import FormLabel from "../Forms/FormLabel/FormLabel";

interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  color?: NormalColorsType;
  size?: Sizes;
}

const Checkbox: React.FC<CheckboxProps> = ({
  color = "default",
  size = "md",
  className: classes,
  disabled,
  children,
  ...props
}) => {
  const context = useContext(FormControlContext);

  const id = context?.id || useId();

  const isDisabled = disabled || context?.isDisabled;

  return (
    <>
      <div className="flex items-center">
        <CheckboxPrimitive.Root
          {...props}
          id={id}
          disabled={isDisabled}
          className={clsx(
            "flex h-5 w-5 items-center justify-center rounded",
            "radix-state-checked:bg-purple-600 radix-state-unchecked:bg-gray-200 dark:radix-state-unchecked:bg-gray-900",
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
          <CheckboxPrimitive.Indicator>
            <Check
              className={clsx("self-center text-white", {
                ["h-2 w-2"]: size === SizesEnum.XS,
                ["h-3 w-3"]: size === SizesEnum.SM,
                ["h-4 w-4"]: size === SizesEnum.MD,
                ["h-5 w-5"]: size === SizesEnum.LG,
                ["h-6 w-6"]: size === SizesEnum.XL,
              })}
            />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

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

export default Checkbox;
