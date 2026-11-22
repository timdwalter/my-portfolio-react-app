import type { L } from "@/lib/i18n";

export type Project = {
  id: string;
  title: string;
  image: string;
  tags: string[];
  summary?: L;
  /** Internal or external link. Without it, the card shows "case study coming soon". */
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "threejs",
    title: "3D Playground",
    image: "/Darth_Vader.png",
    tags: ["React Three Fiber", "Three.js", "WebGL"],
    href: "/projects/threejs",
    featured: true,
    summary: {
      en: "Interactive real-time 3D scene with GLTF models, bloom and screen-space reflections, rendered in the browser.",
      de: "Interaktive Echtzeit-3D-Szene mit GLTF-Modellen, Bloom und Screen-Space-Reflections – direkt im Browser gerendert.",
    },
  },
  {
    id: "sh-beach",
    title: "SH-Beach",
    image: "/SH-Beach.png",
    tags: ["Full-Stack", "Cloud"],
    featured: true,
    summary: {
      en: "Full-stack application with a scalable cloud architecture.",
      de: "Full-Stack-Anwendung mit skalierbarer Cloud-Architektur.",
    },
  },
  {
    id: "digital-aristoteles",
    title: "Digital Aristoteles",
    image: "/Digital_Aristoteles.png",
    tags: ["AI", "Analytics"],
    featured: true,
    summary: {
      en: "AI-powered system for intelligent insights and analysis.",
      de: "KI-gestütztes System für intelligente Auswertungen und Analysen.",
    },
  },
  {
    id: "lh-leap",
    title: "LH-Leap",
    image: "/Lh-leap.png",
    tags: [],
  },
];

export type Article = {
  title: string;
  /** ISO date of publication */
  date: string;
  category: L;
  summary: L;
  url: string;
};

/** Newest first. Source: https://medium.com/@timwalter23 */
export const articles: Article[] = [
  {
    title: "A Guide to Unhappiness with Artificial Intelligence",
    date: "2026-10-18",
    category: { en: "AI, Satire", de: "KI, Satire" },
    url: "https://medium.com/@timwalter23/a-guide-to-unhappiness-with-artificial-intelligence-f062d9b82107",
    summary: {
      en: "Paul Watzlawick wrote a guide to making yourself unhappy. Here is the AI edition: how to lose control entirely with AI agents.",
      de: "Paul Watzlawick schrieb eine Anleitung zum Unglücklichsein. Hier die KI-Edition: wie man mit KI-Agenten die Kontrolle komplett verliert.",
    },
  },
  {
    title: "How I Work on Proposals with Claude/MS Copilot, Step by Step",
    date: "2026-09-07",
    category: { en: "AI Workflow", de: "KI-Workflow" },
    url: "https://medium.com/@timwalter23/how-i-work-on-proposals-with-claude-ms-copilot-step-by-step-c79f93db19e9",
    summary: {
      en: "The AI-aided process I run as a technical project lead – from a wall of requirements to a QA'd offer, with the prompts I reuse.",
      de: "Mein KI-gestützter Prozess als Technical Project Lead – von der Anforderungswand zum qualitätsgesicherten Angebot, inklusive wiederverwendbarer Prompts.",
    },
  },
  {
    title: "Three Claude Sessions a Day Instead of Two",
    date: "2026-09-06",
    category: { en: "Claude Code", de: "Claude Code" },
    url: "https://medium.com/@timwalter23/three-claude-sessions-a-day-instead-of-two-d998853c704e",
    summary: {
      en: "A small systemd timer on a cheap home server that anchors my Claude usage windows to the workday.",
      de: "Ein kleiner systemd-Timer auf einem günstigen Heimserver, der meine Claude-Nutzungsfenster an den Arbeitstag koppelt.",
    },
  },
  {
    title: "Running an AI Agent on a VPS: Security-First Setup with OpenClaw, Hetzner & Telegram",
    date: "2026-04-27",
    category: { en: "Agentic AI Security", de: "Agentic-AI-Security" },
    url: "https://medium.com/@timwalter23/running-an-ai-agent-on-a-vps-security-first-setup-with-openclaw-hetzner-telegram-23f0ca37e43d",
    summary: {
      en: "How to self-host an AI agent without opening the door to attackers – a hardened VPS setup for OpenClaw with Claude, GitHub and Telegram.",
      de: "Einen KI-Agenten selbst hosten, ohne Angreifern die Tür zu öffnen – ein gehärtetes VPS-Setup für OpenClaw mit Claude, GitHub und Telegram.",
    },
  },
  {
    title: "The Law of the Limiting Factor – Find the One Thing That's Capping All Your Growth",
    date: "2026-04-20",
    category: { en: "Growth", de: "Wachstum" },
    url: "https://medium.com/@timwalter23/the-law-of-the-limiting-factor-find-the-one-thing-thats-capping-all-your-growth-5d287f3cb46f",
    summary: {
      en: "A 19th-century chemist explains why hard work sometimes doesn't pay off – and how to find the one constraint that caps your growth.",
      de: "Ein Chemiker aus dem 19. Jahrhundert erklärt, warum harte Arbeit manchmal nichts bringt – und wie man den einen Engpass findet, der das Wachstum begrenzt.",
    },
  },
  {
    title: "101 Leveraging Reciprocity in Software Development",
    date: "2024-10-06",
    category: { en: "Team Dynamics", de: "Teamdynamik" },
    url: "https://medium.com/@timwalter23/101-leveraging-reciprocity-in-software-development-3d69dd2c156e",
    summary: {
      en: "How the principle of reciprocity builds stronger relationships, better collaboration and a culture of mutual support in software teams.",
      de: "Wie das Prinzip der Reziprozität in Softwareteams stärkere Beziehungen, bessere Zusammenarbeit und eine Kultur gegenseitiger Unterstützung schafft.",
    },
  },
  {
    title: "Persuasion in Software Development Teams: Mastering (Social) Conformity",
    date: "2024-08-07",
    category: { en: "Leadership", de: "Leadership" },
    url: "https://medium.com/@timwalter23/persuasion-in-software-development-teams-mastering-social-conformity-5335cd7de421",
    summary: {
      en: "How social conformity shapes team decisions – and how to persuade while keeping integrity and psychological safety.",
      de: "Wie soziale Konformität Teamentscheidungen prägt – und wie man überzeugt, ohne Integrität und psychologische Sicherheit zu opfern.",
    },
  },
];

/** What Tim can do (abilities). Items are localised. */
export type SkillGroup = { title: L; items: L[] };

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Leadership & Product", de: "Leadership & Produkt" },
    items: [
      { en: "Tech Leadership", de: "Tech Leadership" },
      { en: "Product Ownership", de: "Product Ownership" },
      { en: "Mentoring", de: "Mentoring" },
      { en: "Client communication", de: "Kundenkommunikation" },
      { en: "Writing proposals", de: "Angebote schreiben" },
      { en: "Schedule and budget planning", de: "Zeit- und Budgetplanung" },
    ],
  },
  {
    title: { en: "Architecture & Development", de: "Architektur & Entwicklung" },
    items: [
      { en: "Architecture decisions", de: "Architekturentscheidungen" },
      { en: "Full-stack development", de: "Fullstack-Entwicklung" },
      { en: "Microservices architecture", de: "Microservices-Architektur" },
      { en: "Monolithic systems", de: "Monolithische Systeme" },
      { en: "Client-server", de: "Client-Server" },
      { en: "P2P architecture", de: "P2P-Architektur" },
      { en: "Cloud-native design", de: "Cloud-native Design" },
    ],
  },
  {
    title: { en: "AI & Agentic Development", de: "KI & Agentic Development" },
    items: [
      { en: "Agentic development", de: "Agentic Development" },
      { en: "Spec-driven development", de: "Spec-Driven Development" },
      { en: "Local LLMs", de: "Lokale LLMs" },
      { en: "LLM tracing", de: "LLM-Tracing" },
    ],
  },
  {
    title: { en: "Methods", de: "Methoden" },
    items: [
      { en: "Scrum", de: "Scrum" },
      { en: "Kanban", de: "Kanban" },
      { en: "SAFe", de: "SAFe" },
      { en: "Process mining", de: "Process Mining" },
    ],
  },
];

/** What Tim works with (technologies). Product names are not translated. */
export type StackGroup = { title: L; items: string[] };

export const techStack: StackGroup[] = [
  {
    title: { en: "Languages", de: "Sprachen" },
    items: ["Java", "Python", "C++", "C", "JavaScript", "TypeScript", "MicroPython"],
  },
  {
    title: { en: "Backend", de: "Backend" },
    items: ["Spring Boot", "Quarkus", "Node.js", "REST APIs", "Microservices", "Hibernate ORM", "Flyway Migrations"],
  },
  {
    title: { en: "Frontend", de: "Frontend" },
    items: ["Angular", "React", "Next.js", "HTML5", "CSS", "AJAX", "JSON"],
  },
  {
    title: { en: "Cloud & Platforms", de: "Cloud & Plattformen" },
    items: ["AWS", "Azure", "OpenShift", "Kubernetes", "Docker", "Helm Charts", "Infrastructure as Code", "Cloud Systems"],
  },
  {
    title: { en: "DevOps & CI/CD", de: "DevOps & CI/CD" },
    items: ["Jenkins", "Tekton", "ArgoCD", "OpenShift Pipelines", "Azure DevOps", "GitLab CI", "Maven", "Gradle", "Git", "GitLab", "Gitbucket"],
  },
  {
    title: { en: "Databases", de: "Datenbanken" },
    items: ["PostgreSQL", "MySQL", "MariaDB", "Azure SQL", "Schema-based Multi-Tenancy", "MySQL Workbench", "Sequel Pro"],
  },
  {
    title: { en: "Security & Authentication", de: "Security & Authentifizierung" },
    items: ["Spring Security", "Apache Shiro", "Keycloak", "OAuth2 / OIDC", "JWT"],
  },
  {
    title: { en: "AI & Process Mining", de: "KI & Process Mining" },
    items: ["Ollama", "LM Studio", "Gemma 3", "Celonis"],
  },
  {
    title: { en: "Agentic Tools", de: "Agentic-Tools" },
    items: [
      "Claude Code",
      "Claude Desktop (Chat & Cowork)",
      "GitHub Copilot",
      "Microsoft 365 Copilot",
      "GitHub Spec Kit",
      "OpenSpec",
      "Superpowers",
      "Ponytail",
    ],
  },
  {
    title: { en: "IoT & Embedded", de: "IoT & Embedded" },
    items: ["Arduino IDE", "MicroPython", "MATLAB / Simulink", "LabVIEW", "OPC UA", "MQTT", "M2M Protocols"],
  },
  {
    title: { en: "Tools & IDEs", de: "Tools & IDEs" },
    items: ["IntelliJ IDEA (Ultimate & Community)", "Android Studio", "Eclipse", "Visual Studio CE", "Xcode", "ATOM", "StarUML"],
  },
  {
    title: { en: "Operating Systems", de: "Betriebssysteme" },
    items: ["macOS", "Windows 7/8/10", "Ubuntu", "Raspbian Stretch"],
  },
];

export type Industry = {
  id: string;
  title: L;
  meta?: L;
  text?: L;
};

export const industries: Industry[] = [
  {
    id: "imaging",
    title: { en: "Medical Imaging", de: "Medizinische Bildgebung" },
    meta: { en: "MRI and CT, India and China", de: "MRT und CT, Indien und China" },
    text: {
      en: "Prototypes and training software for MRI and CT systems in the Indian and Chinese markets.",
      de: "Prototypen und Trainingssoftware für MRT- und CT-Systeme im indischen und chinesischen Markt.",
    },
  },
  {
    id: "aviation",
    title: { en: "Aviation", de: "Luftfahrt" },
    meta: { en: "CMS, Product Owner, 2 years", de: "CMS, Product Owner, 2 Jahre" },
    text: {
      en: "Product Owner for a content management system in aviation, in contact with all airlines of the Lufthansa Group.",
      de: "Product Owner für ein Content-Management-System in der Luftfahrt, im Kontakt mit allen Airlines der Lufthansa Group.",
    },
  },
  {
    id: "airline-process-mining",
    title: { en: "Process Mining for Airlines", de: "Process Mining bei Airlines" },
    meta: { en: "Aviation, Process Mining", de: "Luftfahrt, Process Mining" },
  },
  {
    id: "maritime",
    title: { en: "Maritime", de: "Maritime Wirtschaft" },
    meta: { en: "Port of Lübeck", de: "Lübecker Hafen" },
  },
  {
    id: "logistics",
    title: { en: "Logistics", de: "Logistik" },
  },
  {
    id: "bus",
    title: { en: "Bus Network Planning", de: "Bus-Verkehrsplanung" },
    meta: { en: "Public transport", de: "ÖPNV" },
  },
  {
    id: "campus",
    title: { en: "Smart Campus Planning", de: "Smart-Campus-Planung" },
    meta: { en: "ESG, IoT", de: "ESG, IoT" },
    text: {
      en: "Use cases for a smart campus: building data, ESG and on-site digital services.",
      de: "Use Cases für einen Smart Campus: Gebäudedaten, ESG und digitale Services vor Ort.",
    },
  },
  {
    id: "esg",
    title: { en: "ESG Reporting", de: "ESG-Reporting" },
    meta: { en: "Sustainability", de: "Nachhaltigkeit" },
  },
  {
    id: "talent",
    title: { en: "Corporate Talent Management", de: "Corporate Talent Management" },
    meta: { en: "Enterprise tool", de: "Unternehmens-Tool" },
  },
];

export type Station = { company: string; role?: L; current?: boolean };

/** Newest first. */
export const career: Station[] = [
  {
    company: "Lufthansa\u00a0Industry\u00a0Solutions",
    role: { en: "Technical Project Lead", de: "Technical Project Lead" },
    current: true,
  },
  { company: "Fraunhofer IAPT" },
  { company: "Siemens\u00a0Healthcare" },
];
