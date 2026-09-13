import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Check } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../lib/data";

const categories = [
  "All",
  "Academic",
  "Career",
  "Wellbeing",
  "IT",
  "Student Life",
];

export default function Services() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <>
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-cream-100 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-mint-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-ember-500" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-ember-600">
                25+ campus services
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1] text-ink-900 text-balance">
              Help, when you need it.{" "}
              <span className="italic font-medium text-ember-600">
                Free, in English.
              </span>
            </h1>
            <p className="mt-6 text-lg text-ink-900/70 max-w-2xl text-balance">
              Whether you need a CV review, a quiet room, or a laptop charger — we've
              got a service for that.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-cream-50 border-y border-ink-900/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-sm font-semibold text-ink-900/70">
              <Filter size={14} />
              Browse by category
            </div>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active === c
                    ? "bg-ink-900 text-cream-50 shadow-lg"
                    : "bg-cream-100 text-ink-900 hover:bg-cream-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((s, i) => (
              <motion.div
                key={s.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <ServiceCard service={s} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-ink-900 text-cream-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-ember-400" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-ember-400">
                  Did you know?
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-balance">
                Every service is{" "}
                <span className="italic text-ember-400">free</span> with your student card.
              </h2>
              <p className="mt-5 text-cream-50/70 leading-relaxed">
                That's your tuition at work. We believe asking for help should never feel
                expensive.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                "1:1 career coaching",
                "Counselling in English",
                "IT helpdesk & software licenses",
                "Subject librarian research help",
                "Peer tutoring in 25+ subjects",
                "Free language courses",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-ember-500 grid place-items-center">
                    <Check size={14} className="text-cream-50" strokeWidth={3} />
                  </div>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
