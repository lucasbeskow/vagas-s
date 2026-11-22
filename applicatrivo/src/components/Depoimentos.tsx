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
      '"Encontrei minha vaga atual scrollando num sábado. Aplicação em dois cliques."',
    name: "Lucas Vergara",
    role: "Frontend engineer - Betha",
    avatarInitial: "LV",
    avatarBg: "bg-[#111111]",
  },
  {
    id: "2",
    quote:
      '"Contratamos dois engenheiros seniores em menos de uma semana através da plataforma."',
    name: "Carolina Ribeiro",
    role: "Head of Talent - Vercel",
    avatarInitial: "CR",
    avatarBg: "bg-[#333333]",
  },
  {
    id: "3",
    quote:
      '"Interface direta, sem burocracia e com empresas de altíssimo nível no ecossistema."',
    name: "Marcos Vinícius",
    role: "Product Designer - Nubank",
    avatarInitial: "MV",
    avatarBg: "bg-[#555555]",
  },
];

export const Depoimentos: FC = () => {
  return (
    <section className="depoimentos flex flex-col items-center py-20 md:py-[100px] px-6 md:px-10 gap-3 border-t border-[#e5e5e3] max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-[#111111]">
        Quem já usa o OpenBoard
      </h2>
      <p className="text-base md:text-lg text-[#555555] max-w-2xl">
        Depoimentos de recrutadores e candidatos que já fecharam vaga por aqui.
      </p>

      <div className="depoimentos__list flex flex-col md:flex-row pt-10 gap-8 w-full text-left">
        {TESTIMONIALS.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between p-6 bg-white border border-[#dddddd] rounded-lg flex-1 shadow-xs hover:border-[#bbbbbb] transition-all"
          >
            <p className="text-sm md:text-base text-[#333333] italic leading-relaxed mb-6">
              {item.quote}
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-[#f0f0ee]">
              <div
                className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-semibold text-xs flex items-center justify-center shrink-0`}
              >
                {item.avatarInitial}
              </div>
              <div>
                <p className="font-bold text-sm text-[#111111]">{item.name}</p>
                <span className="text-xs text-[#777777] block">{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Depoimentos;
