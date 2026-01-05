import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { trackEvent } from "@/analytics/gtag";

const benefits = [
  "Gestão completa de estoque",
  "Controle de vendas",
  "Dashboard com visão do negócio",
  "Usuários e permissões",
  "Sistema 100% em nuvem",
  "Suporte humano",
  "Atualizações contínuas",
];

const PricingSection = () => {
  return (
    <section id="preco" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Preço único e transparente
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preço simples, sem surpresas
          </h2>
          <p className="text-lg text-muted-foreground">
            Teste gratuitamente por 15 dias e contrate apenas se fizer sentido
            para o seu negócio.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-xl">
            <div className="absolute -top-32 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-28 left-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                    Plano Trinus
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
                    Um único plano completo para sua empresa
                  </h3>
                </div>

                <div className="rounded-2xl border border-border bg-secondary/40 px-6 py-4 text-center">
                  <div className="text-4xl font-bold text-foreground">R$ 79</div>
                  <div className="text-sm text-muted-foreground">/ mês</div>
                  <div className="mt-2 text-xs font-medium text-primary">
                    Após 15 dias de teste gratuito
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/10">
                      <Check className="h-4 w-4 text-accent" />
                    </span>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center gap-3 text-center">
                <Button variant="accent" size="xl" asChild>
                  <a
                    href="https://erp.trinus.app/cadastro"
                    onClick={() =>
                      trackEvent({
                        event_name: "cta_click",
                        event_category: "pricing",
                        event_action: "click",
                        event_label: "Testar gratis por 15 dias",
                        event_destination: "https://erp.trinus.app/cadastro",
                      })
                    }
                  >
                    Testar grátis por 15 dias
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Sem cartão de crédito • Cancele quando quiser
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
