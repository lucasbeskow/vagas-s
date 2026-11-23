import type { FC } from "react";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarInitial: string;
  avatarBg: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Encontrei minha vaga atual scrollando num sábado. O salário estava no anúncio e a aplicação levou 2 minutos. Sem testes genéricos de perfil.",
    name: "Lucas Vergara",
    role: "Frontend Engineer · Betha",
    avatarInitial: "LV",
    avatarBg: "bg-[#0e1013]",
  },
  {
    id: "2",
    quote:
      "Contratamos dois engenheiros seniores em menos de uma semana. O perfil dos candidatos que chegam pelo OpenBoard tem um nível técnico muito acima da média.",
    name: "Carolina Ribeiro",
    role: "Head of Talent · Vercel",
    avatarInitial: "CR",
    avatarBg: "bg-[#0047ff]",
  },
  {
    id: "3",
    quote:
      "Interface direta, sem burocracia de ATS corporativo e com empresas de altíssimo nível. É a primeira aba que abro quando busco novos desafios.",
    name: "Marcos Vinícius",
    role: "Product Designer · Nubank",
    avatarInitial: "MV",
    avatarBg: "bg-[#820ad1]",
  },
];

export const Testimonials: FC = () => {
  return (
    <section className="py-16 sm:py-20 border-t border-[#e2e5e9] bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-mono font-semibold text-[#0047ff] tracking-wide uppercase block mb-1">
            Depoimentos
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e1013] tracking-tight">
            Validado por quem contrata e quem constrói.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-6 bg-white border border-[#e2e5e9] rounded-lg shadow-xs hover:border-[#ccd2d9] transition-colors"
            >
              <p className="text-sm text-[#0e1013] leading-relaxed mb-6 font-normal">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#f1f3f5]">
                <div
                  className={`w-9 h-9 rounded-full ${item.avatarBg} text-white font-semibold text-xs flex items-center justify-center shrink-0 shadow-xs`}
                >
                  {item.avatarInitial}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm text-[#0e1013] truncate">
                    {item.name}
                  </p>
                  <span className="text-xs text-[#5f6774] block truncate">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
