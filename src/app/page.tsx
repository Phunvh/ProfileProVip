import React from "react";
import { profileData } from "../data/profileData";
import { Header } from "../components/Header";
import { MobileBottomNav } from "../components/MobileBottomNav";
import { HeroSection } from "../components/HeroSection";
import { StatsSection } from "../components/StatsSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { TimelineSection } from "../components/TimelineSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ContactSection } from "../components/ContactSection";

export default function Home() {
  const { personal, stats, socials, about, skills, projects, timeline, testimonials } = profileData;

  return (
    <>
      {/* Top Header */}
      <Header personal={personal} />

      {/* Main Sections */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-16 sm:space-y-24">
        {/* 1. Hero Section */}
        <HeroSection personal={personal} socials={socials} />

        {/* 2. Stats Section */}
        <StatsSection stats={stats} />

        {/* 3. About Section */}
        <AboutSection about={about} />

        {/* 4. Skills Section */}
        <SkillsSection skills={skills} />

        {/* 5. Projects Section */}
        <ProjectsSection projects={projects} />

        {/* 6. Timeline Section */}
        <TimelineSection timeline={timeline} />

        {/* 7. Testimonials Section */}
        <TestimonialsSection testimonials={testimonials} />

        {/* 8. Contact Section */}
        <ContactSection personal={personal} />

        {/* Footer */}
        <footer className="pt-8 border-t border-gray-200/60 dark:border-gray-800 text-center text-xs text-gray-500 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} {personal.name}. Crafted with{" "}
            <span className="text-rose-500">♥</span> using Next.js & Mobile-First UX.
          </p>
          <p className="mt-1 text-[11px]">Tương thích hoàn hảo trên mọi kích thước màn hình.</p>
        </footer>
      </main>

      {/* Mobile Bottom Dock Navigation */}
      <MobileBottomNav />
    </>
  );
}
