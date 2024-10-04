
import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from 'react';
import { cnBase } from "tailwind-variants";

export interface NumberTickerProps {
    value: number;
    direction?: "up" | "down";
    className?: string;
    delay?: number; // delay in s
    decimalPlaces?: number;
}

export const NumberTicker: React.FC<NumberTickerProps> = ({
    value,
    direction = "up",
    delay = 0,
    className,
    decimalPlaces = 0,
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "0px" });

    useEffect(() => {
        isInView &&
            setTimeout(() => {
                motionValue.set(direction === "down" ? 0 : value);
            }, delay * 1000);
    }, [motionValue, isInView, delay, value, direction]);

    useEffect(
        () =>
            springValue.on("change", (latest) => {
                if (ref.current) {
                    ref.current.textContent = Intl.NumberFormat("en-US", {
                        minimumFractionDigits: decimalPlaces,
                        maximumFractionDigits: decimalPlaces,
                    }).format(Number(latest.toFixed(decimalPlaces)));
                }
            }),
        [springValue, decimalPlaces],
    );

    return (
        <span
            className={cnBase(
                "inline-block tabular-nums text-black dark:text-white tracking-wider",
                className,
            )}
            ref={ref}
        />
    );
}
