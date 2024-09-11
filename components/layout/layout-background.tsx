"use client";

import { Image } from "@nextui-org/react";
import React from 'react';

export const LayoutBackground: React.FC = () => {
    return (
        <>
            <div
                aria-hidden="true"
                className="fixed hidden dark:md:block dark:opacity-70 -bottom-[40%] -left-[20%] z-0"
            >
                <Image removeWrapper alt="docs left background" src="/gradients/docs-left.png" />
            </div>
            <div
                aria-hidden="true"
                className="fixed hidden dark:md:block dark:opacity-70 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12"
            >
                <Image removeWrapper alt="docs right background" src="/gradients/docs-right.png" />
            </div>

        </>
    )
}
