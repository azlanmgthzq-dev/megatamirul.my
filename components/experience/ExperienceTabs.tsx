"use client";

import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { experienceTabs, type ExperienceTabId } from "./experience.config";

type ExperienceTabsProps = {
  renderContent: (tab: ExperienceTabId) => ReactNode;
  onTabChange?: (tab: ExperienceTabId) => void;
};

export default function ExperienceTabs({
  renderContent,
  onTabChange,
}: ExperienceTabsProps) {
  const [activeTab, setActiveTab] =
    useState<ExperienceTabId>(experienceTabs[0].id);

  const handleTabChange = (tabId: ExperienceTabId) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[240px_1fr] items-start">
      <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-3 lg:sticky lg:top-24">
        {experienceTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all w-full text-left lg:text-base
                ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="glass glow-border rounded-2xl p-8 space-y-6"
      >
        {renderContent(activeTab)}
      </motion.div>
    </div>
  );
}
