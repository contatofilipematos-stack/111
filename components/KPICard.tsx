import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KPICardProps {
  title: string;
  value: string | number;
  change: string;
  isPositive?: boolean;
  icon: LucideIcon;
}

export function KPICard({ title, value, change, isPositive = true, icon: Icon }: KPICardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <p className="text-slate-500 text-sm font-medium">{title}</p>
        <div className="bg-[#1e3b8a]/10 p-2 rounded-lg text-[#1e3b8a]">
          <Icon className="size-5" />
        </div>
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <h3 className="text-3xl font-bold tracking-tight">{value}</h3>
        <span className={cn(
          "text-xs font-bold px-1.5 py-0.5 rounded-md",
          isPositive ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
        )}>
          {change}
        </span>
      </div>
    </div>
  );
}
