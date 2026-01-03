import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import trinusVendas from "@/assets/trinus-vendas.png";
import trinusEstoque from "@/assets/trinus-estoque.png";
import trinusEstoqueLista from "@/assets/trinus-estoque-lista.png";

const images = [
  { src: trinusVendas, alt: "Tela de Vendas do Trinus ERP" },
  { src: trinusEstoque, alt: "Tela de Estoque do Trinus ERP" },
  { src: trinusEstoqueLista, alt: "Lista de Estoques do Trinus ERP" },
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Controle total do seu negócio,{" "}
              <span className="text-primary">em um único sistema.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              O Trinus é um ERP simples e completo para pequenas empresas que
              querem organizar estoque, vendas e gestão sem complicação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="hero" size="xl">
                Criar conta gratuita
              </Button>
              <Button variant="hero-outline" size="xl">
                <MessageCircle className="w-5 h-5" />
                Falar com especialista
              </Button>
            </div>
          </div>

          {/* Hero Image Carousel */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-auto rounded-2xl shadow-2xl transition-opacity duration-700 ${
                    index === currentImage ? "opacity-100" : "opacity-0 absolute inset-0"
                  }`}
                />
              ))}
            </div>
            {/* Image indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImage
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ver imagem ${index + 1}`}
                />
              ))}
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl" />
      </div>
    </section>
  );
};

export default HeroSection;
