import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3"
          alt="Film set background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-light mb-6">CLAIRE DUBOIS</h1>
        <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
          Décoratrice de Cinéma
        </p>
        <Button
          variant="outline"
          className="text-white border-white hover:bg-white hover:text-black transition-all"
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          Découvrir mes projets
        </Button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </section>
  );
}