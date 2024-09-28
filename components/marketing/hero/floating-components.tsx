import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Image,
    Pagination,
    Spinner,
    Switch
} from "@nextui-org/react";
import { MoonFilledIcon, SunFilledIcon } from "@nextui-org/shared-icons";
import { useTheme } from "next-themes";
import NextImage from "next/image";

import { UserTwitterCard } from "@/components/examples/user-twitter-card";
import { AnimatedCursor } from "@/components/ui/animated-cursor/animated-cursor";
import AnimatedShinyText from "@/components/ui/animated-shiny-text/animated-shiny-text";
import { BorderBeam } from "@/components/ui/border-beam/border-beam";
import { ShineBorder } from "@/components/ui/shine-border/shine-border";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { useMediaQuery } from "@/hooks/use-media-query";
import { PlaneTakeoff } from "lucide-react";

export const FloatingComponents: React.FC<{}> = () => {
  const { theme, setTheme } = useTheme();

  const isMounted = useIsMounted();
  const isSelected = theme === "dark" && isMounted;

  const isTablet = useMediaQuery(1024);

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="hidden lg:flex flex-col relative z-20 w-1/2">
      <>
        <Switch
          classNames={{
            base: "absolute -top-[220px] -right-[40px] animate-[levitate_13s_ease_infinite_1s_reverse]",
            wrapper: "shadow-sm",
            startContent: "text-white",
          }}
          endContent={<MoonFilledIcon />}
          isSelected={isSelected}
          size="lg"
          startContent={<SunFilledIcon />}
          onChange={onChange}
        />

        <div className="absolute -top-[130px] -right-[120px] animate-[levitate_10s_ease_infinite]">
          <ShineBorder
            className="text-center"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            Fuselagem UI
          </ShineBorder>
        </div>

        <Card
          isFooterBlurred
          className="absolute p-1 -top-[260px] right-[100px] animate-[levitate_12s_ease_infinite_1s] z-0 max-w-fit"
        >
          <Image
            alt="Professional camera"
            as={NextImage}
            className="object-cover"
            height={180}
            src="/images/hero-card.webp"
            width={120}
          />
          <CardFooter className="before:bg-black/10 border-white/20 border-1 overflow-hidden justify-between py-2 absolute before:rounded-xl rounded-xl bottom-1 w-[calc(100%_-_8px)] shadow-lg z-10">
            <p className="text-xs font-semibold text-white/80">Camera</p>
            <p className="text-xs font-semibold text-white/80">$525</p>
          </CardFooter>

          <BorderBeam size={100} duration={6} delay={9} />
        </Card>

        <div className="absolute left-[260px] -top-[240px] h-10">
          <AnimatedCursor text="Rafa" />
        </div>

        <UserTwitterCard className="absolute left-[80px] -top-[80px] animate-[levitate_16s_ease_infinite] border-none" />

        <Card
          className="absolute right-[110px] -top-[60px] animate-[levitate_18s_ease_infinite] z-10 max-w-fit border-none"
          shadow="lg"
        >
          <CardBody>
            <PlaneTakeoff size={60} />
          </CardBody>
        </Card>

        <div className="absolute z-10 -top-[40px] -right-[230px] animate-[levitate_14s_ease_infinite_1s]">
          <Pagination
            isCompact
            showControls
            showShadow
            classNames={{
              base: "rounded-xl",
            }}
            initialPage={6}
            total={10}
          />
        </div>

        <div className="absolute left-[40px] top-[140px] max-w-fit animate-[levitate_14s_ease_infinite_0.5s]">
          <Button variant="bordered" className="dark:bg-neutral-900">
            <AnimatedShinyText shimmerWidth={700} className="text-default-400/70 dark:text-default-400/70 bg-gradient-to-r from-transparent !via-pink-500 !dark:via-pink-500 via-50% to-transparent">
              ✨ Developers love Fuselagem UI
            </AnimatedShinyText>
          </Button>
        </div>

        <Card
          className="absolute right-[10px] top-[30px] animate-[levitate_16s_ease_infinite] z-10 max-w-fit border-none"
          shadow="lg"
        >
          <CardBody>
            <Spinner color="secondary" size="lg" />
          </CardBody>
        </Card>

        <Card
          isFooterBlurred
          className="absolute right-[60px] top-[100px] animate-[levitate_12s_ease_infinite_1s] z-0 max-w-fit"
        >
          <Image
            alt="Woman listing to music"
            as={NextImage}
            className="object-cover"
            height={200}
            src="/images/hero-card.webp"
            width={200}
          />

          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button
              className="text-tiny text-white bg-black/20"
              color="default"
              radius="lg"
              size="sm"
              variant="flat"
            >
              Notify me
            </Button>
          </CardFooter>
        </Card>
      </>
    </div>
  );
};
