import { useState, useMemo } from "react";
import { Filter, Calendar as CalIcon, ArrowRight } from "lucide-react";
import EventCard from "../components/EventCard";
import SectionHeader from "../components/SectionHeader";
import { events, calendarItems } from "../lib/data";

const categories = [
  "All",
  "Social",
  "Academic",
  "Career",
  "Sports",
  "Cultural",
  "Workshop",
];

export default function Events() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () =>
      active === "All"
        ? events
        : events.filter((e) => e.category === active),
    [active]
  );

  const nextEvent = events[0];

  return (
    <>
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-cream-100 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-rose-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-ember-500" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-ember-600">
                Spring 2026 calendar
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1] text-ink-900 text-balance">
              Things to do,{" "}
              <span className="italic font-medium text-ember-600">people to meet</span>.
            </h1>
            <p className="mt-6 text-lg text-ink-900/70 max-w-2xl text-balance">
              Our events calendar is run by students, for students. Filter by what
              you're into — there's something happening almost every day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-sm font-semibold text-ink-900/70">
              <Filter size={14} />
              Filter by category
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

      {nextEvent && (
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[2rem] overflow-hidden bg-ink-900 text-cream-50">
              <img
                src={nextEvent.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-transparent" />
              <div className="relative p-8 lg:p-14 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ember-500 text-cream-50 text-xs font-bold uppercase tracking-wider mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream-50 animate-pulse" />
                  Next up
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                  {nextEvent.title}
                </h2>
                <p className="mt-4 text-cream-50/80 leading-relaxed">
                  {nextEvent.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream-50/80">
                  <div>
                    <span className="text-ember-400 font-semibold">When</span>{" "}
                    {new Date(nextEvent.date).toLocaleDateString("en", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    · {nextEvent.time}
                  </div>
                  <div>
                    <span className="text-ember-400 font-semibold">Where</span>{" "}
                    {nextEvent.location}
                  </div>
                </div>
                <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream-50 text-ink-900 px-6 py-3 font-semibold hover:bg-ember-500 hover:text-cream-50 transition-colors">
                  RSVP now
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-5">
              <h2 className="font-display text-3xl font-bold mb-6">All events</h2>
              {filtered.map((e) => (
                <EventCard key={e.id} event={e} />
              ))}
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 bg-cream-100 rounded-3xl p-7 border border-ink-900/5">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-ink-900 text-cream-50 grid place-items-center">
                    <CalIcon size={18} />
                  </div>
                  <h3 className="font-display text-xl font-bold">Key dates</h3>
                </div>
                <ul className="space-y-3.5">
                  {calendarItems.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className="shrink-0 w-16 font-display font-bold text-ember-600">
                        {c.date}
                      </div>
                      <div className="text-ink-900/80 leading-snug">{c.event}</div>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full rounded-full bg-ink-900 text-cream-50 py-3 font-semibold hover:bg-ember-500 transition-colors text-sm">
                  Add to calendar
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            eyebrow="Host your own"
            title={
              <>
                Got an event idea?{" "}
                <span className="italic font-medium text-ember-600">
                  We'll back it.
                </span>
              </>
            }
            description="Student organisations can apply for funding, room bookings and promotion support for any event that brings campus together."
          />
          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 text-cream-50 px-7 py-4 font-semibold hover:bg-ember-500 transition-colors"
            >
              Submit your event proposal
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
