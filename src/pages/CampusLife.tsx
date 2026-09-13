import { ArrowRight, Users, Compass, Coffee, Music2, Dumbbell, Palette } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { organisations, studentLifeCategories } from "../lib/data";

const helsinkiFacts = [
  { stat: "#1", label: "Most liveable city in the world (2024)" },
  { stat: "2.4M", label: "Saunas across the country" },
  { stat: "75%", label: "Forest and water within 30 min of campus" },
  { stat: "20 min", label: "Tram from campus to city centre" },
];

export default function CampusLife() {
  return (
    <>
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/helsinki.jpg"
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-cream-50/95 to-cream-50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-ember-500" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-ember-600">
                Helsinki campus · Arabiankatu district
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1] text-ink-900 text-balance">
              Where{" "}
              <span className="italic font-medium text-ember-600">saunas</span>, sagas
              and software engineering meet.
            </h1>
            <p className="mt-6 text-lg text-ink-900/70 max-w-2xl text-balance">
              Our campus sits between the Baltic Sea and Helsinki's trendiest
              neighbourhood. Here's how to make the most of it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {helsinkiFacts.map((f) => (
              <div
                key={f.label}
                className="bg-ink-900 text-cream-50 rounded-3xl p-7"
              >
                <div className="font-display text-5xl font-bold text-ember-400">
                  {f.stat}
                </div>
                <p className="mt-3 text-sm text-cream-50/80 leading-relaxed">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Eat, move, create"
            title={
              <>
                Your campus,{" "}
                <span className="italic font-medium text-ember-600">
                  your second home.
                </span>
              </>
            }
            description="From coffee with classmates to a Friday-night sauna — here's what daily life at Arcada looks like."
          />
          <div className="mt-14 space-y-12">
            {studentLifeCategories.map((cat, idx) => {
              const icons = [Coffee, Dumbbell, Palette, Users];
              const Icon = icons[idx] || Coffee;
              const reversed = idx % 2 === 1;
              return (
                <div
                  key={cat.title}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    reversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={reversed ? "lg:order-2" : ""}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-cream-300 shadow-2xl">
                      <img
                        src={cat.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-5 left-5 inline-grid place-items-center w-12 h-12 rounded-2xl bg-ink-900 text-cream-50">
                        <Icon size={20} />
                      </div>
                    </div>
                  </div>
                  <div className={reversed ? "lg:order-1" : ""}>
                    <div className="text-[11px] uppercase tracking-[0.2em] font-bold text-ember-600 mb-3">
                      0{idx + 1}
                    </div>
                    <h3 className="font-display text-4xl sm:text-5xl font-bold text-ink-900 mb-6 text-balance">
                      {cat.title}
                    </h3>
                    <ul className="space-y-4">
                      {cat.items.map((item) => (
                        <li
                          key={item.name}
                          className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-cream-100 transition-colors"
                        >
                          <div className="shrink-0 w-12 h-12 rounded-xl bg-cream-200 grid place-items-center text-ink-900 group-hover:bg-ember-500 group-hover:text-cream-50 transition-colors">
                            <Compass size={18} />
                          </div>
                          <div className="flex-1">
                            <div className="font-display text-lg font-bold text-ink-900">
                              {item.name}
                            </div>
                            <div className="text-sm text-ink-900/60 mt-0.5">
                              {item.note}
                            </div>
                          </div>
                          <ArrowRight
                            size={16}
                            className="mt-4 text-ink-900/30 group-hover:text-ember-500 group-hover:translate-x-1 transition-all"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream-100 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-[400px] h-[400px] rounded-full bg-ember-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            eyebrow="Get involved"
            title={
              <>
                30+ student orgs,{" "}
                <span className="italic font-medium text-ember-600">
                  one community.
                </span>
              </>
            }
            description="Clubs are where Arcada friendships are made. Here's a sample of what's waiting for you."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {organisations.map((org) => (
              <div
                key={org.id}
                className={`group relative ${org.color} rounded-3xl p-7 hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="text-5xl mb-3">{org.emoji}</div>
                <div className="text-[11px] uppercase tracking-wider font-bold text-ink-900/60 mb-2">
                  {org.category}
                </div>
                <h3 className="font-display text-2xl font-bold text-ink-900 mb-3 text-balance">
                  {org.name}
                </h3>
                <p className="text-ink-900/75 leading-relaxed text-sm mb-5">
                  {org.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-ink-900">
                    {org.members.toLocaleString()} members
                  </span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2rem] overflow-hidden">
            <img
              src="/images/graduation.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/30" />
            <div className="relative p-10 lg:p-16 max-w-2xl text-cream-50">
              <Music2 size={32} className="text-ember-400 mb-6" />
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-balance">
                Friday nights at Kupla.
              </h2>
              <p className="mt-4 text-cream-50/80 leading-relaxed text-lg">
                Our student-run nightclub. Cheap drinks, great DJs, and the kind of
                memories that turn into reunions a decade later.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ember-500 text-cream-50 px-6 py-3 font-semibold hover:bg-cream-50 hover:text-ink-900 transition-colors"
              >
                See what's on
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
