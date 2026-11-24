import { useState, type FC, type FormEvent } from "react";
import { Button } from "../ui/Button";

export const Newsletter: FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setError("Por favor, digite seu endereço de e-mail.");
      return;
    }

    // Validação robusta de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setError("Por favor, insira um endereço de e-mail válido.");
      return;
    }

    setError(null);
    setSubscribed(true);
  };

  return (
    <section
      aria-labelledby="newsletter-title"
      className="py-16 sm:py-20 border-t border-[#e2e5e9] bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-mono font-semibold text-[#0047ff] tracking-wide uppercase block mb-2">
          Newsletter Curada
        </span>
        <h2
          id="newsletter-title"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0e1013] tracking-tight mb-3"
        >
          Vagas novas, toda quinta-feira.
        </h2>
        <p className="text-base text-[#5f6774] mb-8 max-w-xl mx-auto font-normal">
          Um resumo direto no seu e-mail com as melhores oportunidades abertas
          na semana e média salarial. Sem spam.
        </p>

        <div className="w-full max-w-md mx-auto">
          {subscribed ? (
            <div
              role="status"
              aria-live="polite"
              className="p-4 bg-[#f1f3f5] border border-[#e2e5e9] rounded-lg text-sm text-[#0e1013]"
            >
              <span className="font-semibold text-[#0047ff]">
                ✓ Inscrição confirmada
              </span>{" "}
              para <strong>{email}</strong>. Você receberá o próximo índice na
              quinta-feira.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col items-center justify-center gap-2.5 w-full"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 w-full">
                <label htmlFor="newsletter-email" className="sr-only">
                  Seu e-mail profissional <span aria-hidden="true">*</span>
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  aria-required="true"
                  aria-invalid={!!error}
                  aria-describedby={error ? "newsletter-error" : undefined}
                  placeholder="seu@email.com"
                  required
                  className={`w-full sm:flex-1 py-2.5 px-3.5 text-sm text-[#0e1013] bg-[#f8f9fa] border rounded-md focus:bg-white focus:outline-2 focus:outline-[#0047ff] focus:border-transparent transition-all placeholder:text-[#5f6774]/70 ${
                    error ? "border-red-500 bg-red-50/20" : "border-[#e2e5e9]"
                  }`}
                />
                <Button
                  type="submit"
                  variant="cobalt"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Assinar índice
                </Button>
              </div>

              {error && (
                <p
                  id="newsletter-error"
                  role="alert"
                  className="text-xs text-red-600 font-medium self-start sm:self-center"
                >
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
