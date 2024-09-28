import { NumberTicker } from "@/components/ui/number-ticker/number-ticker";

export default function NumberTickerDecimalDemo() {
  return (
    <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
    <NumberTicker value={5.67} decimalPlaces={2} />
  </p>
  );
}

