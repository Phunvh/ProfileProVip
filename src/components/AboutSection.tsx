"use client";

import React from "react";
import { User } from "lucide-react";
import { AboutInfo } from "../types/profile";
import { DynamicIcon } from "./DynamicIcon";

interface AboutSectionProps {
  about: AboutInfo;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ about }) => {
  return (
    <section id="about" className="space-y-6">
      <div className="text-center sm:text-left">
        <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
          <User className="w-4 h-4" />
          <span>Giới thiệu</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
          Hành trình & Giá trị cốt lõi
        </h2>
      </div>

      <div className="glass-card p-5 sm:p-6 rounded-2xl">
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
          {about.description}
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {about.highlights.map((hl) => (
          <div key={hl.title} className="glass-card p-4 rounded-2xl flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex-shrink-0 flex items-center justify-center shadow-md shadow-blue-500/20">
              <DynamicIcon name={hl.icon} className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">{hl.title}</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{hl.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
