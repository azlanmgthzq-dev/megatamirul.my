"use Client";

import { useState } from "react";
import { motion } from "framer-motion";
import { aboutTabs, AboutTabId } from "./tabs.config"

type Props = {
    renderContent: (tab: AboutTabId) => React.ReactNode;
    onTabChange?: (tab: AboutTabId) => void;
};

export default function AboutTabs({ renderContent, onTabChange }: Props) {
    const [activeTab, setActiveTab] = useState<AboutTabId>("background");
  
    const handleTabChange = (tab: AboutTabId) => {
      setActiveTab(tab);
      onTabChange?.(tab);
    };

    return (
      <>
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {aboutTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
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
          className="glass glow-border rounded-2xl p-8 min-h-[380px]"
        >
          {renderContent(activeTab)}
        </motion.div>
      </>
    );
  }
