import { Package, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Controle de estoque em tempo real",
    description:
      "Saiba exatamente o que você tem disponível. Acompanhe entradas, saídas e movimentações com precisão.",
    align: "left",
  },
  {
    icon: TrendingUp,
    title: "Gestão de vendas simples",
    description:
      "Registre vendas de forma rápida e acompanhe resultados. Tenha clareza sobre o desempenho do seu negócio.",
    align: "right",
  },
  {
    icon: Shield,
    title: "Acesso por usuário",
    description:
      "Defina permissões para cada colaborador. Cada pessoa vê apenas o que precisa para fazer seu trabalho.",
    align: "left",
  },
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Funcionalidades que fazem a diferença
          </h2>
          <p className="text-lg text-muted-foreground">
            Tudo o que você precisa para organizar e crescer seu negócio.
          </p>
        </div>

        <div className="space-y-16 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                feature.align === "right" ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 animate-fade-in`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                  <feature.icon className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              <div
                className={`text-center ${
                  feature.align === "right" ? "md:text-right" : "md:text-left"
                }`}
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
