import getAcronymName from "@/utils/getAcronymName";
import stringToHslColor from "@/utils/stringToHslColor";
import { VariantProps, tv } from "tailwind-variants";

const avatarVariants = tv({
  base: "object-cover object-center flex justify-center items-center",
  variants: {
    color: {
      primary: "ring-blue-500",
      secondary: "ring-purple-500",
      success: "ring-green-500",
      warning: "ring-yellow-500",
      error: "ring-red-500",
    },
    size: {
      xs: "h-10 w-10",
      sm: "h-12 w-12",
      md: "h-14 w-14",
      lg: "h-16 w-16",
      xl: "h-20 w-20",
    },
    isBordered: {
      true: "ring-2 ring-offset-2 ring-offset-white dark:ring-offset-black",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      rounded: "rounded",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    color: "primary",
    size: "md",
    rounded: "lg",
  },
});

type AvatarVariants = VariantProps<typeof avatarVariants>;

export interface AvatarProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "color">,
    AvatarVariants {
  name?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  color,
  size,
  isBordered,
  rounded,
  name,
  className: classes,
  ...props
}) => {
  if (name) {
    const acronymName = getAcronymName(name).toUpperCase();

    const avatarColor = stringToHslColor(name);

    return (
      <div
        className={avatarVariants({
          color,
          rounded,
          size,
          isBordered,
        })}
        style={{ backgroundColor: avatarColor }}
        {...props}
      >
        <span className="text-white font-bold">{acronymName}</span>
      </div>
    );
  }

  return (
    <img
      className={avatarVariants({
        color,
        rounded,
        size,
        isBordered,
      })}
      {...props}
    />
  );
};

export default Avatar;
