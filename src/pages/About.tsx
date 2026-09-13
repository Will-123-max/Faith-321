import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  Target,
  Heart,
  Globe,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";

const values = [
  {
    icon: Target,
    title: "Practice-led learning",
    body: "Every programme includes real projects with real employers — because theory lands better when you've tried it.",
  },
  {
    icon: Heart,
    title: "Students first",
    body: "Our smallest committee is the student council, which has full veto power on academic decisions.",
  },
  {
    icon: Globe,
    title: "Nordic, but global",
    body: "We measure our success in graduates working around the world — and the relationships they keep with us.",
  },
];

const milestones = [
  { year: "1908", text: "Founded as a Swedish-speaking polytechnic in Helsinki." },
  { year: "1990s", text: "Becomes one of Finland's first UAS institutions." },
  { year: "2008", text: "Centenary — launches international, English-taught programmes." },
  { year: "2020", text: "First fully remote academic year. We learned. We adapted." },
  { year: "2024", text: "11,000+ students from 80+ countries. New campus wing opens." },
  { year: "2026", text: "Spring intake opens for the next generation." },
];

export default function About() {
  return (
    <>
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-cream-100 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-ember-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-ember-500" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-ember-600">
                About Arcada
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1] text-ink-900 text-balance">
              A 118-year-old university that{" "}
              <span className="italic font-medium text-ember-600">
                keeps reinventing.
              </span>
            </h1>
            <p className="mt-6 text-lg text-ink-900/70 max-w-2xl text-balance">
              We were founded by educators in 1908. We're still led by them today — with
              a student council that has real power, teachers who know your name, and a
              campus on the Baltic coast.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader
                eyebrow="Our story"
                title={
                  <>
                    From a polytechnic in 1908 to{" "}
                    <span className="italic font-medium text-ember-600">
                      tomorrow's graduates.
                    </span>
                  </>
                }
              />
              <div className="mt-10 relative pl-8 border-l-2 border-ember-500 space-y-7">
                {milestones.map((m) => (
                  <div key={m.year} className="relative">
                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-ember-500 ring-4 ring-cream-50" />
                    <div className="font-display text-2xl font-bold text-ink-900">
                      {m.year}
                    </div>
                    <p className="text-ink-900/70 leading-relaxed mt-1">{m.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/graduation.jpg"
                  alt="Arcada graduation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-ink-900 text-cream-50 rounded-3xl p-6 max-w-[260px] shadow-2xl">
                <Sparkles size={20} className="text-ember-400 mb-3" />
                <div className="font-display text-lg font-bold leading-snug">
                  Top 5% of Finnish universities for graduate employment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What we believe"
            title={
              <>
                Three values,{" "}
                <span className="italic font-medium text-ember-600">
                  one community.
                </span>
              </>
            }
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="bg-cream-50 rounded-3xl p-8 border border-ink-900/5"
              >
                <div className="inline-grid place-items-center w-14 h-14 rounded-2xl bg-ink-900 text-cream-50 mb-5">
                  <v.icon size={22} />
                </div>
                <div className="text-[11px] uppercase tracking-wider font-bold text-ember-600 mb-2">
                  0{i + 1}
                </div>
                <h3 className="font-display text-2xl font-bold text-ink-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-ink-900/70 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ink-900 text-cream-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-ember-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-ember-400" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-ember-400">
                  Get in touch
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-balance">
                Come visit, write to us, or just{" "}
                <span className="italic text-ember-400">drop in</span>.
              </h2>
              <p className="mt-5 text-cream-50/70 leading-relaxed">
                The Student Service Desk is open every weekday. No appointment needed.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-ember-500 grid place-items-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-cream-50/60 mb-1">
                      Visit
                    </div>
                    <div className="font-display text-lg font-semibold">
                      Jan Henrik Richardssonsgatan 6
                    </div>
                    <div className="text-cream-50/70">00550 Helsinki, Finland</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-ember-500 grid place-items-center">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-cream-50/60 mb-1">
                      Call
                    </div>
                    <div className="font-display text-lg font-semibold">
                      +358 207 699 600
                    </div>
                    <div className="text-cream-50/70">Mon–Fri 9–16 (EET)</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-ember-500 grid place-items-center">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-cream-50/60 mb-1">
                      Email
                    </div>
                    <div className="font-display text-lg font-semibold">
                      studentguide@arcada.app
                    </div>
                    <div className="text-cream-50/70">Reply within one working day</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="bg-cream-50 rounded-3xl p-7 lg:p-10 text-ink-900 space-y-5"
              >
                <div className="font-display text-2xl font-bold">
                  Send us a message
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs uppercase tracking-wider font-bold text-ink-900/60 mb-2 block">
                      Name
                    </span>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-2xl bg-cream-100 border border-ink-900/10 focus:border-ember-500 focus:outline-none"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs uppercase tracking-wider font-bold text-ink-900/60 mb-2 block">
                      Email
                    </span>
                    <input
                      type="email"
                      placeholder="you@arcada.fi"
                      className="w-full px-4 py-3 rounded-2xl bg-cream-100 border border-ink-900/10 focus:border-ember-500 focus:outline-none"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-xs uppercase tracking-wider font-bold text-ink-900/60 mb-2 block">
                    Topic
                  </span>
                  <select className="w-full px-4 py-3 rounded-2xl bg-cream-100 border border-ink-900/10 focus:border-ember-500 focus:outline-none">
                    <option>Admissions question</option>
                    <option>Programme content</option>
                    <option>Exchange & international</option>
                    <option>Student services</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-wider font-bold text-ink-900/60 mb-2 block">
                    Message
                  </span>
                  <textarea
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-2xl bg-cream-100 border border-ink-900/10 focus:border-ember-500 focus:outline-none resize-none"
                  />
                </label>
                <button
                  type="submit"
                  className="shine group inline-flex items-center gap-2 rounded-full bg-ink-900 text-cream-50 px-7 py-3.5 font-semibold hover:bg-ember-500 transition-colors"
                >
                  Send message
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-cream-200 to-cream-300 aspect-[16/6] relative">
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-ember-500 mx-auto mb-3" />
                <div className="font-display text-3xl font-bold">Arcada Campus</div>
                <div className="text-ink-900/70 mt-1">
                  Arabiankatu district, Helsinki
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ember-500 ring-8 ring-cream-50 animate-pulse" />
          </div>
        </div>
      </section>
    </>
  );
}
