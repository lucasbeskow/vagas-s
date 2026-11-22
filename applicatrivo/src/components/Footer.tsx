import type { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center gap-4 py-4 px-6 md:px-10 border-t border-[#e5e5e3] text-sm text-[#777777]">
      <p>
        <strong className="text-[#111111]">OpenBoard</strong> 2026 - Todos os
        direitos reservados
      </p>

      <nav className="flex flex-wrap items-center gap-6">
        <a href="#link-google" className="hover:text-[#111111] hover:underline">
          Entrar
        </a>
        <a href="#btn-hero" className="hover:text-[#111111] hover:underline">
          Publicar vaga
        </a>
        <a href="#" className="hover:text-[#111111] hover:underline">
          Sobre
        </a>
        <a href="#" className="hover:text-[#111111] hover:underline">
          Privacidade
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
