"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { engineeringTabs, EngineeringTabId } from "./tabs.config";
import { engineeringContent } from "./content.config";

export default function EngineeringTabs() {
  const [activeTab, setActiveTab] = useState<EngineeringTabId>("data");
  const content = engineeringContent[activeTab];

  return (
    <>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {engineeringTabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all
                ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }
              `}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="glass rounded-2xl p-8 min-h-[380px] space-y-6"
      >
        <div className="space-y-3">
          <h3 className="font-display text-xl font-semibold text-foreground">
            Concept
          </h3>
          <p className="text-foreground/80 leading-relaxed">{content.concept}</p>
        </div>

        <div className="rounded-xl border border-primary/30 bg-primary/[0.06] p-5 space-y-2">
          <h4 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-primary">
            <Lightbulb className="w-4 h-4" />
            In Practice
          </h4>
          <p className="text-foreground/80 leading-relaxed text-sm">
            {content.inPractice}
          </p>
        </div>
      </motion.div>
    </>
  );
}
