import type { FC } from "react";
import { Depoimentos } from "../components/Depoimentos";
import { Hero } from "../components/Hero";
import { News } from "../components/News";
import { Vagas } from "../components/Vagas";

export const Home: FC = () => {
  return (
    <div>
      <Hero />
      <main id="vagas" className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Vagas />
      </main>
      <Depoimentos />
      <News />
    </div>
  );
};
