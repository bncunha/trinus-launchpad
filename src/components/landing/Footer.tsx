import trinusLogo from "@/assets/trinus-logo.png";
import { trackEvent } from "@/analytics/gtag";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src={trinusLogo}
              alt="Trinus ERP"
              className="h-10 w-auto brightness-0 invert"
            />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href="https://erp.trinus.app/termos"
              className="text-background/70 hover:text-background transition-colors"
              onClick={() =>
                trackEvent({
                  event_name: "footer_link_click",
                  event_category: "footer",
                  event_action: "click",
                  event_label: "Termos de Uso",
                  event_destination: "https://erp.trinus.app/termos",
                })
              }
            >
              Termos de Uso
            </a>
            <a
              href="https://erp.trinus.app/privacidade"
              className="text-background/70 hover:text-background transition-colors"
              onClick={() =>
                trackEvent({
                  event_name: "footer_link_click",
                  event_category: "footer",
                  event_action: "click",
                  event_label: "Politica de Privacidade",
                  event_destination: "https://erp.trinus.app/privacidade",
                })
              }
            >
              Política de Privacidade
            </a>
          </nav>

          <p className="text-sm text-background/60">
            © {currentYear} Trinus ERP – Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
