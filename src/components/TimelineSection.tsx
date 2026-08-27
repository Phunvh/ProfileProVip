"use client";

import React from "react";
import { Calendar } from "lucide-react";
import { TimelineItem } from "../types/profile";

interface TimelineSectionProps {
  timeline: TimelineItem[];
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ timeline }) => {
  return (
    <section id="timeline" className="space-y-6">
      <div className="text-center sm:text-left">
        <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
          <Calendar className="w-4 h-4" />
          <span>Kinh nghiệm & Học vấn</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
          Lộ trình phát triển sự nghiệp
        </h2>
      </div>

      <div className="mt-4">
        {timeline.map((item, idx) => (
          <div key={`${item.company}-${idx}`} className="relative pl-6 pb-8 last:pb-2 group">
            {/* Timeline Line */}
            <div className="absolute left-[7px] top-3 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-700 group-last:hidden" />
            {/* Timeline Dot */}
            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-blue-500 bg-white dark:bg-gray-900 flex items-center justify-center group-hover:scale-125 transition-transform">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            </div>
            {/* Timeline Card */}
            <div className="glass-card p-4 rounded-2xl">
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-700/50">
                  {item.period}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500">{item.type}</span>
              </div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mt-1">{item.role}</h4>
              <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-1.5">{item.company}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
