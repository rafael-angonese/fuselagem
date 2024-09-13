import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Manipulated",
    },
    {
      text: "from",
    },
    {
      text: "above,",
    },
    {
      text: "dancing",
    },
    {
      text: "on",
    },
    {
      text: "a",
    },
    {
      text: "String.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <TypewriterEffect words={words} />
    </div>
  );
}

export default TypewriterEffectDemo;