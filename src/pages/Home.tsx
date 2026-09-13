import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Library,
  Heart,
  Briefcase,
  Laptop,
  Compass,
  GraduationCap,
  Calendar,
  Quote,
  Star,
  Plus,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ProgrammeCard from "../components/ProgrammeCard";
import EventCard from "../components/EventCard";
import {
  programmes,
  events,
  testimonials,
  stats,
  services,
} from "../lib/data";

export default function Home() {
  const featuredProgrammes = programmes.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);
  const quickServices = services.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-ember-400/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-mint-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink-900 text-cream-50 text-xs font-semibold mb-6 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-ember-400 animate-pulse" />
                Spring 2026 intake now open
                <ArrowUpRight size={14} />
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] leading-[0.95] font-bold text-ink-900 text-balance">
                Your years at{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-shimmer">Arcada</span>
                </span>
                ,
                <br />
                made simple.
              </h1>
              <p className="mt-7 text-lg sm:text-xl text-ink-900/70 leading-relaxed max-w-xl text-balance">
                Find a programme, settle into Helsinki, land your first job. The official
                student companion — built by Arcada students, for Arcada students.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/programmes"
                  className="shine group inline-flex items-center gap-2 rounded-full bg-ink-900 text-cream-50 px-7 py-4 font-semibold hover:bg-ember-500 transition-colors duration-300 shadow-xl shadow-ink-900/20"
                >
                  Explore programmes
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  to="/campus-life"
                  className="inline-flex items-center gap-2 rounded-full bg-cream-100 text-ink-900 px-7 py-4 font-semibold hover:bg-cream-200 transition-colors border border-ink-900/10"
                >
                  <Compass size={18} />
                  Get settled in Helsinki
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-900/60">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[
                      "/images/student-1.jpg",
                      "/images/student-2.jpg",
                      "/images/student-3.jpg",
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt=""
                        className="w-8 h-8 rounded-full ring-2 ring-cream-50 object-cover"
                      />
                    ))}
                  </div>
                  <span>
                    <strong className="text-ink-900 font-semibold">11,000+</strong> students
                    already here
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-ember-500 text-ember-500" />
                  ))}
                  <span className="ml-2">4.8/5 student satisfaction</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-ember-500 rounded-full mix-blend-multiply opacity-90" />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-mint-500 rounded-full mix-blend-multiply opacity-90" />
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden ring-8 ring-cream-50 shadow-2xl">
                  <img
                    src="/images/hero-campus.jpg"
                    alt="Students at Arcada campus"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -left-4 sm:-left-8 top-12 bg-cream-50 rounded-2xl shadow-2xl p-4 ring-1 ring-ink-900/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-mint-500 grid place-items-center text-cream-50">
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-ink-900/60">Career placements</div>
                      <div className="font-display font-bold text-lg">87% in 6 months</div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -right-4 sm:-right-8 bottom-16 bg-cream-50 rounded-2xl shadow-2xl p-4 ring-1 ring-ink-900/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-ember-500 grid place-items-center text-cream-50">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-ink-900/60">Spring 2026</div>
                      <div className="font-display font-bold text-lg">Apply by Mar 15</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats marquee */}
      <section className="bg-ink-900 py-10 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...stats, ...stats, ...stats].map((s, i) => (
            <div key={i} className="flex items-center gap-6 px-12">
              <div className="font-display text-4xl sm:text-5xl font-bold text-ember-400">
                {s.number}
              </div>
              <div className="text-cream-50/80 text-sm sm:text-base">{s.label}</div>
              <div className="w-2 h-2 rounded-full bg-ember-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Programmes */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <SectionHeader
              eyebrow="Programmes"
              title={
                <>
                  Pick a path.{" "}
                  <span className="italic font-medium text-ember-600">
                    We'll show you the way.
                  </span>
                </>
              }
              description="Bachelor's degrees in English, taught by researchers and practitioners in the heart of Helsinki."
            />
            <Link
              to="/programmes"
              className="inline-flex items-center gap-2 text-ink-900 font-semibold hover:text-ember-600 transition-colors self-start lg:self-end"
            >
              See all 14 programmes
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProgrammes.map((p) => (
              <ProgrammeCard key={p.id} programme={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick services */}
      <section className="py-24 bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Everyday services"
            title={
              <>
                Everything you need,{" "}
                <span className="italic font-medium text-ember-600">
                  right on campus.
                </span>
              </>
            }
            description="From library help to career coaching — support that meets you where you are."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickServices.map((s) => {
              const Icon =
                {
                  Library,
                  Briefcase,
                  Heart,
                  Laptop,
                }[s.icon as "Library" | "Briefcase" | "Heart" | "Laptop"] || Library;
              return (
                <Link
                  key={s.id}
                  to="/services"
                  className="group bg-cream-50 rounded-3xl p-6 border border-ink-900/5 hover:border-ink-900/30 transition-all hover:-translate-y-1"
                >
                  <div className="inline-grid place-items-center w-12 h-12 rounded-2xl bg-ink-900 text-cream-50 mb-4 group-hover:bg-ember-500 transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-ink-900/70 leading-relaxed mb-4">
                    {s.short}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-semibold text-ember-600">
                    Visit service
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Arcada */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-ink-900 hidden lg:block" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/students-studying.jpg"
                  alt=""
                  className="aspect-[3/4] object-cover rounded-3xl"
                />
                <div className="space-y-4 pt-12">
                  <img
                    src="/images/wellness.jpg"
                    alt=""
                    className="aspect-square object-cover rounded-3xl"
                  />
                  <img
                    src="/images/program-tech.jpg"
                    alt=""
                    className="aspect-[3/4] object-cover rounded-3xl"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-ember-500 text-cream-50 rounded-3xl p-6 max-w-[220px] shadow-2xl rotate-3">
                <div className="font-display text-3xl font-bold">1908</div>
                <div className="text-sm">
                  Helsinki institution turning 118 years young — and still reinventing.
                </div>
              </div>
            </div>

            <div className="text-cream-50">
              <SectionHeader
                eyebrow="Why Arcada"
                title={
                  <span className="text-cream-50">
                    Small enough to know your name.{" "}
                    <span className="italic text-ember-400 font-medium">
                      Big enough to launch your career.
                    </span>
                  </span>
                }
                description={
                  <span className="text-cream-50/70">
                    We sit in one of the happiest, safest capitals on Earth — and we design
                    every programme with industry partners so what you learn is what the
                    world actually needs.
                  </span>
                }
              />
              <div className="mt-10 space-y-5">
                {[
                  {
                    title: "Teachers who know your name",
                    body: "Average class size of 24, taught by researchers who still work in industry.",
                  },
                  {
                    title: "Real projects from day one",
                    body: "Every programme includes at least one full semester with an employer.",
                  },
                  {
                    title: "An international campus",
                    body: "80+ nationalities, English-taught programmes, free language courses.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-ember-500 text-cream-50 grid place-items-center font-display font-bold">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-semibold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-cream-50/70 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-24 lg:py-32 bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <SectionHeader
              eyebrow="What's on"
              title={
                <>
                  Things to do{" "}
                  <span className="italic font-medium text-ember-600">this term</span>.
                </>
              }
              description="From career fairs to film festivals — find your next reason to leave the library."
            />
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-ink-900 font-semibold hover:text-ember-600 transition-colors self-start lg:self-end"
            >
              Full events calendar
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="grid lg:grid-cols-1 gap-5">
            {upcomingEvents.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            eyebrow="In their words"
            title={
              <>
                Don't take our word{" "}
                <span className="italic font-medium text-ember-600">for it</span>.
              </>
            }
          />
          <div className="mt-16 grid lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-cream-100 rounded-3xl p-8 border border-ink-900/5"
              >
                <Quote
                  size={42}
                  className="absolute top-6 right-6 text-ember-500/20"
                  fill="currentColor"
                />
                <blockquote className="font-display text-xl text-ink-900 leading-snug text-balance">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 pt-6 border-t border-ink-900/10">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-cream-50"
                  />
                  <div>
                    <div className="font-semibold text-ink-900">{t.name}</div>
                    <div className="text-xs text-ink-900/60">{t.programme}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] bg-ink-900 text-cream-50 overflow-hidden p-10 sm:p-14 lg:p-20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-ember-500/30 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-mint-500/20 blur-3xl" />
            <div className="absolute inset-0 bg-noise opacity-20" />

            <div className="relative grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream-50/10 text-cream-50 text-xs font-semibold mb-6">
                  <Plus size={12} />
                  Get the weekly digest
                </div>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
                  One short email, every Monday morning.{" "}
                  <span className="italic text-ember-400">Everything that matters.</span>
                </h2>
                <p className="mt-5 text-cream-50/70 text-lg max-w-xl">
                  Programme deadlines, scholarships, free food on campus, weekend
                  events — curated by students, delivered before your first coffee.
                </p>
              </div>
              <div className="lg:col-span-5">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="bg-cream-50 rounded-3xl p-3 flex items-center gap-2 shadow-2xl"
                >
                  <input
                    type="email"
                    placeholder="your.email@arcada.fi"
                    className="flex-1 px-4 py-3 bg-transparent text-ink-900 placeholder:text-ink-900/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-ink-900 text-cream-50 px-6 py-3 rounded-full font-semibold hover:bg-ember-500 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-cream-50/60 mt-4 px-3">
                  We respect your inbox. Unsubscribe with one click — no hard feelings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
