import type { FC } from "react";
import { Button } from "../ui/Button";

export const Header: FC = () => {
  const handleGoogleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert("não vou!!!");
    console.log("não vou!!!");
  };

  const handlePublishClick = () => {
    alert("Publicar vaga por $299. Formulário de publicação em breve!");
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-10 border-b border-[#e5e5e3] bg-[#fafaf9] sticky top-0 z-40">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111]">
        OpenBoard
      </h1>
      <div className="flex items-center gap-6">
        <a
          id="link-google"
          href="http://google.com"
          onClick={handleGoogleClick}
          className="text-sm md:text-base font-medium text-[#111111] hover:underline cursor-pointer"
        >
          Entrar
        </a>
        <Button onClick={handlePublishClick}>Publicar vaga $299</Button>
      </div>
    </header>
  );
};
