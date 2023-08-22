import { Card } from "@/components/Card/Card";
import { InputText } from "fuselagem";
import { Button } from "@/registry/ui/button";
import {
  Atom,
  Code,
  Copy,
  FileType,
  MoonStar,
  PersonStanding,
  Search,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-4 sm:px-6">
      <div className="flex flex-col text-center max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          Prepare-se para concretizar suas ideias criativas.
        </h1>

        <span className="mt-6 text-zinc-500 sm:text-2xl text-xl">
          Crie mundos com letras e números.
        </span>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-10">
          <Link href={"/docs"} className="w-full sm:w-auto">
            <Button className="w-full">Get started</Button>
          </Link>

          <div className="hidden sm:flex">
            <InputText
              leftContent={<Search size={20} />}
              placeholder="Quick search"
            />
          </div>
        </div>
      </div>

      <div className="mt-56">
        <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
          A experiência que você deseja
        </h1>
        <div className="my-10 flex justify-center flex-wrap gap-8">
          <Card.Root>
            <Card.Icon>
              <Copy size={30} />
            </Card.Icon>
            <Card.Title>Design by copy/paste</Card.Title>
            <Card.Text>
              FuselagemUI NÃO é uma biblioteca de componentes. Escolha o
              componentes que você precisa. Copie e cole o código em seu projeto
              e personalize de acordo com suas necessidades. O código é seu...
            </Card.Text>
          </Card.Root>

          <Card.Root>
            <Card.Icon>
              <MoonStar size={30} />
            </Card.Icon>
            <Card.Title>Light & Dark UI</Card.Title>
            <Card.Text>
              Reconhecimento automático do modo escuro, FuselagemUI altera
              automaticamente o tema quando detecta alterações de propriedade do
              tema HTML. Use modo claro ou escuro, a sua escolha.
            </Card.Text>
          </Card.Root>

          <Card.Root>
            <Card.Icon>
              <PersonStanding size={30} />
            </Card.Icon>
            <Card.Title>Accessible</Card.Title>
            <Card.Text>
              FuselagemUI segue estritamente os padrões WAI-ARIA para todos os
              componentes. Os componentes são construídos sobre o React Aria
              garantindo suporte de acessibilidade excepcional como prioridade
              máxima.
            </Card.Text>
          </Card.Root>

          <Card.Root>
            <Card.Icon>
              <FileType size={30} />
            </Card.Icon>
            <Card.Title>TypeScript based</Card.Title>
            <Card.Text>
              Crie aplicações seguras de tipagem, FuselagemUI tem uma API
              totalmente tipada para minimizar a curva de aprendizado e ajudá-lo
              a criar aplicações.
            </Card.Text>
          </Card.Root>

          <Card.Root>
            <Card.Icon>
              <Code size={30} />
            </Card.Icon>
            <Card.Title>Fast</Card.Title>
            <Card.Text>
              Construído com TailwindCSS, o que significa que não há runtime
              styles, nem classes desnecessárias em seu bundle.
            </Card.Text>
          </Card.Root>

          <Card.Root>
            <Card.Icon>
              <Atom size={30} />
            </Card.Icon>
            <Card.Title>React server components</Card.Title>
            <Card.Text>
              Todos os componentes já incluem a diretiva use client
            </Card.Text>
          </Card.Root>
        </div>
      </div>
    </main>
  );
}
