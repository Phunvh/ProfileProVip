"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Send } from "lucide-react";
import { PersonalInfo } from "../types/profile";
import { useToast } from "./Toast";

interface ContactSectionProps {
  personal: PersonalInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ personal }) => {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`📋 Đã sao chép ${label}: ${text}`);
    }).catch(() => {
      showToast("⚠️ Không thể sao chép tự động.");
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      showToast("🎉 Tin nhắn của bạn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="space-y-6">
      <div className="text-center sm:text-left">
        <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
          <Mail className="w-4 h-4" />
          <span>Liên hệ</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
          Bắt đầu trao đổi dự án
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {/* Direct Contact Cards */}
        <div className="space-y-3 sm:col-span-1">
          {/* Email Card */}
          {personal.email && (
            <div
              onClick={() => handleCopy(personal.email, "Email")}
              className="glass-card p-4 rounded-2xl flex items-center space-x-3 cursor-pointer group active:scale-98"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">Email</p>
                <p className="text-xs font-bold text-gray-900 dark:text-white truncate">{personal.email}</p>
              </div>
              <Copy className="w-4 h-4 text-gray-400 ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          )}

          {/* Phone Card */}
          {personal.phone && (
            <div
              onClick={() => handleCopy(personal.phone, "Số điện thoại")}
              className="glass-card p-4 rounded-2xl flex items-center space-x-3 cursor-pointer group active:scale-98"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">Điện thoại / Zalo</p>
                <p className="text-xs font-bold text-gray-900 dark:text-white truncate">{personal.phone}</p>
              </div>
              <Copy className="w-4 h-4 text-gray-400 ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          )}

          {/* Location Card */}
          {personal.location && (
            <div className="glass-card p-4 rounded-2xl flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">Vị trí</p>
                <p className="text-xs font-bold text-gray-900 dark:text-white truncate">{personal.location}</p>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Contact Form */}
        <div className="glass-card p-5 sm:p-6 rounded-2xl sm:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nguyễn Văn A"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Email liên hệ *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Chủ đề cần trao đổi
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Hợp tác phát triển ứng dụng Web / Mobile..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Nội dung tin nhắn *
              </label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mô tả tóm tắt về dự án hoặc yêu cầu của bạn..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-2 active:scale-98 transition-all disabled:opacity-70"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Đang gửi..." : "Gửi tin nhắn liên hệ"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
