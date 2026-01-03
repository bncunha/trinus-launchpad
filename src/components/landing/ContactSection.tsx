import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Headphones } from "lucide-react";

const contactOptions = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Resposta rápida",
    action: "Iniciar conversa",
    href: "https://wa.me/5511999999999",
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "contato@trinus.app",
    action: "Enviar e-mail",
    href: "mailto:contato@trinus.app",
  },
  {
    icon: Headphones,
    title: "Suporte Humano",
    description: "Atendimento personalizado",
    action: "Agendar chamada",
    href: "#",
  },
];

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Precisa de ajuda? <span className="text-accent">Estamos aqui.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Nossa equipe está pronta para te atender.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contactOptions.map((option, index) => (
            <a
              key={index}
              href={option.href}
              className="group p-6 bg-card rounded-xl border border-border text-center hover:shadow-lg hover:border-accent/30 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <option.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {option.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {option.description}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="group-hover:border-accent group-hover:text-accent transition-colors"
              >
                {option.action}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
