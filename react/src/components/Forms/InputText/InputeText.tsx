import {
  forwardRef,
  InputHTMLAttributes,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import clsx from "../../../utils/clsx";
import { FormControlContext } from "../FormControl/FormControl";
import CloseIcon from "../../Icons/CloseIcon";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isClearable?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}

const simulateChangeEvent = (
  el: HTMLInputElement,
  event: React.MouseEvent<HTMLButtonElement>
): React.ChangeEvent<HTMLInputElement> => {
  return {
    ...event,
    target: el,
    currentTarget: el,
  };
};

const InputText = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      isClearable,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      className: classes,
      defaultValue,
      onChange,
      ...props
    },
    ref: React.Ref<HTMLInputElement | null>
  ) => {
    const context = useContext(FormControlContext);

    const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => inputRef.current);

    const [selfValue, setSelfValue] = useState(defaultValue);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelfValue(event.target.value);
      onChange && onChange(event);
    };

    const clearHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();

      setSelfValue("");

      if (!inputRef.current) return;

      const changeEvent = simulateChangeEvent(inputRef.current, event);

      changeEvent.target.value = "";
      onChange && onChange(changeEvent);
      inputRef.current.focus();
    };

    return (
      <>
        <div className="relative">
          {LeftIcon && (
            <div className="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
              {LeftIcon}
            </div>
          )}
          <input
            {...props}
            {...(context && { id: context.id })}
            ref={inputRef}
            onChange={changeHandler}
            type="text"
            className={clsx(
              "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:outline-4 placeholder:text-gray-400 focus:outline-blue-500 block w-full p-2.5",
              {
                "border-red-400 text-red-500 placeholder:text-red-500 focus:ring-red-500 focus:outline-red-500":
                  context && context.isInvalid,
              },
              { "pl-8": LeftIcon },
              [classes]
            )}
          />

          {isClearable && Boolean(selfValue) && (
            <div
              className={clsx(
                "flex absolute inset-y-0 right-0 items-center pr-2",
                {
                  "pr-8": RightIcon,
                }
              )}
            >
              <button
                type="button"
                onClick={clearHandler}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <CloseIcon />
                <span className="sr-only">Clear</span>
              </button>
            </div>
          )}

          {RightIcon && (
            <div className="flex absolute inset-y-0 right-0 items-center pr-2">
              {RightIcon}
            </div>
          )}
        </div>
      </>
    );
  }
);

export default InputText;
