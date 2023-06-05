"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation"; // usePathname is a hook now imported from navigation

const ActiveLink = ({
  children,
  ...rest
}: { children: React.ReactNode } & LinkProps) => {
  const { href } = rest;
  const pathName = usePathname();

  const isActive = pathName === href;
  return (
    <li className="hover:opacity-80 font-normal text-lg">
      <Link {...rest} className={isActive ? "font-bold" : ""}>
        {children}
      </Link>
    </li>
  );
};

export default ActiveLink;
