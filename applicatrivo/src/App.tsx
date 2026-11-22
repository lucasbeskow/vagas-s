import { Home } from "./pages/Home";
import { Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import type { FC } from "react";

export const App: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};
