import Image from "next/image";
import { Award, Film, Palette } from "lucide-react";

const achievements = [
  {
    icon: <Film className="w-8 h-8" />,
    count: "50+",
    label: "Films Décorés",
  },
  {
    icon: <Award className="w-8 h-8" />,
    count: "15",
    label: "Prix & Nominations",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    count: "20+",
    label: "Années d'Expérience",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative h-[600px] rounded-lg overflow-hidden fade-in opacity-0">
            <Image
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3"
              alt="Claire Dubois au travail"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-light">À PROPOS</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Passionnée par l'art et le cinéma depuis mon plus jeune âge, j'ai consacré ma carrière à créer des univers uniques pour le grand écran. Chaque projet est une nouvelle aventure, une opportunité de donner vie à des histoires à travers des décors authentiques et minutieusement pensés.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ma démarche artistique s'appuie sur une recherche approfondie et une attention particulière aux détails historiques et culturels, permettant de créer des atmosphères immersives et crédibles.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center fade-in opacity-0"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex justify-center text-neutral-600 mb-4">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl font-semibold mb-2">{achievement.count}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}