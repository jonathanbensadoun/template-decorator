import Image from "next/image";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Le Grand Hôtel",
    description:
      "Reconstitution d'un palace des années 20 pour ce drame historique",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3",
    link: "#",
  },
  {
    title: "Nuit Parisienne",
    description: "Décors authentiques du Paris des années 50",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3",
    link: "#",
  },
  {
    title: "L'Appartement",
    description: "Design contemporain pour ce thriller psychologique",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3",
    link: "#",
  },
  {
    title: "Le Grand Hôtel",
    description:
      "Reconstitution d'un palace des années 20 pour ce drame historique",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3",
    link: "#",
  },
  {
    title: "Nuit Parisienne",
    description: "Décors authentiques du Paris des années 50",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3",
    link: "#",
  },
  {
    title: "L'Appartement",
    description: "Design contemporain pour ce thriller psychologique",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3",
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-16 font-light">
          PROJETS RÉCENTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="fade-in opacity-0 group relative overflow-hidden rounded-lg shadow-lg"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-[400px] transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6">
                <h3 className="text-2xl font-light mb-4">{project.title}</h3>
                <p className="text-center mb-6">{project.description}</p>
                <Button
                  variant="outline"
                  className="bg-black bg-opacity-50 text-white border-white hover:bg-white hover:text-black transition-all backdrop-blur-md"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  Voir le projet
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
