import { ReactNode } from "react";

import "./styles.css";

interface RootProps {
  children?: ReactNode;
}

function Root({ children }: RootProps) {
  return (
    <>
      <div className="card relative flex w-[400px] rounded-2xl p-1/2 overflow-hidden cursor-pointer">
        <div className="border animate_border overflow-hidden"></div>

        <div className="p-8 w-full shadow-[inset_0px_0px_0px_1px_rgb(255,255,255)] dark:shadow-[inset_0px_0px_0px_1px_rgb(50,50,50)] relative rounded-[inherit] flex flex-col items-center text-center">
          {children}
        </div>
      </div>
    </>
  );
}

interface IconProps {
  children?: ReactNode;
}

function Icon({ children }: IconProps) {
  return (
    <>
      <div className="relative">
        <div className="absolute -inset-1/4 aspect-[1/1] bg-red-500 blur-[140px]"></div>
        <div className="relative w-[84px] aspect-[1/1] bg-white dark:bg-black rounded-[100%] border-[1px] border-gray-500 flex justify-center items-center">
          {children}
        </div>
      </div>
    </>
  );
}

interface TitleProps {
  children?: ReactNode;
}

function Title({ children }: TitleProps) {
  return (
    <>
      <h1 className="mt-8 font-bold">{children}</h1>
    </>
  );
}

interface TextProps {
  children?: ReactNode;
}

function Text({ children }: TextProps) {
  return (
    <>
      <p className="mt-3 text-slate-400">{children}</p>
    </>
  );
}

export const Card = { Root, Icon, Title, Text };
