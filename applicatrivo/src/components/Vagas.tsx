import { useState, type FC } from "react";

export interface Job {
  id: string;
  company: string;
  avatarText: string;
  avatarBg?: string;
  title: string;
  salary: string;
  location: string;
  timeAgo: string;
  tipo: "efetivo" | "estagio" | "temp";
  area: "eng" | "design" | "gestao";
}

const INITIAL_JOBS: Job[] = [
  {
    id: "1",
    company: "Vercel",
    avatarText: "V",
    title: "Full-stack Engineer",
    salary: "R$ 20k-30k",
    location: "Remoto",
    timeAgo: "4h",
    tipo: "efetivo",
    area: "eng",
  },
  {
    id: "2",
    company: "Nubank",
    avatarText: "N",
    avatarBg: "bg-[#820ad1]",
    title: "Senior Product Designer",
    salary: "R$ 16k-24k",
    location: "Remoto",
    timeAgo: "2h",
    tipo: "efetivo",
    area: "design",
  },
  {
    id: "3",
    company: "Betha Sistemas",
    avatarText: "B",
    avatarBg: "bg-[#0072ce]",
    title: "Frontend Engineer",
    salary: "R$ 9k-14k",
    location: "Remoto",
    timeAgo: "1d",
    tipo: "efetivo",
    area: "eng",
  },
  {
    id: "4",
    company: "Linear",
    avatarText: "L",
    avatarBg: "bg-[#5e6ad2]",
    title: "Engineering Manager",
    salary: "R$ 32k-42k",
    location: "Remoto",
    timeAgo: "5h",
    tipo: "efetivo",
    area: "gestao",
  },
  {
    id: "5",
    company: "Rocketseat",
    avatarText: "R",
    avatarBg: "bg-[#8257e5]",
    title: "Estágio em Desenvolvimento Web",
    salary: "R$ 2.5k",
    location: "Remoto",
    timeAgo: "6h",
    tipo: "estagio",
    area: "eng",
  },
  {
    id: "6",
    company: "QuintoAndar",
    avatarText: "Q",
    avatarBg: "bg-[#003bff]",
    title: "Design System Intern",
    salary: "R$ 3k",
    location: "Remoto",
    timeAgo: "1d",
    tipo: "estagio",
    area: "design",
  },
  {
    id: "7",
    company: "Brex",
    avatarText: "B",
    avatarBg: "bg-[#ff4747]",
    title: "Product Operations Lead",
    salary: "R$ 15k",
    location: "Remoto",
    timeAgo: "2d",
    tipo: "temp",
    area: "gestao",
  },
];

export const Vagas: FC = () => {
  const [selectedTipos, setSelectedTipos] = useState<string[]>([]);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const handleTipoChange = (value: string) => {
    setSelectedTipos((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleAreaChange = (value: string) => {
    setSelectedAreas((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const clearFilters = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedTipos([]);
    setSelectedAreas([]);
  };

  const handleApply = (e: React.MouseEvent, job: Job) => {
    e.preventDefault();
    alert(`Candidatura iniciada para a vaga ${job.title} na ${job.company}!`);
  };

  const filteredJobs = INITIAL_JOBS.filter((job) => {
    const matchesTipo =
      selectedTipos.length === 0 || selectedTipos.includes(job.tipo);
    const matchesArea =
      selectedAreas.length === 0 || selectedAreas.includes(job.area);
    return matchesTipo && matchesArea;
  });

  return (
    <>
      <section className="vagas w-full md:pl-10">
        <div className="vagas__header flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-2">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111111]">
            Últimas Vagas
          </h2>
          <span className="text-sm text-[#777777]">
            {filteredJobs.length} {filteredJobs.length === 1 ? "vaga" : "vagas"}{" "}
            - Atualizado agora
          </span>
        </div>

        {filteredJobs.length === 0 ? (
          <div className="bg-white border border-[#dddddd] rounded-lg p-10 text-center">
            <p className="text-lg text-[#555555] mb-4">
              Nenhuma vaga encontrada com os filtros selecionados.
            </p>
            <button
              onClick={clearFilters}
              className="text-sm font-semibold underline text-[#111111] cursor-pointer"
            >
              Limpar filtros
            </button>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="vagas__card flex flex-col md:flex-row items-start md:items-center justify-between w-full p-4 my-2 text-[#999999] bg-white border border-[#dddddd] rounded-lg hover:border-[#bbbbbb] transition-all shadow-xs"
            >
              <div
                className={`vagas__avatar flex items-center justify-center w-[60px] h-[60px] m-2 shrink-0 ${
                  job.avatarBg || "bg-[#333333]"
                } text-white font-bold text-2xl rounded`}
              >
                {job.avatarText}
              </div>

              <div className="vagas__body w-full pl-2.5 pb-10 md:pb-0 md:pl-10 flex-1">
                <small className="text-xs uppercase tracking-wider text-[#777777] font-semibold block mb-1">
                  {job.company}
                </small>
                <p className="vagas__title text-2xl md:text-[32px] font-semibold text-[#333333] pb-4 leading-tight">
                  {job.title}
                </p>
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="vagas__badge px-2 py-1 text-xs font-medium text-[#444444] bg-[#e5e5e3] rounded">
                    {job.salary}
                  </span>
                  <span className="vagas__badge vagas__badge--highlight px-2 py-1 text-xs font-medium text-[#444444] bg-[#e5e5e3] border border-[#999999] rounded">
                    {job.location}
                  </span>
                </div>
              </div>

              <div className="vagas__actions w-full md:w-[200px] shrink-0 p-2.5 md:p-0 flex flex-row md:flex-col justify-between md:items-end gap-2 border-t md:border-t-0 border-[#e5e5e3]">
                <span className="text-xs text-[#999999]">{job.timeAgo}</span>
                <a
                  href="#"
                  onClick={(e) => handleApply(e, job)}
                  className="text-sm font-semibold text-[#111111] hover:underline cursor-pointer"
                >
                  Candidatar-se
                </a>
              </div>
            </div>
          ))
        )}
      </section>

      <aside className="filtros hidden md:block w-[220px] shrink-0">
        <div className="filtros__header flex justify-between items-center pb-4 mb-4 border-b border-[#e5e5e3]">
          <h3 className="text-base font-bold text-[#111111]">Filtros</h3>
          <a
            href="#"
            onClick={clearFilters}
            className="text-xs text-[#777777] hover:text-[#111111] underline cursor-pointer"
          >
            limpar
          </a>
        </div>

        <div className="filtros__itens flex flex-col gap-3 pb-5">
          <p className="text-xs font-bold uppercase tracking-wider text-[#111111] my-2">
            Tipo de vaga
          </p>
          <label
            htmlFor="check_efetivo"
            className="flex items-center gap-2.5 text-sm text-[#444444] hover:text-[#111111] cursor-pointer select-none"
          >
            <input
              type="checkbox"
              name="check_efetivo"
              id="check_efetivo"
              checked={selectedTipos.includes("efetivo")}
              onChange={() => handleTipoChange("efetivo")}
              className="w-4 h-4 accent-[#111111] rounded cursor-pointer"
            />{" "}
            Efetivo
          </label>
          <label
            htmlFor="check_estagio"
            className="flex items-center gap-2.5 text-sm text-[#444444] hover:text-[#111111] cursor-pointer select-none"
          >
            <input
              type="checkbox"
              name="check_estagio"
              id="check_estagio"
              checked={selectedTipos.includes("estagio")}
              onChange={() => handleTipoChange("estagio")}
              className="w-4 h-4 accent-[#111111] rounded cursor-pointer"
            />{" "}
            Estágio
          </label>
          <label
            htmlFor="check_temp"
            className="flex items-center gap-2.5 text-sm text-[#444444] hover:text-[#111111] cursor-pointer select-none"
          >
            <input
              type="checkbox"
              name="check_temp"
              id="check_temp"
              checked={selectedTipos.includes("temp")}
              onChange={() => handleTipoChange("temp")}
              className="w-4 h-4 accent-[#111111] rounded cursor-pointer"
            />{" "}
            Temporário
          </label>
        </div>

        <div className="filtros__itens flex flex-col gap-3 pb-5">
          <p className="text-xs font-bold uppercase tracking-wider text-[#111111] my-2">
            Área
          </p>
          <label
            htmlFor="check_eng"
            className="flex items-center gap-2.5 text-sm text-[#444444] hover:text-[#111111] cursor-pointer select-none"
          >
            <input
              type="checkbox"
              name="check_eng"
              id="check_eng"
              checked={selectedAreas.includes("eng")}
              onChange={() => handleAreaChange("eng")}
              className="w-4 h-4 accent-[#111111] rounded cursor-pointer"
            />{" "}
            Engenharia
          </label>
          <label
            htmlFor="check_design"
            className="flex items-center gap-2.5 text-sm text-[#444444] hover:text-[#111111] cursor-pointer select-none"
          >
            <input
              type="checkbox"
              name="check_design"
              id="check_design"
              checked={selectedAreas.includes("design")}
              onChange={() => handleAreaChange("design")}
              className="w-4 h-4 accent-[#111111] rounded cursor-pointer"
            />{" "}
            Design
          </label>
          <label
            htmlFor="check_gestao"
            className="flex items-center gap-2.5 text-sm text-[#444444] hover:text-[#111111] cursor-pointer select-none"
          >
            <input
              type="checkbox"
              name="check_gestao"
              id="check_gestao"
              checked={selectedAreas.includes("gestao")}
              onChange={() => handleAreaChange("gestao")}
              className="w-4 h-4 accent-[#111111] rounded cursor-pointer"
            />{" "}
            Gestão
          </label>
        </div>
      </aside>
    </>
  );
};

export default Vagas;
