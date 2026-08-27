"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, Github, Award } from "lucide-react";
import { ProjectItem } from "../types/profile";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="glass-panel w-full max-w-lg rounded-3xl p-5 sm:p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto bg-white/95 dark:bg-slate-900/95"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Đóng"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-200/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Image */}
        <div className="relative rounded-2xl overflow-hidden mb-4 bg-gray-900 h-52">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
          />
          <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-blue-600 text-white shadow-md">
            {project.badge || project.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{project.title}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{project.category}</p>

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-5">
          <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
            Công nghệ sử dụng
          </h5>
          <div className="flex flex-wrap gap-2">
            {project.techs.map((t) => (
              <span
                key={t}
                className="text-xs font-medium px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200/40 dark:border-blue-700/40"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-6 flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
            <Award className="w-4 h-4 flex-shrink-0" />
            <span>Điểm nổi bật: {project.metrics}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25 active:scale-98 transition-transform"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Trải nghiệm Live Demo</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl glass-card text-gray-800 dark:text-white text-sm font-semibold flex items-center justify-center space-x-2 active:scale-98 transition-transform"
            >
              <Github className="w-4 h-4" />
              <span>Mã nguồn GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
