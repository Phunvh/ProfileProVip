"use client";

import React from "react";
import * as Icons from "lucide-react";

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = "w-5 h-5", size }) => {
  // Normalize icon name: e.g. "github" -> "Github", "briefcase" -> "Briefcase"
  const formattedName = name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("") as keyof typeof Icons;

  const IconComponent = (Icons[formattedName] || Icons[name as keyof typeof Icons] || Icons.Sparkles) as React.ElementType;

  return <IconComponent className={className} size={size} />;
};
