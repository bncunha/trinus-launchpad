import { Button } from "@/components/ui/button";
import trinusLogo from "@/assets/trinus-logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "@/analytics/gtag";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    const nextOpen = !isMenuOpen;
    trackEvent({
      event_name: "mobile_menu_toggle",
      event_category: "header",
      event_action: "click",
      event_label: nextOpen ? "open" : "close",
      event_location: "mobile",
    });
    setIsMenuOpen(nextOpen);
  };

  const navLinks = [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Para quem", href: "#para-quem" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Preço", href: "#preco" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2"
          onClick={() =>
            trackEvent({
              event_name: "nav_link_click",
              event_category: "header",
              event_action: "click",
              event_label: "logo",
              event_destination: "/",
            })
          }
        >
          <img src={trinusLogo} alt="Trinus ERP" className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() =>
                trackEvent({
                  event_name: "nav_link_click",
                  event_category: "header",
                  event_action: "click",
                  event_label: link.label,
                  event_destination: link.href,
                  event_location: "desktop",
                })
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://erp.trinus.app/login"
              onClick={() =>
                trackEvent({
                  event_name: "cta_click",
                  event_category: "header",
                  event_action: "click",
                  event_label: "Entrar",
                  event_destination: "https://erp.trinus.app/login",
                  event_location: "desktop",
                })
              }
            >
              Entrar
            </a>
          </Button>
          <Button variant="accent" size="sm" asChild>
            <a
              href="https://erp.trinus.app/cadastro"
              onClick={() =>
                trackEvent({
                  event_name: "cta_click",
                  event_category: "header",
                  event_action: "click",
                  event_label: "Criar conta gratuita",
                  event_destination: "https://erp.trinus.app/cadastro",
                  event_location: "desktop",
                })
              }
            >
              Criar conta gratuita
            </a>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://erp.trinus.app/login"
              onClick={() =>
                trackEvent({
                  event_name: "cta_click",
                  event_category: "header",
                  event_action: "click",
                  event_label: "Entrar",
                  event_destination: "https://erp.trinus.app/login",
                  event_location: "mobile",
                })
              }
            >
              Entrar
            </a>
          </Button>
          <Button variant="accent" size="sm" asChild>
            <a
              href="https://erp.trinus.app/cadastro"
              onClick={() =>
                trackEvent({
                  event_name: "cta_click",
                  event_category: "header",
                  event_action: "click",
                  event_label: "Criar conta gratuita",
                  event_destination: "https://erp.trinus.app/cadastro",
                  event_location: "mobile",
                })
              }
            >
              Criar conta
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button className="p-2 text-foreground" onClick={handleMenuToggle}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => {
                  trackEvent({
                    event_name: "nav_link_click",
                    event_category: "header",
                    event_action: "click",
                    event_label: link.label,
                    event_destination: link.href,
                    event_location: "mobile",
                  });
                  setIsMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
