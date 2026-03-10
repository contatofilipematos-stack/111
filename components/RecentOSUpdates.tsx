import { cn } from '@/lib/utils';

const updates = [
  { 
    id: '#2045', 
    vehicle: 'Fiat Toro (QPR-4432)', 
    service: 'Troca de pastilhas', 
    status: 'Em Manutenção', 
    value: 'R$ 450,00',
    statusType: 'warning'
  },
  { 
    id: '#2044', 
    vehicle: 'Ford Ranger (LIZ-2010)', 
    service: 'Revisão 40.000km', 
    status: 'Aguardando Peças', 
    value: 'R$ 1.890,00',
    statusType: 'info'
  },
  { 
    id: '#2043', 
    vehicle: 'Hyundai HB20 (BAA-1212)', 
    service: 'Alinhamento/Balanceamento', 
    status: 'Pronta', 
    value: 'R$ 180,00',
    statusType: 'success'
  },
];

export function RecentOSUpdates() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-slate-400 border-b border-slate-100">
            <th className="pb-4 font-medium">OS #</th>
            <th className="pb-4 font-medium">Veículo</th>
            <th className="pb-4 font-medium">Serviço</th>
            <th className="pb-4 font-medium">Status</th>
            <th className="pb-4 font-medium">Valor Est.</th>
            <th className="pb-4 font-medium text-right">Ação</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {updates.map((update) => (
            <tr key={update.id} className="group hover:bg-slate-50/50 transition-colors">
              <td className="py-4 font-medium text-slate-900">{update.id}</td>
              <td className="py-4 text-slate-600">{update.vehicle}</td>
              <td className="py-4 text-slate-600">{update.service}</td>
              <td className="py-4">
                <span className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-bold",
                  update.statusType === 'warning' && "bg-orange-100 text-orange-600",
                  update.statusType === 'info' && "bg-blue-100 text-blue-600",
                  update.statusType === 'success' && "bg-green-100 text-green-600"
                )}>
                  {update.status}
                </span>
              </td>
              <td className="py-4 text-slate-900 font-medium">{update.value}</td>
              <td className="py-4 text-right">
                <button className="text-[#1e3b8a] font-semibold hover:underline transition-all">
                  Ver Detalhes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
