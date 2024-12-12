"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-16 font-light">
          CONTACT
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-neutral-600" />
              <p>claire.dubois@cinema.fr</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-neutral-600" />
              <p>+33 6 xx xx xx xx </p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-neutral-600" />
              <p>Paris, France</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input placeholder="Nom" required className="bg-white" />
            <Input
              type="email"
              placeholder="Email"
              required
              className="bg-white"
            />
            <Textarea
              placeholder="Message"
              required
              className="min-h-[150px] bg-white"
            />
            <Button type="submit" className="w-full">
              Envoyer
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
