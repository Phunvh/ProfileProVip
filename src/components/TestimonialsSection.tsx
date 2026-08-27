"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Quote } from "lucide-react";
import { TestimonialItem } from "../types/profile";

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="space-y-6">
      <div className="text-center sm:text-left">
        <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
          <MessageCircle className="w-4 h-4" />
          <span>Nhận xét</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
          Đối tác & Khách hàng nói gì
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {testimonials.map((item, idx) => (
          <div key={idx} className="glass-card p-5 rounded-2xl relative">
            <Quote className="w-8 h-8 text-blue-500/20 absolute top-4 right-4" />
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 italic mb-4 leading-relaxed relative z-10">
              &ldquo;{item.content}&rdquo;
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full overflow-hidden relative border border-blue-500/30">
                <Image
                  src={item.avatar}
                  alt={item.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h5 className="text-xs font-bold text-gray-900 dark:text-white">{item.author}</h5>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
