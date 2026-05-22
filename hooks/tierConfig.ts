import { Award, Crown, Diamond, Medal, LucideIcon } from "lucide-react";

export type TierType = "diamond" | "platinum" | "gold" | "silver";

type TierConfig = {
  icon: LucideIcon;
  className: string;
  iconClassName: string;
  label: string;
};

export const tierConfig: Record<TierType, TierConfig> = {
  diamond: {
    label: "Kim cương",
    icon: Diamond,
    className:
      "bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 text-white border-blue-700 shadow-lg animate-pulse",
    iconClassName: "text-blue-100",
  },

  platinum: {
    label: "Bạch kim",
    icon: Crown,
    className:
      "bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 text-slate-900 border-slate-500 shadow-md",
    iconClassName: "text-slate-700",
  },

  gold: {
    label: "Vàng",
    icon: Award,
    className:
      "bg-gradient-to-br from-yellow-300 to-yellow-500 text-yellow-900 border-yellow-600",
    iconClassName: "text-yellow-800",
  },

  silver: {
    label: "Bạc",
    icon: Medal,
    className:
      "bg-gradient-to-br from-gray-200 to-gray-400 text-gray-800 border-gray-500",
    iconClassName: "text-gray-700",
  },
};
