import React, { ReactNode } from "react";

import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";

const baseItemButtonVariants = cva(
  "items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200",
  {
    variants: {
      isActive: {
        true: "!text-white !bg-blue-500 border !border-gray-300 !hover:bg-blue-600 !dark:border-gray-700 !dark:bg-gray-700",
      },
    },
    defaultVariants: {},
  }
);

export interface ItemButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof baseItemButtonVariants> {
  children?: ReactNode;
}

const ItemButton: React.FC<ItemButtonProps> = ({
  isActive = false,
  className: classes,
  children,
  ...props
}) => {
  return (
    <>
      <button
        {...props}
        className={cn(
          baseItemButtonVariants({
            isActive,
          }),
          classes
        )}
      >
        {children}
      </button>
    </>
  );
};

export default ItemButton;
