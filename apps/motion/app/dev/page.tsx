// "use client"
import { ComponentPreview } from "@/components/component-preview/component-preview";
import { CodeDemo } from "@/components/docs";
import { Hero } from "@/components/marketing/hero";
// import { accordionContent } from '@/content/demos/demos';

export default async function Home() {

  return (
    <main className="container mx-auto max-w-7xl px-6 flex-grow">
      <section className="flex flex-col items-center justify-center">
        <Hero />
        
        <ComponentPreview name="accordion" />



        {/* {<accordionContent.usage />} */}


      </section>
    </main>
  );
}
