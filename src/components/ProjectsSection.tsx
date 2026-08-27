"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FolderGit2, ArrowRight, Github, ExternalLink, TrendingUp } from "lucide-react";
import { ProjectItem } from "../types/profile";
import { ProjectModal } from "./ProjectModal";

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ["all", "Mobile", "E-Commerce", "SaaS"];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) =>
          p.category.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
    <section id="projects" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="text-center sm:text-left">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
            <FolderGit2 className="w-4 h-4" />
            <span>Dự án tiêu biểu</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            Sản phẩm đã hoàn thành
          </h2>
        </div>

        {/* Filter Tabs (Horizontal scroll on mobile) */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar">
          {categories.map((cat) => {
            const label =
              cat === "all"
                ? "Tất cả"
                : cat === "Mobile"
                ? "Mobile & App"
                : cat === "E-Commerce"
                ? "Thương mại"
                : cat;
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white/60 dark:bg-gray-800/60 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => setActiveModalProject(proj)}
            className="glass-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
          >
            {/* Project Image Preview */}
            <div className="relative h-44 sm:h-48 overflow-hidden bg-gray-900/50">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-600/90 text-white backdrop-blur-md">
                {proj.badge || proj.category}
              </span>
              {proj.metrics && (
                <span className="absolute bottom-2.5 left-3 text-[11px] font-medium text-emerald-400 flex items-center space-x-1 bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-sm">
                  <TrendingUp className="w-3 h-3" />
                  <span>{proj.metrics}</span>
                </span>
              )}
            </div>

            {/* Project Details */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors line-clamp-1">
                  {proj.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="mt-4">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.techs.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800/80">
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center space-x-1">
                    <span>Xem chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                        className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Live Demo"
                        className="p-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/40 text-blue-600 dark:text-blue-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
