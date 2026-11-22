import { Outlet } from "react-router";
import { Header } from "./Header";
import Footer from "./Footer";
import type { FC } from "react";

export const Layout: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-[#111111]">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
