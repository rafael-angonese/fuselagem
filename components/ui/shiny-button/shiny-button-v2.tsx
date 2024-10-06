import React, { ComponentProps } from "react";
import { cnBase } from "tailwind-variants";

export interface ShinyButtonV2Props extends ComponentProps<'button'> {

}

export const ShinyButtonV2: React.FC<ShinyButtonV2Props> = ({ className, ...props }) => {
  return (
    <button
      className={cnBase("inline-flex h-12 animate-shiny-button items-center justify-center rounded-md border border-slate-200 bg-[linear-gradient(110deg,#fff,45%,#f1f1f1,55%,#fff)] bg-[length:200%_100%] px-6 font-medium text-slate-600 transition-colors focus:outline-none focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-slate-400 focus-visible:ring-2 dark:border-slate-800 dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] dark:text-slate-400 dark:focus:ring-slate-300", className)}
      {...props}
    />
  );
};