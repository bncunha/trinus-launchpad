import { XCircle, CheckCircle } from "lucide-react";

const problems = [
  "Estoque desorganizado",
  "Vendas anotadas em planilhas ou caderno",
  "Falta de controle do financeiro",
  "Sistemas caros e complicados",
  "Dificuldade para crescer com organização",
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Sua empresa já passou por isso?
          </h2>

          <div className="grid gap-4 text-left max-w-lg mx-auto">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                <span className="text-muted-foreground">{problem}</span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <div className="inline-flex items-center gap-3 p-5 bg-accent/10 rounded-xl border border-accent/20">
              <CheckCircle className="w-7 h-7 text-accent flex-shrink-0" />
              <span className="text-lg font-semibold text-foreground">
                O Trinus foi criado para resolver exatamente esses problemas.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
