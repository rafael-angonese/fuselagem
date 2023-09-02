"use client";
import { AvatarImage as RadixAvatarImage } from "@radix-ui/react-avatar";

import { forwardRef } from "react";
import { tv } from "tailwind-variants";

const imageVariants = tv({
  base: "aspect-square h-full w-full",
});

const AvatarImage = forwardRef<
  React.ElementRef<typeof RadixAvatarImage>,
  React.ComponentPropsWithoutRef<typeof RadixAvatarImage>
>(({ className, ...props }, ref) => (
  <RadixAvatarImage
    ref={ref}
    className={imageVariants({
      className,
    })}
    {...props}
  />
));

AvatarImage.displayName = RadixAvatarImage.displayName;

export { AvatarImage, imageVariants };
