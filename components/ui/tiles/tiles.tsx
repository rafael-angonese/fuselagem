import { motion } from 'framer-motion';
import React from 'react';
import { cnBase } from 'tailwind-variants';

export interface TilesProps {
    className?: string;
    rows?: number;
    cols?: number
}

export const Tiles: React.FC<TilesProps> = ({
    className,
    rows: r,
    cols: c
}) => {
    const rows = new Array(r || 100).fill(1)
    const cols = new Array(c || 10).fill(1)

    return (
        <div className={cnBase('relative z-0 flex w-full h-full justify-center', className)}>
            {rows.map((_, i) => (
                <motion.div
                    key={`row` + i}
                    className={`md:w-12 sm:h-12 w-9 h-9 border-l dark:border-neutral-900 border-neutral-200 relative`}
                >
                    {cols.map((_, j) => (
                        <motion.div
                            whileHover={{
                                backgroundColor: `hsl(var(--secondary))`,
                                transition: { duration: 0 }
                            }}
                            animate={{
                                transition: { duration: 2 }
                            }}
                            key={`col` + j}
                            className="md:w-12 sm:h-12 w-9 h-9 border-r border-t dark:border-neutral-900 border-neutral-200 relative"
                        />
                    ))}
                </motion.div>
            ))}
        </div>
    )
}
