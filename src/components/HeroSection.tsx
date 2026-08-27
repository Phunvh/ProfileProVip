"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MessageSquare, Download } from "lucide-react";
import { PersonalInfo, SocialItem } from "../types/profile";
import { DynamicIcon } from "./DynamicIcon";
import { useToast } from "./Toast";

interface HeroSectionProps {
  personal: PersonalInfo;
  socials: SocialItem[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ personal, socials }) => {
  const { showToast } = useToast();
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = personal.typedTitles || ["Developer", "Creator"];

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const typeSpeed = isDeleting ? 45 : 90;
    const pauseTime = 1600;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setTypedText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  const handleCvClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!personal.cvUrl || personal.cvUrl === "#") {
      e.preventDefault();
      showToast("📄 Đang cập nhật tệp CV mới nhất!");
    }
  };

  return (
    <section id="hero" className="pt-4 sm:pt-10 flex flex-col items-center text-center">
      {/* Status Badge */}
      {personal.status && (
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot"></span>
          <span>{personal.status.text}</span>
        </div>
      )}

      {/* Avatar with Animated Glow */}
      <div className="avatar-glow mb-6">
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden p-1 bg-white dark:bg-slate-900 shadow-2xl relative">
          <Image
            src={personal.avatar || "/assets/images/avatar.svg"}
            alt={personal.name}
            width={144}
            height={144}
            className="w-full h-full object-cover rounded-full"
            priority
          />
        </div>
      </div>

      {/* Name & Typewriter Title */}
      <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Xin chào, tôi là{" "}
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {personal.name}
        </span>{" "}
        👋
      </h1>

      <div className="h-8 flex items-center justify-center mt-2 text-base sm:text-xl font-bold text-gray-700 dark:text-gray-300">
        <span>{typedText}</span>
        <span className="inline-block w-[2px] h-[1.1em] bg-blue-500 ml-1 animate-pulse align-middle"></span>
      </div>

      {/* Short Bio */}
      <p className="max-w-xl text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
        {personal.bio}
      </p>

      {/* Quick Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-6 w-full max-w-sm">
        <a
          href="#contact"
          className="flex-1 min-w-[130px] py-3 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-2 active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Liên hệ ngay</span>
        </a>
        <a
          href={personal.cvUrl || "#"}
          target={personal.cvUrl && personal.cvUrl !== "#" ? "_blank" : "_self"}
          rel="noopener noreferrer"
          onClick={handleCvClick}
          className="flex-1 min-w-[130px] py-3 px-5 rounded-xl glass-card hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-800 dark:text-white text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 active:scale-95 transition-all"
        >
          <Download className="w-4 h-4 text-blue-500" />
          <span>Tải hồ sơ CV</span>
        </a>
      </div>

      {/* Social Links */}
      <div className="mt-6 flex items-center justify-center gap-2.5">
        {socials.map((soc) => (
          <a
            key={soc.name}
            href={soc.url}
            target="_blank"
            rel="noopener noreferrer"
            title={soc.name}
            className={`w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-600 dark:text-gray-300 ${
              soc.color || ""
            } transition-transform active:scale-95 shadow-sm`}
          >
            <DynamicIcon name={soc.icon} className="w-5 h-5" />
          </a>
        ))}
      </div>
    </section>
  );
};
