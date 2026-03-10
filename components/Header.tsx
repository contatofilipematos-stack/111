import { Search, Bell, Settings } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-sm flex items-center justify-between px-8 sticky top-0 z-10">
      <h2 className="text-xl font-bold">Dashboard Geral</h2>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
          <input 
            type="text" 
            placeholder="Buscar OS ou Placa..." 
            className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-[#1e3b8a]/50 transition-all"
          />
        </div>
        
        <button className="p-2 rounded-full hover:bg-slate-100 text-slate-500 relative transition-colors">
          <Bell className="size-5" />
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <button className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
          <Settings className="size-5" />
        </button>
      </div>
    </header>
  );
}
