import Depoimentos from "../components/Depoimentos";
import Hero from "../components/Hero";
import News from "../components/News";
import Vagas from "../components/Vagas";

export const Home = () => {
  return (
    <>
      <Hero />
      <main className="conteudo">
        <Vagas />
      </main>
      <News />
      <Depoimentos />
    </>
  );
};
