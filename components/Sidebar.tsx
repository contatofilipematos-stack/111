import { 
  LayoutDashboard, 
  ClipboardList, 
  Car, 
  Calendar, 
  Wrench, 
  BarChart3, 
  Settings,
  LogOut
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/', active: true },
  { icon: ClipboardList, label: 'Ordens de Serviço', href: '/os' },
  { icon: Car, label: 'Clientes/Veículos', href: '/clientes' },
  { icon: Calendar, label: 'Agenda', href: '/agenda' },
  { icon: Wrench, label: 'Peças', href: '/pecas' },
  { icon: BarChart3, label: 'Relatórios', href: '/relatorios' },
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-200 bg-white flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-[#1e3b8a] rounded-lg p-2 text-white">
          <Wrench className="size-6" />
        </div>
        <div>
          <h1 className="font-bold text-lg leading-tight">Mecânica CRM</h1>
          <p className="text-xs text-slate-500">Gestão Especializada</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors font-medium",
              item.active 
                ? "bg-[#1e3b8a]/10 text-[#1e3b8a]" 
                : "text-slate-600 hover:bg-slate-100"
            )}
          >
            <item.icon className="size-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center gap-3 p-2">
          <div className="size-10 rounded-full bg-slate-200 overflow-hidden relative">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVgY44wCD2np0DJ2NmD6JjXkWLzMllDzD-DKppTsBhBXBiLIYJjPciLe9Y5bUUDDmn24STVRG21RBcQ7z8_zgTllK4LN9eD28R0QWXafI53IJaPXDArASjjEH7k5pDhJcBYOBCdF70pHJ7rXBB7_YLPADZx6e1-F-7DGpgdAKFacPYfVK7DSW0-kXRHg4T1sx7VnKWnuCEGH-9nX_z9zMOwHuRVc4xcP07JYaqSzID37mbrgagxPYovS1ATIjF2Hrt5ibdWmli" 
              alt="Ricardo Silva"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">Ricardo Silva</p>
            <p className="text-xs text-slate-500 truncate">Gerente</p>
          </div>
          <button className="text-slate-400 hover:text-slate-600">
            <Settings className="size-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
