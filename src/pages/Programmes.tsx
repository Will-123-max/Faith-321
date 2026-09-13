import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, ArrowRight, Sparkles } from "lucide-react";
import ProgrammeCard from "../components/ProgrammeCard";
import SectionHeader from "../components/SectionHeader";
import { programmes } from "../lib/data";

const schools = [
  "All",
  "Business & Hospitality",
  "Health & Welfare",
  "Engineering & Technology",
  "Culture & Media",
];

export default function Programmes() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? programmes : programmes.filter((p) => p.school === active);

  return (
    <>
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-cream-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-ember-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-ember-500" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-ember-600">
                14 programmes in English
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1] text-ink-900 text-balance">
              Find the programme that{" "}
              <span className="italic font-medium text-ember-600">fits your story</span>.
            </h1>
            <p className="mt-6 text-lg text-ink-900/70 max-w-2xl text-balance">
              Every Arcada programme is built with industry partners, taught in English,
              and designed to launch your career in the Nordics and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 sticky top-20 z-30 bg-cream-50/80 backdrop-blur-xl border-y border-ink-900/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-sm font-semibold text-ink-900/70">
              <Filter size={14} />
              Filter by school
            </div>
            {schools.map((s) => (
              <button
                key={s}
                onClick={() => setActive(s)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active === s
                    ? "bg-ink-900 text-cream-50 shadow-lg"
                    : "bg-cream-100 text-ink-900 hover:bg-cream-200"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <ProgrammeCard programme={p} />
              </motion.div>
            ))}
          </motion.div>
          {filtered.length === 0 && (
            <div className="text-center py-16 text-ink-900/60">
              No programmes match this filter — try another school.
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How to apply"
            title={
              <>
                Three steps.{" "}
                <span className="italic font-medium text-ember-600">One big decision.</span>
              </>
            }
            description="Our admissions team reviews every application personally. Most students hear back within four weeks."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                title: "Choose your programme",
                body: "Read what you'll study, who teaches it, and where graduates land.",
              },
              {
                step: "02",
                title: "Submit your application",
                body: "Upload your certificates and proof of English during joint application windows.",
              },
              {
                step: "03",
                title: "Get welcomed in Helsinki",
                body: "Receive your offer, book your housing, and join Orientation Week in September.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="relative bg-cream-50 rounded-3xl p-8 border border-ink-900/5"
              >
                <div className="font-display text-6xl font-bold text-ember-500/20">
                  {s.step}
                </div>
                <h3 className="font-display text-2xl font-bold text-ink-900 mt-2">
                  {s.title}
                </h3>
                <p className="text-ink-900/70 mt-3 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <a
              href="#"
              className="shine group inline-flex items-center gap-2 rounded-full bg-ink-900 text-cream-50 px-8 py-4 font-semibold hover:bg-ember-500 transition-colors shadow-xl"
            >
              <Sparkles size={18} />
              Start your application
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
