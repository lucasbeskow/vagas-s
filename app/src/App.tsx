import { lazy, Suspense, type FC } from "react";
import { Routes, Route } from "react-router";
import { Layout } from "./components/Layout";

// Regra bundle-dynamic-imports e async-suspense-boundaries:
// Carregamento dinâmico de páginas sob demanda com fallback visual
const Home = lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.Home })),
);

export const App: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div
                  aria-busy="true"
                  className="py-20 text-center text-sm text-[#777777]"
                >
                  Carregando conteúdo...
                </div>
              }
            >
              <Home />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
