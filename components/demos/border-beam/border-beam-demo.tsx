import { BorderBeam } from "@/components/ui/border-beam/border-beam";
import { cnBase } from "tailwind-variants";

export default function BorderBeamDemo() {
  return (
    <div className={cnBase(
      "relative flex h-[500px] w-full flex-col items-center",
      "justify-center overflow-hidden rounded-lg bg-background",
      "md:shadow-xl border border-default-200 dark:border-default-100",
    )}>
      <span className={cnBase(
        "pointer-events-none leading-none text-transparent",
        "bg-gradient-to-b from-black to-gray-300/80",
        "whitespace-pre-wrap bg-clip-text text-center text-8xl font-semibold",
        "dark:from-white dark:to-slate-900/10",
      )}>
        Border Beam
      </span>
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
