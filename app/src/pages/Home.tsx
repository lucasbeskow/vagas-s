import type { FC } from "react";
import Depoimentos from "../components/Depoimentos";
import { Hero } from "../components/Hero";
import News from "../components/News";
import Vagas from "../components/Vagas";

export const Home: FC = () => {
  return (
    <div>
      <Hero />
      <main className="conteudo flex flex-col md:flex-row-reverse py-10 px-6 md:px-10 max-w-7xl mx-auto w-full gap-8">
        <Vagas />
      </main>
      <News />
      <Depoimentos />
    </div>
  );
};
