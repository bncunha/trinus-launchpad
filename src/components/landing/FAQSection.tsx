import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O Trinus ERP é gratuito?",
    answer:
      "Sim! Oferecemos um período de teste gratuito para você conhecer todas as funcionalidades do sistema. Após o período de teste, você pode escolher o plano que melhor se adequa ao seu negócio.",
  },
  {
    question: "O que acontece após o período de teste?",
    answer:
      "Você poderá usar o Trinus gratuitamente por 15 dias. Depois, escolherá um dos nossos planos pagos para continuar com acesso ao sistema. Não precisa de cartão de crédito para começar.",
  },
  {
    question: "Preciso instalar algum software?",
    answer:
      "Não. O Trinus é 100% em nuvem, então você acessa pelo navegador de qualquer dispositivo, seja computador, tablet ou celular. Não precisa instalar nada.",
  },
  {
    question: "Quantos usuários posso cadastrar?",
    answer:
      "A quantidade de usuários depende do plano escolhido. Todos os planos permitem cadastrar múltiplos usuários com diferentes níveis de permissão.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "Absolutamente. Utilizamos criptografia de ponta a ponta, backups automáticos diários e estamos em conformidade com a LGPD. Seus dados são armazenados em servidores seguros na nuvem.",
  },
  {
    question: "O sistema emite nota fiscal?",
    answer:
      "O Trinus foca na gestão de estoque, vendas e controle do negócio. Para emissão de notas fiscais, recomendamos integrações com sistemas especializados.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Oferecemos suporte humano via WhatsApp e e-mail. Nossa equipe está pronta para ajudar você a tirar o máximo do sistema.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim, você pode cancelar sua assinatura a qualquer momento, sem multas ou taxas de cancelamento. Seus dados ficam disponíveis para exportação.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o Trinus ERP
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
