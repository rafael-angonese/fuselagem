import { GridPattern } from "@/components/ui/grid-pattern/grid-pattern";
import { cnBase } from "tailwind-variants";

const GridPatternLinearGradientDemo = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Grid Pattern Linear Gradient
      </p>
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cnBase(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
    </div>
  );
};

export default GridPatternLinearGradientDemo;
