"use client";

import React, { useState, useEffect } from "react";
import { Home, User, Cpu, FolderGit2, MessageSquare } from "lucide-react";

export const MobileBottomNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Trang chủ", icon: Home },
    { id: "about", label: "Về tôi", icon: User },
    { id: "skills", label: "Kỹ năng", icon: Cpu },
    { id: "projects", label: "Dự án", icon: FolderGit2 },
    { id: "contact", label: "Liên hệ", icon: MessageSquare },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-panel border-t border-gray-200/80 dark:border-gray-800/80 bottom-nav shadow-2xl backdrop-blur-xl">
      <div className="grid grid-cols-5 h-14 max-w-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-item flex flex-col items-center justify-center ${
                isActive ? "active text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"
              }`}
              aria-label={item.label}
            >
              <span className={`nav-indicator ${isActive ? "!opacity-100 !scale-x-100" : ""}`}></span>
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-semibold mt-1">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
