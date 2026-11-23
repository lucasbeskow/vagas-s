import type { FC, MouseEvent } from "react";
import { Button } from "../ui/Button";

export const Header: FC = () => {
  const handleLoginClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert("Módulo de autenticação em desenvolvimento.");
  };

  const handlePublishClick = () => {
    alert("Publicar vaga por R$ 299. Formulário de publicação em breve!");
  };

  return (
    <header className="sticky top-0 z-40 bg-[#f8f9fa]/90 backdrop-blur-md border-b border-[#e2e5e9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-[#0e1013] hover:opacity-90"
          >
            <span className="w-7 h-7 rounded bg-[#0e1013] text-white flex items-center justify-center text-xs font-mono font-bold tracking-normal">
              OB
            </span>
            <span>OpenBoard</span>
          </a>

          <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-[#e2e5e9] text-xs font-medium text-[#5f6774]">
            <span aria-hidden="true" className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Índice aberto</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            id="link-entrar"
            href="#login"
            onClick={handleLoginClick}
            className="text-sm font-medium text-[#5f6774] hover:text-[#0e1013] transition-colors cursor-pointer"
          >
            Entrar
          </a>
          <Button
            size="sm"
            variant="cobalt"
            onClick={handlePublishClick}
            className="font-medium"
          >
            Publicar vaga R$ 299
          </Button>
        </div>
      </div>
    </header>
  );
};
