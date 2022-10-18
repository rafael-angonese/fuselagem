import React, { ReactNode } from "react";
import { NormalColorsEnum } from "../../constants/colors";
import { NormalColorsType } from "../../types/colors";
import clsx from "../../utils/clsx";

import styles from "./styles.module.css";

interface LinearProgressProps {
  indeterminate?: boolean;
  percentage?: number;
  className?: string;
  color?: NormalColorsType;
  isLoading?: boolean;
  children?: ReactNode;
}

const LinearProgress: React.FC<LinearProgressProps> = ({
  color = "default",
  indeterminate = false,
  isLoading = true,
  percentage = 100,
  className: classes,
  children,
}) => {
  return (
    <>
      <div
        className={clsx(
          "w-full bg-gray-200 h-1 relative overflow-hidden rounded-full",
          { hidden: !isLoading },
          { [styles.indeterminate]: indeterminate },
          [classes]
        )}
      >
        <div
          className={clsx(
            "h-full progressbar rounded-full",
            { [styles.progressbar]: indeterminate },
            { "absolute top-0": indeterminate },
            {
              ["bg-blue-400 dark:bg-blue-600"]:
                color === NormalColorsEnum.DEFAULT,
              ["bg-purple-400 dark:bg-purple-600"]:
                color === NormalColorsEnum.PRIMARY,
              ["bg-cyan-400 dark:bg-cyan-600"]:
                color === NormalColorsEnum.SECONDARY,
              ["bg-green-400 dark:bg-green-600 "]:
                color === NormalColorsEnum.SUCCESS,
              ["bg-red-400 dark:bg-red-600"]: color === NormalColorsEnum.ERROR,
              ["bg-yellow-400 dark:bg-yellow-600"]:
                color === NormalColorsEnum.WARNING,
            }
          )}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <span className="flex items-center justify-end h-full pr-2 text-xs text-white">
            {children}
          </span>
        </div>
      </div>
    </>
  );
};

export default LinearProgress;
