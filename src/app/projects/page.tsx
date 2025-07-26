import { GitBranch, Globe } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface ProjetoDetalhes {
  id: string;
  nome: string;
  descricao: string;
  descricaoLonga: string;
  tecnologias: string[];
  imagens: string[];
  link?: string;
  repositorio?: string;
}

// Dados de exemplo - em um caso real, você buscaria do seu backend ou CMS
const projetosData: Record<string, ProjetoDetalhes> = {
  pace: {
    id: "pace",
    nome: "Calculadora de Pace",
    descricao:
      "Ferramenta para auxiliar no cálculo de pace, velocidade e distância para corredores",
    descricaoLonga: `
    Projeto desenvolvido para auxiliar corredores à calcularem velocidade, pace e distância baseado nas informações disponíveis.

    O sistema inclui recursos como:
    - Converter pace em velocidade
    - Converter velocidade em pace
    - Calcular pace baseado na distância e tempo`,
    tecnologias: ["React", "NextJS"],
    imagens: [
      "/assets/images/pace1.png?height=400&width=600",
      "/assets/images/pace2.png?height=400&width=600",
      "/assets/images/pace3.png?height=400&width=600",
    ],
    link: "https://pace.ziltro.dev",
    repositorio: "https://github.com/guiliznas/pace-calculator",
  },
  postits: {
    id: "postits",
    nome: "Anotações rápidas",
    descricao:
      "Ferramenta simples para realizar anotações rápidas e compartilhar facilmente.",
    descricaoLonga: `
    Este aplicativo foi desenvolvido para auxiliar as pessoas a compartilharem textos simples, com formatação markdown e sem nenhuma burocracia.

    Principais funcionalidades:
    - Anotações rápidas
    - Formatação markdown
    - Modo leitura para compartilhar
    - Sem necessidade de cadastro
    - Criação ilimitada de páginas`,
    tecnologias: ["Node", "Express", "MongoDB"],
    imagens: [
      "/assets/images/postits1.png?height=400&width=600",
      "/assets/images/postits2.png?height=400&width=600",
      "/assets/images/postits3.png?height=400&width=600",
    ],
    link: "https://postits.ziltro.dev",
    repositorio: "https://github.com/guiliznas/postits",
  },
  snake: {
    id: "snake",
    nome: "Snake",
    descricao: "Simulador do jogo antigo para celulares, o Snake",
    descricaoLonga: `
    Jogo simples simulando o antigo game Snake.

    Características principais:
    - Ranking de melhores pontuações
    - Controle simples e ajustado para mobile`,
    tecnologias: ["HTML", "CSS", "JavaScript"],
    imagens: [
      "/assets/images/snake1.png?height=400&width=600",
      "/assets/images/snake2.png?height=400&width=600",
    ],
    link: "https://snake.ziltro.dev",
    repositorio: "https://github.com/guiliznas/game-snake",
  },
  "todo-list": {
    id: "todo-list",
    nome: "TO-DO List",
    descricao:
      "Ferramenta simples para anotações de tarefas, salvando localmente. Inspirado em phived.com",
    descricaoLonga: `
      Ferramenta simples para anotar tarefas, sem necessidade de login e salvando diretamente no browser para não perder informações.

      Principais características:
      - Controle até 5 tarefas por ambiente, garantindo foco
      - Sem necessidade de cadastro
      - Interface simples sem distrações

      Projeto inspirado em phived.com
      `,
    tecnologias: ["Vue.js", "Vite", "LocalStorage"],
    imagens: [
      "/assets/images/todo-list1.png?height=400&width=600",
      "/assets/images/todo-list2.png?height=400&width=600",
      "/assets/images/todo-list3.png?height=400&width=600",
    ],
    link: "https://todo-list.ziltro.dev/",
    repositorio: "https://github.com/guiliznas/simple-todo-list",
  },
};

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  url: string;
  technologies: ReactNode;
}

// Function to convert technology strings to React components
function renderTechnologies(techs: string[]) {
  const techColors: Record<string, { bg: string; text: string }> = {
    React: { bg: "[#00D8FE]", text: "zinc-950" },
    NextJS: { bg: "black", text: "zinc-100" },
    TailwindCSS: { bg: "[#38BDF9]", text: "zinc-950" },
    TypeScript: { bg: "[#007ACC]", text: "zinc-100" },
    Vite: { bg: "[#926AFE]", text: "zinc-100" },
    Node: { bg: "[#339933]", text: "zinc-100" },
    Express: { bg: "[#000000]", text: "zinc-100" },
    MongoDB: { bg: "[#47A248]", text: "zinc-100" },
    "Vue.js": { bg: "[#4FC08D]", text: "zinc-950" },
    HTML: { bg: "[#E34F26]", text: "zinc-100" },
    CSS: { bg: "[#1572B6]", text: "zinc-100" },
    JavaScript: { bg: "[#F7DF1E]", text: "zinc-950" },
    LocalStorage: { bg: "[#808080]", text: "zinc-100" },
  };

  return (
    <div className="flex flex-wrap items-center gap-x-3">
      {techs.map((tech) => {
        const colorConfig = techColors[tech] || {
          bg: "zinc-500",
          text: "zinc-100",
        };
        return (
          <span
            key={tech}
            className={`rounded-full bg-${colorConfig.bg} px-2.5 py-0.5 text-sm text-${colorConfig.text} dark:bg-inherit dark:text-zinc-200 dark:ring-1 dark:ring-zinc-500`}
          >
            {tech}
          </span>
        );
      })}
    </div>
  );
}

// Convert projetosData to the Project interface
const projects: Project[] = Object.values(projetosData).map((projeto) => ({
  name: projeto.nome,
  description: projeto.descricao,
  imageUrl: projeto.imagens[0].split("?")[0], // Remove query parameters
  githubUrl: projeto.repositorio || "#",
  url: projeto.link || "#",
  technologies: renderTechnologies(projeto.tecnologias),
}));

function ProjectCard({
  name,
  description,
  imageUrl,
  githubUrl,
  url,
  technologies,
}: Project) {
  return (
    <div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="p-4">{description}</p>
      </div>
      <div className="relative h-[300px] w-full bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, 620px"
          alt={`Screenshot of ${name} project`}
          className="object-contain"
          priority
        />
      </div>
      <div className="flex w-full justify-between divide-x divide-zinc-400 dark:divide-zinc-500">
        <a
          href={url}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
        >
          <Globe strokeWidth={1.4} className="size-5" /> Visit website
        </a>
        <a
          href={githubUrl}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
        >
          <GitBranch strokeWidth={1.4} className="size-5" /> View code
        </a>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Projects
      </h1>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.url} {...project} />
        ))}
      </div>
    </>
  );
}
