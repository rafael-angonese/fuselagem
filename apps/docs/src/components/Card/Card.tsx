import React from "react";

import "./styles.css";
import { MoonStar } from "lucide-react";

const Card: React.FC = () => {
  return (
    <>
      <div className="card relative inline-block rounded-2xl p-1/2 overflow-hidden cursor-pointer">
        <div className="border animate_border"></div>

        <div className="content shadow-[inset_0px_0px_0px_1px_rgb(50,50,50)] relative rounded-[inherit] p-[1rem 0.75rem] min-w-[484px] min-h-[348px] flex flex-col items-center justify-center text-center">
          <div className="relative">
            <div className="absolute -inset-1/3 aspect-[1/1] bg-red-500 blur-[140px]"></div>
            <div className="relative w-[84px] aspect-[1/1] bg-black rounded-[100%] border-[1px] border-gray-500 flex justify-center items-center">
              <MoonStar className="text-white" size={36} />
            </div>
          </div>
          <h1 className="mt-8 font-bold">Light and Dark UI</h1>
          <p className="max-w-[60%] mt-3 text-slate-400">
            Automatic dark mode recognition, FuselagemUI automatically changes
            the theme when detects HTML theme prop changes.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
