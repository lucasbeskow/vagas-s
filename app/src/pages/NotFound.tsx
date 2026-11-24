import { type FC } from "react";
import { Link } from "react-router";
import { Button } from "../ui/Button";

export const NotFound: FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div
          aria-hidden="true"
          className="w-20 h-20 rounded-full bg-[#f1f3f5] text-[#5f6774] flex items-center justify-center mx-auto mb-6 text-5xl font-bold"
        >
          404
        </div>
        <h1 className="text-3xl font-bold text-[#0e1013] mb-3">
          Página não encontrada
        </h1>
        <p className="text-base text-[#5f6774] mb-8">
          A página que você está procurando não existe ou foi movida para outro endereço.
        </p>
        <Link to="/">
          <Button variant="cobalt" size="lg">
            ← Voltar para a página inicial
          </Button>
        </Link>
      </div>
    </div>
  );
};
