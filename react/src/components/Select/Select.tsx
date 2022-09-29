import { Listbox } from "@headlessui/react";
import React, { useContext, useState } from "react";
import { NormalColorsType } from "../../types/colors";
import { Sizes } from "../../types/sizes";
import { FormControlContext } from "../Forms/FormControl/FormControl";

import { Transition } from "@headlessui/react";
import { CaretDown, Check } from "phosphor-react";
import { Fragment } from "react";
import clsx from "../../utils/clsx";
import isBlank from "../../utils/isBlank";
import CloseIcon from "../Icons/CloseIcon";
import isPresent from "../../utils/isPresent";

interface SelectProps {
  options: any[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  isClearable?: boolean;
  noOptionsText?: string;
  multiple?: boolean;
  labelKey?: string;
  color?: NormalColorsType;
  size?: Sizes;
}

const Select: React.FC<SelectProps> = ({
  color = "default",
  size = "md",
  className: classes,
  disabled,
  isClearable = true,
  placeholder,
  noOptionsText,
  multiple = false,
  labelKey,
  options = [],
  ...props
}) => {
  const context = useContext(FormControlContext);

  const [selected, setSelected] = useState<any | null>(multiple ? [] : null);
  const isDisabled = context?.isDisabled || disabled;
  const valueIsObject = labelKey ? true : false;

  const clearHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    setSelected(multiple ? [] : null);
  };

  return (
    <>
      <Listbox
        value={selected}
        onChange={setSelected}
        disabled={isDisabled}
        multiple={multiple}
        {...props}
      >
        <div className="relative">
          <Listbox.Button
            className={clsx(
              "relative flex justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:outline-4 placeholder:text-gray-400 focus:outline-blue-500 w-full p-2.5",
              {
                "border-red-500 text-red-500 placeholder:text-red-500 focus:ring-red-500 focus:outline-red-500":
                  context && context.isInvalid,
              },
              { "opacity-50 cursor-not-allowed": isDisabled },
              [classes]
            )}
          >
            {placeholder && isBlank(selected) && (
              <span className="block truncate">{placeholder}</span>
            )}
            <span className="block truncate">
              {!multiple && labelKey && selected && selected[labelKey]}
              {!multiple && !labelKey && selected}
              {multiple &&
                selected
                  .map((option: any) => (labelKey ? option[labelKey] : option))
                  .join(", ")}
            </span>

            <div className="absolute inset-y-0 right-0 flex flex-col justify-center items-center pr-2">
              <div className="flex">
                {isClearable && isPresent(selected) && (
                  <div
                    onClick={clearHandler}
                    className="text-gray-400 mr-1 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <CloseIcon />
                    <span className="sr-only">Clear</span>
                  </div>
                )}
                <span className="pointer-events-none flex items-center pr-2">
                  <CaretDown
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </div>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {labelKey ? option[labelKey] : option}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
                          <Check className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
              {isBlank(options) && (
                <Listbox.Option
                  key="noData"
                  disabled
                  className="relative cursor-default select-none py-2 pl-4 text-gray-900"
                  value="noData"
                >
                  <>
                    <span className="block truncate font-normal">
                      Sem dados
                    </span>
                  </>
                </Listbox.Option>
              )}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  );
};

export default Select;
