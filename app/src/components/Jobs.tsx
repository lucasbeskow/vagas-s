import { useState, useTransition, type FC } from "react";
import { Link } from "react-router";
import { Button } from "../ui/Button";

export interface Job {
  id: string;
  company: string;
  avatarText: string;
  avatarBg?: string;
  title: string;
  salary: string;
  location: string;
  timeAgo: string;
  type: "full-time" | "internship" | "contract";
  area: "engineering" | "design" | "management";
}

export type JobType = Job["type"];
export type JobArea = Job["area"];

const TYPE_OPTIONS: { id: JobType; label: string }[] = [
  { id: "full-time", label: "Efetivo" },
  { id: "internship", label: "Estágio" },
  { id: "contract", label: "Temporário" },
];

const AREA_OPTIONS: { id: JobArea; label: string }[] = [
  { id: "engineering", label: "Engenharia" },
  { id: "design", label: "Design" },
  { id: "management", label: "Gestão" },
];

const TYPE_LABELS: Record<JobType, string> = {
  "full-time": "Efetivo",
  "internship": "Estágio",
  "contract": "Temporário",
};

const INITIAL_JOBS: Job[] = [
  {
    id: "1",
    company: "Vercel",
    avatarText: "V",
    avatarBg: "bg-[#0e1013]",
    title: "Full-stack Engineer",
    salary: "R$ 20k - 30k",
    location: "Remoto (Brasil)",
    timeAgo: "4h atrás",
    type: "full-time",
    area: "engineering",
  },
  {
    id: "2",
    company: "Nubank",
    avatarText: "N",
    avatarBg: "bg-[#820ad1]",
    title: "Senior Product Designer",
    salary: "R$ 16k - 24k",
    location: "Remoto (América Latina)",
    timeAgo: "2h atrás",
    type: "full-time",
    area: "design",
  },
  {
    id: "3",
    company: "Betha Sistemas",
    avatarText: "B",
    avatarBg: "bg-[#0072ce]",
    title: "Frontend Engineer (React & TypeScript)",
    salary: "R$ 9k - 14k",
    location: "Remoto ou Criciúma, SC",
    timeAgo: "1d atrás",
    type: "full-time",
    area: "engineering",
  },
  {
    id: "4",
    company: "Linear",
    avatarText: "L",
    avatarBg: "bg-[#5e6ad2]",
    title: "Engineering Manager (Platform)",
    salary: "R$ 32k - 42k",
    location: "Remoto global",
    timeAgo: "5h atrás",
    type: "full-time",
    area: "management",
  },
  {
    id: "5",
    company: "Rocketseat",
    avatarText: "R",
    avatarBg: "bg-[#8257e5]",
    title: "Estágio em Desenvolvimento Web Full-stack",
    salary: "R$ 2.5k",
    location: "Remoto",
    timeAgo: "6h atrás",
    type: "internship",
    area: "engineering",
  },
  {
    id: "6",
    company: "QuintoAndar",
    avatarText: "Q",
    avatarBg: "bg-[#003bff]",
    title: "Design System Intern",
    salary: "R$ 3k",
    location: "Remoto ou São Paulo, SP",
    timeAgo: "1d atrás",
    type: "internship",
    area: "design",
  },
  {
    id: "7",
    company: "Brex",
    avatarText: "B",
    avatarBg: "bg-[#e53935]",
    title: "Product Operations Lead (Fintech)",
    salary: "R$ 15k - 20k",
    location: "Remoto (Brasil)",
    timeAgo: "2d atrás",
    type: "contract",
    area: "management",
  },
];

// Precomputes the jobs count per area at module level to avoid recomputations during render
const AREA_COUNTS: Record<JobArea, number> = INITIAL_JOBS.reduce(
  (acc, job) => {
    acc[job.area] = (acc[job.area] || 0) + 1;
    return acc;
  },
  { engineering: 0, design: 0, management: 0 },
);

export const Jobs: FC = () => {
  const [selectedTypes, setSelectedTypes] = useState<JobType[]>([]);
  const [selectedAreas, setSelectedAreas] = useState<JobArea[]>([]);
  const [isPending, startTransition] = useTransition();

  const toggleType = (type: JobType) => {
    startTransition(() => {
      setSelectedTypes((prev) =>
        prev.includes(type) ? prev.filter((v) => v !== type) : [...prev, type],
      );
    });
  };

  const toggleArea = (area: JobArea) => {
    startTransition(() => {
      setSelectedAreas((prev) =>
        prev.includes(area) ? prev.filter((v) => v !== area) : [...prev, area],
      );
    });
  };

  const clearFilters = () => {
    startTransition(() => {
      setSelectedTypes([]);
      setSelectedAreas([]);
    });
  };

  const handleApply = (job: Job) => {
    alert(`Candidatura aberta para ${job.title} na ${job.company}!`);
  };

  // Vercel performance rules: O(1) Set lookups and early exits
  const hasTypes = selectedTypes.length > 0;
  const hasAreas = selectedAreas.length > 0;
  const typesSet = hasTypes ? new Set(selectedTypes) : null;
  const areasSet = hasAreas ? new Set(selectedAreas) : null;

  const filteredJobs = INITIAL_JOBS.filter((job) => {
    if (typesSet && !typesSet.has(job.type)) return false;
    if (areasSet && !areasSet.has(job.area)) return false;
    return true;
  });

  const hasActiveFilters = hasTypes || hasAreas;

  return (
    <section aria-labelledby="jobs-title" className="w-full">
      {/* Ledger Header and Controls */}
      <div className="flex flex-col gap-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#e2e5e9]">
          <div>
            <span className="text-xs font-mono font-semibold text-[#0047ff] tracking-wide uppercase block mb-1">
              Index ao vivo
            </span>
            <h2 id="jobs-title" className="text-2xl sm:text-3xl font-bold text-[#0e1013] tracking-tight">
              Oportunidades em aberto
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span
              aria-live="polite"
              aria-atomic="true"
              className="text-xs font-mono text-[#5f6774] bg-[#e2e5e9]/50 px-2.5 py-1 rounded"
            >
              {filteredJobs.length} {filteredJobs.length === 1 ? "vaga" : "vagas"} filtradas
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs font-medium text-[#0047ff] hover:underline cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0047ff] rounded-xs"
              >
                Limpar filtros
              </button>
            )}
          </div>
        </div>

        {/* Filter Bar with ARIA Groups */}
        <div className="flex flex-wrap items-center gap-2">
          <div role="group" aria-label="Filtrar por área de atuação" className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-[#5f6774] mr-1">Áreas:</span>
            {AREA_OPTIONS.map(({ id, label }) => {
              const isSelected = selectedAreas.includes(id);
              const count = AREA_COUNTS[id];
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => toggleArea(id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all focus-visible:outline-2 focus-visible:outline-[#0047ff] focus-visible:outline-offset-1 ${
                    isSelected
                      ? "bg-[#0e1013] text-white shadow-xs"
                      : "bg-white text-[#5f6774] border border-[#e2e5e9] hover:border-[#ccd2d9] hover:text-[#0e1013]"
                  }`}
                >
                  <span>{label}</span>
                  <span
                    aria-label={`${count} vagas`}
                    className={`text-[10px] font-mono px-1 rounded ${
                      isSelected ? "bg-white/20 text-white" : "text-[#5f6774]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="h-4 w-px bg-[#e2e5e9] mx-2 hidden sm:block" aria-hidden="true" />

          <div role="group" aria-label="Filtrar por regime de contratação" className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-[#5f6774] mr-1">Contrato:</span>
            {TYPE_OPTIONS.map(({ id, label }) => {
              const isSelected = selectedTypes.includes(id);
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => toggleType(id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all focus-visible:outline-2 focus-visible:outline-[#0047ff] focus-visible:outline-offset-1 ${
                    isSelected
                      ? "bg-[#0047ff] text-white shadow-xs"
                      : "bg-white text-[#5f6774] border border-[#e2e5e9] hover:border-[#ccd2d9] hover:text-[#0e1013]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* List / Ledger */}
      {filteredJobs.length === 0 ? (
        <div role="status" className="bg-white border border-[#e2e5e9] rounded-lg p-12 text-center">
          <div
            aria-hidden="true"
            className="w-10 h-10 rounded-full bg-[#f1f3f5] text-[#5f6774] flex items-center justify-center mx-auto mb-3 text-lg font-mono"
          >
            /
          </div>
          <h3 className="text-base font-semibold text-[#0e1013] mb-1">
            Nenhuma vaga encontrada
          </h3>
          <p className="text-sm text-[#5f6774] mb-4 max-w-sm mx-auto">
            Não há oportunidades abertas para a combinação de filtros selecionada.
          </p>
          <Button size="sm" variant="outline" onClick={clearFilters}>
            Limpar todos os filtros
          </Button>
        </div>
      ) : (
        <div
          role="feed"
          aria-busy={isPending}
          className={`flex flex-col divide-y divide-[#e2e5e9] border-y border-[#e2e5e9] bg-white transition-opacity duration-150 motion-reduce:transition-none ${
            isPending ? "opacity-60" : "opacity-100"
          }`}
        >
          {filteredJobs.map((job) => (
            <article
              key={job.id}
              aria-labelledby={`job-title-${job.id}`}
              className="group flex flex-col md:flex-row md:items-center justify-between p-4 sm:p-5 hover:bg-[#f8f9fa] transition-colors motion-reduce:transition-none gap-4 [content-visibility:auto] [contain-intrinsic-size:96px]"
            >
              <div className="flex items-start sm:items-center gap-4 flex-1 min-w-0">
                <div
                  aria-hidden="true"
                  className={`w-11 h-11 rounded flex items-center justify-center shrink-0 ${
                    job.avatarBg || "bg-[#0e1013]"
                  } text-white font-bold text-sm shadow-xs select-none`}
                >
                  {job.avatarText}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-semibold text-xs text-[#0e1013]">
                      {job.company}
                    </span>
                    <span aria-hidden="true" className="text-xs text-[#5f6774]">·</span>
                    <span className="text-xs text-[#5f6774] font-mono">
                      {job.timeAgo}
                    </span>
                  </div>

                  <h3 id={`job-title-${job.id}`} className="text-base sm:text-lg font-semibold text-[#0e1013] group-hover:text-[#0047ff] transition-colors truncate">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span
                      aria-label={`Faixa salarial: ${job.salary}`}
                      className="font-mono text-xs font-semibold bg-[#0047ff]/10 text-[#0047ff] px-2 py-0.5 rounded border border-[#0047ff]/20"
                    >
                      {job.salary}
                    </span>
                    <span
                      aria-label={`Localização: ${job.location}`}
                      className="text-xs text-[#5f6774] bg-[#f1f3f5] px-2 py-0.5 rounded"
                    >
                      {job.location}
                    </span>
                    <span
                      aria-label={`Tipo de contrato: ${TYPE_LABELS[job.type]}`}
                      className="text-xs text-[#5f6774] border border-[#e2e5e9] px-2 py-0.5 rounded"
                    >
                      {TYPE_LABELS[job.type]}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-[#e2e5e9]/50 shrink-0">
                <Link to={`/vagas/${job.id}`}>
                  <Button
                    size="sm"
                    variant="cobalt"
                    aria-label={`Ver detalhes da vaga ${job.title} na empresa ${job.company}`}
                    className="w-full md:w-auto font-medium"
                  >
                    Ver vaga
                  </Button>
                </Link>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleApply(job)}
                  aria-label={`Candidatar-se à vaga ${job.title} na empresa ${job.company}`}
                  className="w-full md:w-auto font-medium group-hover:border-[#0047ff] group-hover:text-[#0047ff]"
                >
                  <span>Candidatar-se</span>
                  <span aria-hidden="true">→</span>
                </Button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};
