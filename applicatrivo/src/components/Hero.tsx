import type { FC } from "react";
import { Button } from "../ui/Button";

export const Hero: FC = () => {
  const handleHeroClick = () => {
    alert("[Alert] cliquei no botao!!!");
    console.log("cliquei no botao!!!");
  };

  return (
    <section className="py-20 md:py-[100px] px-6 md:px-10 text-center flex flex-col items-center justify-center max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-[#111111] leading-tight mb-4">
        As melhores vagas em startups de tecnologia
      </h2>
      <p className="text-base md:text-lg text-[#555555] mb-[32px] max-w-2xl">
        Encontre oportunidades reais em empresas curadas. Sem cadastro, sem
        barreiras.
      </p>
      <Button id="btn-hero" onClick={handleHeroClick}>
        Publicar vaga $299
      </Button>
    </section>
  );
};
