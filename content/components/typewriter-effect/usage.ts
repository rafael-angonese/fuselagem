const TypewriterEffect = `import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import { cnBase } from "tailwind-variants";

export interface TypewriterEffectProps {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
  className,
  cursorClassName,
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
 
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);
 
  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={"word-idx"} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={"char-index"}
                  className={cnBase(
                    "dark:text-white text-black opacity-0 hidden",
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cnBase(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cnBase(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};`


const App = `import { TypewriterEffect } from "@/components/ui/typewriter-effect/typewriter-effect";

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
`;

const react = {
  "/App.jsx": App,
  "/TypewriterEffect.jsx": TypewriterEffect,
};

export default {
  ...react,
};
