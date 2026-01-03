import trinusLogo from "@/assets/trinus-logo.png";

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
              href="/termos"
              className="text-background/70 hover:text-background transition-colors"
            >
              Termos de Uso
            </a>
            <a
              href="/privacidade"
              className="text-background/70 hover:text-background transition-colors"
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
