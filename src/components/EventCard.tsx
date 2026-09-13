import { Calendar, MapPin, Users, Clock } from "lucide-react";
import type { CampusEvent } from "../lib/data";

const categoryStyles: Record<string, string> = {
  Social: "bg-rose-100 text-rose-700",
  Academic: "bg-indigo-100 text-indigo-700",
  Career: "bg-emerald-100 text-emerald-700",
  Sports: "bg-lime-100 text-lime-700",
  Cultural: "bg-amber-100 text-amber-700",
  Workshop: "bg-sky-100 text-sky-700",
};

export default function EventCard({ event }: { event: CampusEvent }) {
  const date = new Date(event.date);
  const month = date.toLocaleString("en", { month: "short" }).toUpperCase();
  const day = date.getDate();
  const weekday = date.toLocaleString("en", { weekday: "short" });

  return (
    <div className="group bg-cream-100 rounded-3xl overflow-hidden border border-ink-900/5 hover:border-ink-900/20 transition-all hover:-translate-y-1">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-44 shrink-0 bg-ink-900 text-cream-50 p-6 flex sm:flex-col items-center justify-center gap-3">
          <div className="text-center">
            <div className="text-[10px] uppercase tracking-[0.2em] text-cream-50/60">
              {weekday}
            </div>
            <div className="font-display text-5xl font-bold leading-none">{day}</div>
            <div className="text-sm font-semibold text-ember-400 mt-1">{month}</div>
          </div>
        </div>
        <div className="flex-1 p-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className={`px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
                categoryStyles[event.category]
              }`}
            >
              {event.category}
            </span>
            {event.free && (
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-mint-500/15 text-mint-600">
                Free
              </span>
            )}
            {event.rsvp && (
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-ink-900/5 text-ink-900/70">
                RSVP
              </span>
            )}
          </div>
          <h3 className="font-display text-xl font-bold text-ink-900 mb-2 text-balance">
            {event.title}
          </h3>
          <p className="text-sm text-ink-900/70 line-clamp-2 mb-4">{event.description}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-900/60">
            <div className="flex items-center gap-1.5">
              <Clock size={12} className="text-ember-500" />
              {event.time}
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={12} className="text-ember-500" />
              {event.location}
            </div>
            <div className="flex items-center gap-1.5">
              <Users size={12} className="text-ember-500" />
              Open to all students
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
