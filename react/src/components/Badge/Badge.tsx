import React from "react";
import { NormalColorsEnum } from "../../constants/colors";
import { SizesEnum } from "../../constants/sizes";
import { NormalColorsType } from "../../types/colors";
import { Sizes } from "../../types/sizes";
import clsx from "../../utils/clsx";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: NormalColorsType;
  size?: Sizes;
}

const Badge: React.FC<BadgeProps> = ({
  color = "default",
  size = "md",
  className: classes,
  children,
  ...props
}) => {
  return (
    <>
      <span
        {...props}
        className={clsx(
          " text-white text-xs font-semibold rounded-full",
          {
            ["bg-blue-400"]: color === NormalColorsEnum.DEFAULT,
            ["bg-purple-400"]: color === NormalColorsEnum.PRIMARY,
            ["bg-cyan-400"]: color === NormalColorsEnum.SECONDARY,
            ["bg-green-400"]: color === NormalColorsEnum.SUCCESS,
            ["bg-red-400"]: color === NormalColorsEnum.ERROR,
            ["bg-yellow-400"]: color === NormalColorsEnum.WARNING,
          },
          {
            ["px-2 py-0.2"]: size === SizesEnum.XS,
            ["px-2.5 py-0.5"]: size === SizesEnum.SM,
            ["px-3 py-1"]: size === SizesEnum.MD,
            ["px-3.5 py-1.5"]: size === SizesEnum.LG,
            ["px-4 py-2"]: size === SizesEnum.XL,
          },
          [classes]
        )}
      >
        {children}
      </span>
    </>
  );
};

export default Badge;
