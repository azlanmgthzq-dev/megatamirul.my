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
      "/Project SnapShot/ICP/Overview.png",
      "/Project SnapShot/ICP/claim_Ai.png",
      "/Project SnapShot/ICP/contract_details.png",
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
      "/Project SnapShot/CMP/CMP_landing.png",
      "/Project SnapShot/CMP/Main_dash.png",
      "/Project SnapShot/CMP/ProcurementFlow.png",
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
      "/Project SnapShot/Helios/Asset_mgmt.png",
      "/Project SnapShot/Helios/Helios_login.png",
      "/Project SnapShot/Helios/TaskCard.png",
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
    images: [],
    link: "",
    linkLabel: "Internal Tool — Private",
    tags: ["System Design", "Compliance", "Scalability"],
  },
];
