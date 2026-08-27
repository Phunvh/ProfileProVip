"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Send } from "lucide-react";
import { PersonalInfo } from "../types/profile";
import { useToast } from "./Toast";

interface HeaderProps {
  personal: PersonalInfo;
}

export const Header: React.FC<HeaderProps> = ({ personal }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { showToast } = useToast();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    showToast(nextTheme === "dark" ? "🌙 Đã chuyển sang chế độ Tối" : "☀️ Đã chuyển sang chế độ Sáng");
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-gray-200/80 dark:border-gray-800/80 transition-all backdrop-blur-xl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo / Nickname */}
        <a href="#hero" className="flex items-center space-x-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            {personal.nickname?.charAt(0) || "A"}
          </div>
          <span className="font-bold text-sm sm:text-base tracking-tight text-gray-900 dark:text-white">
            <span>{personal.nickname || personal.name}</span>
            <span className="text-blue-500 font-extrabold">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium text-gray-600 dark:text-gray-300">
          <a href="#hero" className="px-3 py-1.5 rounded-lg hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Trang chủ
          </a>
          <a href="#about" className="px-3 py-1.5 rounded-lg hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Về tôi
          </a>
          <a href="#skills" className="px-3 py-1.5 rounded-lg hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Kỹ năng
          </a>
          <a href="#projects" className="px-3 py-1.5 rounded-lg hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Dự án
          </a>
          <a href="#timeline" className="px-3 py-1.5 rounded-lg hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Lộ trình
          </a>
          <a href="#contact" className="px-3 py-1.5 rounded-lg hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Liên hệ
          </a>
        </nav>

        {/* Actions: Theme Toggle & Quick CTA */}
        <div className="flex items-center space-x-2">
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Đổi giao diện sáng/tối"
              className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-transform active:scale-95"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
          )}

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-500/20 active:scale-95 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Kết nối</span>
          </a>
        </div>
      </div>
    </header>
  );
};
