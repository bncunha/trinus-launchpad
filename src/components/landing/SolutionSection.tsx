import { Package, DollarSign, Users, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Gestão de Estoque",
    description: "Controle completo do que entra e sai do seu estoque.",
  },
  {
    icon: DollarSign,
    title: "Gestão de Vendas",
    description: "Registre e acompanhe todas as suas vendas facilmente.",
  },
  {
    icon: Users,
    title: "Usuários e Permissões",
    description: "Cada pessoa vê apenas o que precisa acessar.",
  },
  {
    icon: BarChart3,
    title: "Visão Geral do Negócio",
    description: "Dashboard com os principais indicadores da sua empresa.",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Um ERP pensado para quem quer{" "}
            <span className="text-primary">simplicidade e controle</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            O Trinus centraliza as principais operações do seu negócio em um
            único lugar, com uma interface simples e sem complicação.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
