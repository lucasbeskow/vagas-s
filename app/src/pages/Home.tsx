import type { FC } from "react";
import { Hero } from "../components/Hero";
import { Jobs } from "../components/Jobs";
import { Newsletter } from "../components/Newsletter";
import { Testimonials } from "../components/Testimonials";

export const Home: FC = () => {
  return (
    <div>
      <Hero />
      <main id="vagas" className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Jobs />
      </main>
      <Testimonials />
      <Newsletter />
    </div>
  );
};
