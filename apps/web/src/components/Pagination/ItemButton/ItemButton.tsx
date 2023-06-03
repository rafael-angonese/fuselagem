import React from "react";
import clsx from "../../../utils/clsx";

interface ItemButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
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
        className={clsx(
          "items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200",
          {
            "!text-white bg-blue-500 border border-gray-300 hover:bg-blue-600 dark:border-gray-700 dark:bg-gray-700":
              isActive,
          },
          [classes]
        )}
      >
        {children}
      </button>
    </>
  );
};

export default ItemButton;
