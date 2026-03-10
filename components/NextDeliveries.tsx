import { Car, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const deliveries = [
  { id: 1, model: 'Toyota Corolla', plate: 'BRA2E24', time: '14:30', status: 'ready' },
  { id: 2, model: 'Honda Civic', plate: 'ABC1D23', time: '16:00', status: 'ready' },
  { id: 3, model: 'VW Golf', plate: 'XYZ9K88', time: '17:15', status: 'pending' },
  { id: 4, model: 'Jeep Compass', plate: 'JKL4M55', time: '18:00', status: 'pending' },
];

export function NextDeliveries() {
  return (
    <div className="space-y-4">
      {deliveries.map((delivery) => (
        <div 
          key={delivery.id} 
          className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer group"
        >
          <div className={cn(
            "p-2 rounded-lg transition-colors",
            delivery.status === 'ready' 
              ? "bg-green-100 text-green-600" 
              : "bg-[#1e3b8a]/10 text-[#1e3b8a]"
          )}>
            <Car className="size-5" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-slate-900">{delivery.model}</p>
            <p className="text-xs text-slate-500">{delivery.plate} • {delivery.time}</p>
          </div>
          <ChevronRight className="size-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
        </div>
      ))}
    </div>
  );
}
