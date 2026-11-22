import { useState, type FC, type FormEvent } from "react";
import { Button } from "../ui/Button";

export const News: FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section className="hero py-20 md:py-[100px] px-6 md:px-10 text-center flex flex-col items-center justify-center max-w-4xl mx-auto border-t border-[#e5e5e3]">
      <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-[#111111] leading-tight mb-4">
        Vagas novas, toda quinta-feira
      </h2>
      <p className="text-base md:text-lg text-[#555555] mb-[32px] max-w-2xl">
        Um resumo curto das melhores vagas em startups direto no seu inbox.
      </p>

      <div className="cadastro w-full max-w-md mx-auto">
        {subscribed ? (
          <div className="p-4 bg-[#e5e5e3] rounded-lg text-sm font-medium text-[#111111] animate-fade-in">
            ✓ Inscrição confirmada para <strong>{email}</strong>! Você receberá
            as melhores vagas na quinta-feira.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@mail.com"
              required
              className="w-full sm:flex-1 py-3 px-5 text-sm text-[#111111] bg-white border border-[#dddddd] rounded-lg focus:outline-hidden focus:border-[#111111] transition-all placeholder:text-[#999999]"
            />
            <Button type="submit">Assinar</Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default News;
