import { Briefcase, Building2, Store, Rocket } from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    title: "MEIs",
    description: "Microempreendedores que buscam organização.",
  },
  {
    icon: Building2,
    title: "Pequenas Empresas",
    description: "Empresas que precisam de controle sem complexidade.",
  },
  {
    icon: Store,
    title: "Lojas Físicas",
    description: "Comércios que querem gerenciar estoque e vendas.",
  },
  {
    icon: Rocket,
    title: "Negócios em Crescimento",
    description: "Empresas prontas para escalar com organização.",
  },
];

const AudienceSection = () => {
  return (
    <section id="para-quem" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ideal para quem precisa de{" "}
            <span className="text-accent">controle sem complicação</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border text-center hover:shadow-lg hover:border-accent/30 transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <audience.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
