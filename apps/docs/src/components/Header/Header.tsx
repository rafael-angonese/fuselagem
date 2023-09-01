import DarkModeButton from "@/components/Header/DarkModeButton/DarkModeButton";
import GithubButton from "@/components/Header/GithubButton/GithubButton";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <header className="border-b p-2 border-zinc-300 sticky top-0 left-0 right-0 z-10 bg-slate-50 dark:bg-black">
        <nav className="container mx-auto flex justify-between items-center">
          <Link
            href={"/"}
            className="font-extrabold text-transparent text-xl sm:text-2xl lg:text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          >
            FuselagemUI
          </Link>
          <div className="text-base hidden sm:flex gap-8">
            <Link href={"/docs"}>Docs</Link>
            <Link href={"/docs/components"}>Components</Link>
          </div>
          <div className="text-base items-center gap-3 flex">
            <GithubButton />
            <DarkModeButton />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
