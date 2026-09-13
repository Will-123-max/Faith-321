import { useState } from "react";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { resources, faqs } from "../lib/data";
import { iconMap } from "../lib/icons";
import type { LucideIcon } from "lucide-react";

const resourceCategories = [
  "All",
  "Getting started",
  "Study skills",
  "Academic writing",
  "IT & Tools",
  "Practical life",
  "Wellbeing",
  "Career",
];

export default function Resources() {
  const [active, setActive] = useState("All");
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filteredResources = resources.filter(
    (r) =>
      (active === "All" || r.category === active) &&
      (search === "" ||
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase()))
  );

  const filteredFaqs = faqs.filter(
    (f) =>
      search === "" ||
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-cream-100 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-mint-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-ember-500" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-ember-600">
                Student toolkit
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1] text-ink-900 text-balance">
              Templates, guides{" "}
              <span className="italic font-medium text-ember-600">
                & answers.
              </span>
            </h1>
            <p className="mt-6 text-lg text-ink-900/70 max-w-2xl text-balance">
              Everything we wish someone had told us in week one — gathered in one place
              by students who learned the hard way.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream-50 sticky top-20 z-30 border-y border-ink-900/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="relative max-w-xl">
            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-ink-900/40"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search resources, guides, FAQs…"
              className="w-full pl-12 pr-5 py-4 rounded-full bg-cream-100 border border-ink-900/10 focus:border-ember-500 focus:outline-none transition-colors"
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {resourceCategories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active === c
                    ? "bg-ink-900 text-cream-50"
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
          <h2 className="font-display text-3xl font-bold mb-10">Toolkit</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredResources.map((r) => {
              const Icon: LucideIcon = iconMap[r.icon] || iconMap.BookOpen;
              return (
                <div
                  key={r.id}
                  className="group bg-cream-100 rounded-3xl p-6 border border-ink-900/5 hover:border-ink-900/20 transition-all hover:-translate-y-1 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="inline-grid place-items-center w-12 h-12 rounded-2xl bg-ink-900 text-cream-50 group-hover:bg-ember-500 transition-colors">
                      <Icon size={20} />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-ember-600">
                      {r.type}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink-900 mb-2 text-balance">
                    {r.title}
                  </h3>
                  <p className="text-sm text-ink-900/70 leading-relaxed mb-5">
                    {r.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-900/50">{r.readTime}</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          {filteredResources.length === 0 && (
            <div className="text-center py-16 text-ink-900/60">
              No resources found. Try a different keyword.
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-cream-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title={
              <>
                The questions we get{" "}
                <span className="italic font-medium text-ember-600">
                  every week.
                </span>
              </>
            }
          />
          <div className="mt-12 space-y-3">
            {filteredFaqs.map((f) => (
              <div
                key={f.id}
                className="bg-cream-50 rounded-2xl overflow-hidden border border-ink-900/5"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === f.id ? null : f.id)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-cream-200/40 transition-colors"
                >
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-bold text-ember-600 mb-1">
                      {f.category}
                    </div>
                    <div className="font-display text-lg sm:text-xl font-bold text-ink-900">
                      {f.question}
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-ink-900/50 transition-transform ${
                      openFaq === f.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === f.id && (
                  <div className="px-6 pb-6 text-ink-900/75 leading-relaxed">
                    {f.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-ink-900/70 mb-4">Still have questions?</p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-cream-50 px-7 py-3 font-semibold hover:bg-ember-500 transition-colors"
            >
              Contact student services
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
