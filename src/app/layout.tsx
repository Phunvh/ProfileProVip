import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { ToastProvider } from "../components/Toast";
import { profileData } from "../data/profileData";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const vietnam = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
};

export const metadata: Metadata = {
  title: `${profileData.personal.name} | ${profileData.personal.title}`,
  description: profileData.personal.bio,
  icons: {
    icon: "/assets/icons/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning className={`${jakarta.variable} ${vietnam.className}`}>
      <body className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 min-h-screen selection:bg-blue-500 selection:text-white pb-24 md:pb-12 antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToastProvider>
            {/* Ambient Background Glows */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
            <div className="fixed bottom-0 right-0 w-80 h-80 bg-purple-500/10 blur-3xl pointer-events-none -z-10" />

            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
