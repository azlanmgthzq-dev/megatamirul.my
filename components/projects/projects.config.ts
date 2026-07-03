export type Project = {
  id: string;
  name: string;
  role: string;
  description: string;
  images: string[];
  link: string;
  linkLabel?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    id: "icp-dashboard",
    name: "ICP Obligation & Compliance Dashboard",
    role: "Full-Stack Developer",
    description:
      "Internal web application replacing manual Excel tracking for Industrial Collaboration Programme (ICP) obligations - covering milestones, BIP claims, vendor data, role-based access, and team collaboration tools.",
    images: [
      "/Project Snapshot/ICP Dashboard/icp1.png",
      "/Project Snapshot/ICP Dashboard/icp2.png",
      "/Project Snapshot/ICP Dashboard/icp3.png",
    ],
    link: "https://icp-dashboard-eta.vercel.app/",
    linkLabel: "View Live Demo",
    tags: ["React", "Vite", "Supabase", "Zustand", "Recharts"],
  },
  {
    id: "gta-cmp",
    name: "GTA Contract Management Portal (CMP)",
    role: "Full-Stack Developer",
    description:
      "Contract registry and KPI dashboard digitalizing procurement flow, document management, and contract tracking for Global Turbine Asia.",
    images: [
      "/Project Snapshot/GTA Cmp/cmp1.png",
      "/Project Snapshot/GTA Cmp/cmp2.png",
      "/Project Snapshot/GTA Cmp/cmp3.png",
    ],
    link: "https://cmp-dashboard-gilt.vercel.app/",
    linkLabel: "View Live Demo",
    tags: ["React", "Supabase", "Zustand", "Recharts"],
  },
  {
    id: "helios",
    name: "HELIOS — MRO Digitalization Platform",
    role: "Full-Stack Developer & UI/UX Designer",
    description:
      "Helicopter MRO operations digitalization system focused on RFID-based asset tracking, task card digitalization, and workforce planning.",
    images: [
      "/Project Snapshot/Helios/helios1.png",
      "/Project Snapshot/Helios/helios2.png",
      "/Project Snapshot/Helios/helios3.png",
    ],
    link: "https://helios-gta-ewjszpyrwgao6.azurewebsites.net/",
    linkLabel: "View Live Demo",
    tags: ["Aviation MRO", "RFID", "UI/UX", "Full-Stack"],
  },
  {
    id: "eccm",
    name: "ECCM — Engine & Component Condition Monitoring",
    role: "Project Oversight",
    description:
      "Engine & component condition monitoring system supporting maintenance planning and compliance oversight across 8 functional modules.",
    images: [
      "/Project Snapshot/ECCM/Eccm1.png",
      "/Project Snapshot/ECCM/Eccm2.png",
      "/Project Snapshot/ECCM/Eccm3.png",
    ],
    link: "URL:https://safetruck-staging.ddns.net/eccm/login",
    linkLabel: "Internal Tool — Private",
    tags: ["System Design", "Compliance", "Scalability"],
  },
];
