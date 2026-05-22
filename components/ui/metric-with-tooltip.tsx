import React from "react";
import { cn } from "@/lib/utils"; // Hoặc import thư viện join class của bạn

interface MetricWithTooltipProps {
  icon: React.ElementType;
  total: number;
  label: string;
  lastAt?: string;
  metricStyle: string;
}

const MetricWithTooltip = ({
  icon: Icon,
  total,
  label,
  lastAt,
  metricStyle,
}: MetricWithTooltipProps) => {
  return (
    <div className="relative group">
      {/* Icon và Số lượng */}
      <div
        className={cn(
          "flex items-center gap-1 cursor-help transition-opacity hover:opacity-80",
          metricStyle,
        )}
      >
        <Icon className="w-5 h-5" />
        <span className="text-xs font-semibold">{total}</span>
      </div>

      {/* Tooltip đen */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-max p-2 shadow-lg text-left z-50 pointer-events-none border border-slate-700 rounded-md px-3 py-1.5 text-balance bg-slate-800 text-white text-xs">
        <div className="whitespace-nowrap leading-tight font-semibold">
          {label}
        </div>
        <div className="text-slate-300">
          Lần gần nhất: {lastAt || "Chưa có"}
        </div>

        {/* Mũi tên nhọn hướng xuống */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1a202c]"></div>
      </div>
    </div>
  );
};

export default MetricWithTooltip;
