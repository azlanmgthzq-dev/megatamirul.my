import type { ExperienceTab } from "./experience.config";

type ExperiencePanelProps = {
  data: ExperienceTab;
};

export default function ExperiencePanel({ data }: ExperiencePanelProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-display text-2xl font-semibold">{data.company}</h3>

      <p className="text-primary font-medium">{data.role}</p>

      <p className="text-foreground/80 max-w-3xl">{data.summary}</p>
    </div>
  );
}
