import React, { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const skeletonVariants = tv({
  base: "animate-pulse rounded-md bg-gray-200",
  variants: {},
});

type SkeletonVariants = VariantProps<typeof skeletonVariants>;

interface SkeletonProps extends ComponentProps<"div">, SkeletonVariants {}

const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
  return <div className={skeletonVariants({ className })} {...props} />;
};

Skeleton.displayName = "Skeleton";

export { Skeleton, skeletonVariants };
