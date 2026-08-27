"use client";

import React from "react";
import { StatItem } from "../types/profile";
import { DynamicIcon } from "./DynamicIcon";

interface StatsSectionProps {
  stats: StatItem[];
}

export const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2">
              <DynamicIcon name={stat.icon} className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
              {stat.value}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
