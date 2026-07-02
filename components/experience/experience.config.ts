export type ExperienceProject = {
  name: string;
  description: string;
  contributions?: string[];
  tags?: string[];
};

export type ExperienceTab = {
  id: string;
  label: string;
  company: string;
  role: string;
  summary: string;
  projects?: ExperienceProject[];
  activities?: string[];
  tools?: string[];
};

export const experienceTabs: ReadonlyArray<ExperienceTab> = [
  {
    id: "gta",
    label: "2025 - Present",
    company: "Global Turbine Asia (Safran JV)",
    role: "Full-Stack Developer & UI/UX Designer",
    summary:
      "Involved in the design and development of aviation maintenance systems within a regulated MRO environment.",
    projects: [
      {
        name: "HELIOS",
        description:
          "Helicopter MRO operations digitalization system focused on asset visibility, task execution, and workforce planning.",
        contributions: [
          "Designed UI flows for RFID-based asset tracking of tools and components",
          "Digitalized task card and work order workflows including approval and sign-off",
          "Built interfaces for task handover, tool assignment, and performance tracking",
          "Supported workshop scheduling optimization for manpower and workload planning",
        ],
        tags: ["Aviation MRO", "RFID", "Task Cards", "UI/UX", "Frontend"],
      },
      {
        name: "ECCM",
        description:
          "Engine & Component Condition Monitoring system supporting maintenance planning and compliance oversight.",
        contributions: [
          "Contributed to system design covering 8 functional modules",
          "Defined user roles and permission structures",
          "Performed technical assessments for scalability and information security",
          "Supported documentation and stakeholder coordination",
        ],
        tags: ["System Design", "Compliance", "Scalability", "Documentation"],
      },
      {
        name: "ICP Dashboard",
        description:
          "Full-stack internal dashboard replacing manual Excel tracking for Industrial Collaboration Programme (ICP) obligations, milestones, and BIP claims.",
        contributions: [
          "Built the application end-to-end with React, Vite, and Supabase (PostgreSQL + Auth)",
          "Implemented role-based access control with per-user, per-module edit permissions across 8 team members",
          "Developed BIP Claim Summary, Calendar & Timeline, Kanban Tasks, and dynamic Org Chart modules",
          "Migrated legacy urgent-items tracking into a unified task management system",
        ],
        tags: ["React", "Vite", "Supabase", "Zustand", "Recharts"],
      },
      {
        name: "GTA Contract Management Portal (CMP)",
        description:
          "Contract registry and KPI dashboard digitalizing procurement flow and document management for GTA.",
        contributions: [
          "Built contract CRUD, KPI cards, and charts covering the full contract lifecycle",
          "Implemented a two-tier access system: authenticated admin view and configurable public read-only view",
          "Developed the Document Rack and Procurement Flow modules",
        ],
        tags: ["React", "Supabase", "Zustand", "Recharts"],
      },
    ],
  },
  {
    id: "internship",
    label: "2024",
    company: "Internship Experience",
    role: "IT / Digital Support Intern",
    summary:
      "Early exposure to IT operations and digital support work across technical and non-technical tasks.",
    activities: [
      "Assisted with basic network setup and IT infrastructure support (LAN, NAT & ACL)",
      "Built internal dashboards using Google Sheets and Google Apps Script",
      "Create Corporate Video for event presentation",
      "Maintained internal documentation and reporting workflows",
    ],
    tools: ["Google Sheets", "Google Apps Script", "Basic Networking", "Davinci Studio","Adobe PS"],
  },
];

export type ExperienceTabId = (typeof experienceTabs)[number]["id"];
