import type { LucideIcon } from "lucide-react";
import type { Service } from "../lib/data";
import { iconMap } from "../lib/icons";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon: LucideIcon = iconMap[service.icon] || iconMap.BookOpen;
  return (
    <div className="group relative bg-cream-100 rounded-3xl p-7 border border-ink-900/5 hover:border-ink-900/20 transition-all hover:-translate-y-1 overflow-hidden">
      <div
        className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${service.color} opacity-60 group-hover:scale-125 transition-transform duration-700`}
      />
      <div className="relative">
        <div className="inline-grid place-items-center w-14 h-14 rounded-2xl bg-ink-900 text-cream-50 mb-5 group-hover:bg-ember-500 transition-colors">
          <Icon size={22} />
        </div>
        <span className="block text-[11px] uppercase tracking-[0.18em] font-bold text-ember-600 mb-2">
          {service.category}
        </span>
        <h3 className="font-display text-2xl font-bold text-ink-900 mb-3 text-balance">
          {service.title}
        </h3>
        <p className="text-sm text-ink-900/70 leading-relaxed mb-5">{service.short}</p>
        <div className="space-y-1.5 text-xs text-ink-900/60 border-t border-ink-900/10 pt-4">
          <div className="flex items-center gap-2">
            <Clock size={12} className="text-ember-500 shrink-0" />
            {service.hours}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-ember-500 shrink-0" />
            {service.location}
          </div>
        </div>
        <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 hover:text-ember-600 transition-colors group/btn">
          Learn more
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        </button>
      </div>
    </div>
  );
}
