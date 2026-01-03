import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
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

          {/* Hero Image */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10">
              <img
                src={heroDashboard}
                alt="Dashboard Trinus ERP"
                className="w-full h-auto rounded-2xl shadow-2xl animate-float"
              />
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
