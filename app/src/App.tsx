import { lazy, Suspense, type FC } from "react";
import { Routes, Route } from "react-router";
import { Layout } from "./components/Layout";

// Regra bundle-dynamic-imports e async-suspense-boundaries:
// Carregamento dinâmico de páginas sob demanda com fallback visual
const Home = lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.Home })),
);

const JobDetail = lazy(() =>
  import("./pages/JobDetail").then((module) => ({ default: module.JobDetail })),
);

const NotFound = lazy(() =>
  import("./pages/NotFound").then((module) => ({ default: module.NotFound })),
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
        <Route
          path="/vagas/:id"
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
              <JobDetail />
            </Suspense>
          }
        />
        <Route
          path="*"
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
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
