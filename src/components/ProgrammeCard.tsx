import { Link } from "react-router-dom";
import { Clock, GraduationCap, Globe, ArrowUpRight } from "lucide-react";
import type { Programme } from "../lib/data";

export default function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <Link
      to="/programmes"
      className="group block bg-cream-100 rounded-3xl overflow-hidden border border-ink-900/5 hover:border-ink-900/20 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-300">
        <img
          src={programme.image}
          alt={programme.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-cream-50/95 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-ink-900">
          <span className="w-1.5 h-1.5 rounded-full bg-ember-500" />
          {programme.tag}
        </div>
        <div className="absolute top-4 right-4 w-10 h-10 grid place-items-center rounded-full bg-ink-900 text-cream-50 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
          <ArrowUpRight size={16} />
        </div>
      </div>
      <div className="p-6">
        <div className="text-xs uppercase tracking-wider text-ember-600 font-semibold mb-2">
          {programme.school}
        </div>
        <h3 className="font-display text-2xl font-bold leading-tight text-ink-900 text-balance">
          {programme.name}
        </h3>
        <p className="mt-3 text-sm text-ink-900/70 leading-relaxed line-clamp-2">
          {programme.description}
        </p>
        <div className="mt-5 grid grid-cols-3 gap-3 pt-5 border-t border-ink-900/10">
          <div className="flex items-center gap-2 text-xs text-ink-900/70">
            <Clock size={14} className="text-ember-500" />
            <span>{programme.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-ink-900/70">
            <GraduationCap size={14} className="text-ember-500" />
            <span>{programme.ects} ECTS</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-ink-900/70">
            <Globe size={14} className="text-ember-500" />
            <span>{programme.language}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
