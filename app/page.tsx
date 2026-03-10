'use client';

import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { KPICard } from '@/components/KPICard';
import { OSStatusChart } from '@/components/OSStatusChart';
import { NextDeliveries } from '@/components/NextDeliveries';
import { RecentOSUpdates } from '@/components/RecentOSUpdates';
import { 
  ClipboardList, 
  Car, 
  Banknote, 
  Ticket,
  BarChart3,
  CalendarDays
} from 'lucide-react';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#f6f6f8]">
      <Sidebar />
      
      <main className="flex-1 flex flex-col min-w-0">
        <Header />
        
        <motion.div 
          className="p-8 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={itemVariants}>
              <KPICard 
                title="Ordens de Serviço Abertas"
                value="24"
                change="+5%"
                icon={ClipboardList}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <KPICard 
                title="Veículos no Pátio"
                value="12"
                change="-2%"
                isPositive={false}
                icon={Car}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <KPICard 
                title="Faturamento do Mês"
                value="R$ 45.8k"
                change="+12%"
                icon={Banknote}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <KPICard 
                title="Ticket Médio"
                value="R$ 1.250"
                change="+3%"
                icon={Ticket}
              />
            </motion.div>
          </div>

          {/* Charts and Lists Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* OS Status Chart */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <BarChart3 className="size-5 text-[#1e3b8a]" />
                  Status das Ordens de Serviço
                </h3>
                <select className="text-xs font-medium bg-slate-50 border-none rounded-lg px-3 py-1.5 focus:ring-1 focus:ring-[#1e3b8a]/20">
                  <option>Esta Semana</option>
                  <option>Este Mês</option>
                </select>
              </div>
              <OSStatusChart />
            </motion.div>

            {/* Next Deliveries */}
            <motion.div 
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col"
            >
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <CalendarDays className="size-5 text-[#1e3b8a]" />
                Próximas Entregas (Hoje)
              </h3>
              <div className="flex-1">
                <NextDeliveries />
              </div>
              <button className="mt-6 w-full py-2.5 text-sm font-semibold text-[#1e3b8a] hover:bg-[#1e3b8a]/5 rounded-xl transition-all border border-transparent hover:border-[#1e3b8a]/10">
                Ver agenda completa
              </button>
            </motion.div>
          </div>

          {/* Recent Activities */}
          <motion.div 
            variants={itemVariants}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg">Últimas Atualizações de OS</h3>
              <button className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
                Ver todas
              </button>
            </div>
            <RecentOSUpdates />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
