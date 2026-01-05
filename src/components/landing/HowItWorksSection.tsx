import { UserPlus, Building, PackageCheck, HandCoins } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: UserPlus,
    title: "Crie sua conta",
    description: "Cadastro rápido e gratuito, sem cartão de crédito.",
  },
  {
    number: "2",
    icon: Building,
    title: "Cadastre sua empresa",
    description: "Configure os dados básicos do seu negócio.",
  },
  {
    number: "3",
    icon: PackageCheck,
    title: "Comece a organizar",
    description: "Gerencie estoque e vendas imediatamente.",
  },
  {
    number: "4",
    icon: HandCoins,
    title: "Teste grátis por 15 dias",
    description: "Escolha seu plano pago somente após o período de testes.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Começar é simples
          </h2>
          <p className="text-lg text-muted-foreground">
            Sem instalação. Sem complicação.
          </p>
        </div>

        <div className="relative max-w-8xl mx-auto">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary/50 -translate-y-1/2 rounded-full" />

          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step number circle */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-lg relative">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>

                {/* Number badge */}
                <div className="absolute top-0 right-1/2 translate-x-12 -translate-y-1 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-sm shadow-md z-10">
                  {step.number}
                </div>

                <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
