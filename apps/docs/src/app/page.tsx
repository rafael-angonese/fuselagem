import Card from "@/components/Card/Card";
import { Button, InputText } from "fuselagem";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col text-center max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          Prepare-se para concretizar suas ideias criativas.
        </h1>

        <span className="mt-6 text-zinc-500 sm:text-2xl text-xl">
          Crie mundos com letras e números.
        </span>

        <div className="flex justify-center space-x-6 mt-10">
          <Link href={"/docs"}>
            <Button>Get started</Button>
          </Link>

          <InputText
            leftContent={<Search size={20} />}
            placeholder="Quick search"
          />
        </div>

        <div className="mt-10 flex gap-8">
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
}
