import { ShineBorder } from "@/components/ui/shine-border/shine-border";

export default function ShineBorderButtonDemo() {
  return (
    <ShineBorder
      className="text-center min-w-[300px] min-h-[60px] text-2xl font-bold capitalize"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      Shine Border
    </ShineBorder>
  );
}
