import {
    Layers,
    GraduationCap,
    Award,
    Code2,
} from "lucide-react";

export const aboutTabs = [
    {id: "background", label: "Background & Thinking", icon: Layers},
    {id: "education", label: "Education", icon: GraduationCap},
    {id: "certifications", label:"Certification", icon: Award},
    { id: "technologies", label: "Technologies", icon: Code2 },
] as const;

export type AboutTabId = typeof aboutTabs[number]["id"];