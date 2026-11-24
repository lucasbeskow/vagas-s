import type { FC } from "react";
import { Button } from "../ui/Button";

export const Hero: FC = () => {
  const handlePublishClick = () => {
    alert("Publicar vaga por R$ 299. Formulário de publicação em breve!");
  };

  return (
    <section className="pt-14 pb-12 sm:pt-20 sm:pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#e2e5e9]">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0e1013] tracking-tight leading-[1.08] mb-6">
          Oportunidades em startups de alto impacto.
        </h1>

        <p className="text-lg sm:text-xl text-[#5f6774] leading-relaxed mb-8 max-w-2xl font-normal">
          Vagas curadas em engenharia, design e gestão. Faixa salarial visível,
          sem filtros opacos e contato direto com quem constrói o produto.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            id="btn-hero"
            size="md"
            variant="primary"
            onClick={handlePublishClick}
          >
            Publicar vaga por R$ 299
          </Button>
          <a
            href="#vagas"
            className="inline-flex items-center justify-center font-medium rounded-md text-sm px-4 py-2.5 text-[#5f6774] hover:text-[#0e1013] hover:bg-[#e2e5e9]/50 transition-colors"
          >
            Explorar vagas abertas ↓
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-10 mt-10 border-t border-[#e2e5e9]/70 text-xs text-[#5f6774]">
        <div>
          <span className="block font-semibold text-[#0e1013] text-sm mb-0.5">
            100% Remoto & Híbrido
          </span>
          Sem barreiras geográficas
        </div>
        <div>
          <span className="block font-semibold text-[#0e1013] text-sm mb-0.5">
            Salário antes da inscrição
          </span>
          Zero processos às cegas
        </div>
        <div className="col-span-2 sm:col-span-1">
          <span className="block font-semibold text-[#0e1013] text-sm mb-0.5">
            Aplicação em 2 cliques
          </span>
          Direto com a liderança técnica
        </div>
      </div>
    </section>
  );
};
