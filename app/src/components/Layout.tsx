import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import type { FC } from "react";

export const Layout: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-[#0e1013]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0047ff] focus:text-white focus:rounded-md focus:shadow-md focus:outline-none"
      >
        Pular para o conteúdo principal
      </a>
      <Header />
      <div id="main-content" className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
