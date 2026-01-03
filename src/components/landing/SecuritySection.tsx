import { Shield, FileText, CheckCircle2, Cloud } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Dados Protegidos",
    description: "Criptografia de ponta a ponta",
  },
  {
    icon: FileText,
    title: "LGPD",
    description: "Conformidade total com a lei",
  },
  {
    icon: CheckCircle2,
    title: "Termos Claros",
    description: "Transparência em tudo",
  },
  {
    icon: Cloud,
    title: "Sistema em Nuvem",
    description: "Acesse de qualquer lugar",
  },
];

const SecuritySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {feature.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
