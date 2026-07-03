import {
  Database,
  ShieldCheck,
  Network,
  Gauge,
} from "lucide-react";

export const engineeringTabs = [
  { id: "data", label: "Data Fundamentals", icon: Database },
  { id: "security", label: "Security", icon: ShieldCheck },
  { id: "networking", label: "Networking & Protocols", icon: Network },
  { id: "performance", label: "Web Performance", icon: Gauge },
] as const;

export type EngineeringTabId = typeof engineeringTabs[number]["id"];
