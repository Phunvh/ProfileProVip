"use client";

import React from "react";
import { Cpu } from "lucide-react";
import { SkillCategory } from "../types/profile";
import { DynamicIcon } from "./DynamicIcon";

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section id="skills" className="space-y-6">
      <div className="text-center sm:text-left">
        <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
          <Cpu className="w-4 h-4" />
          <span>Kỹ năng & Công nghệ</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
          Bộ công cụ phát triển
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {skills.map((cat) => (
          <div key={cat.category} className="glass-card p-4 sm:p-5 rounded-2xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3.5 flex items-center space-x-2">
              <span>{cat.category}</span>
            </h4>
            <div className="space-y-3">
              {cat.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs mb-1 font-medium">
                    <span className="text-gray-800 dark:text-gray-200 flex items-center space-x-1.5">
                      <DynamicIcon name={skill.icon} className="w-3.5 h-3.5 text-blue-500" />
                      <span>{skill.name}</span>
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700/60 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
