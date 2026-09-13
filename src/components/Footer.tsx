import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

const groups = [
  {
    title: "Study",
    links: [
      { label: "Programmes", to: "/programmes" },
      { label: "Apply", to: "/programmes" },
      { label: "Exchange", to: "/services" },
      { label: "Tuition & scholarships", to: "/resources" },
      { label: "Academic calendar", to: "/resources" },
    ],
  },
  {
    title: "Student life",
    links: [
      { label: "Campus services", to: "/services" },
      { label: "Events", to: "/events" },
      { label: "Clubs & orgs", to: "/campus-life" },
      { label: "Helsinki guide", to: "/campus-life" },
      { label: "Wellbeing", to: "/services" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Study tips", to: "/resources" },
      { label: "Career services", to: "/services" },
      { label: "IT helpdesk", to: "/services" },
      { label: "FAQ", to: "/resources" },
      { label: "Contact us", to: "/about" },
    ],
  },
  {
    title: "About Arcada",
    links: [
      { label: "Our story", to: "/about" },
      { label: "Research", to: "/about" },
      { label: "Sustainability", to: "/about" },
      { label: "Press", to: "/about" },
      { label: "Careers at Arcada", to: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-ember-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-mint-500/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-cream-50 grid place-items-center -rotate-3">
                <span className="font-display text-2xl text-ink-900 font-bold">
                  A
                </span>
              </div>
              <div>
                <div className="font-display text-2xl font-bold">Arcada</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-cream-50/60 font-medium">
                  Student Guide
                </div>
              </div>
            </div>
            <p className="mt-6 text-cream-50/70 leading-relaxed max-w-sm">
              The official companion for every Arcada student — built by students, with the
              university, to help you make the most of your time in Helsinki.
            </p>
            <div className="mt-8 space-y-3 text-sm text-cream-50/80">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-ember-400 shrink-0" />
                <span>Jani Henrik Richard Haglundin katu 6, 00550 Helsinki, Finland</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-ember-400 shrink-0" />
                <span>+358 207 699 600</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-ember-400 shrink-0" />
                <span>studentguide@arcada.app</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {groups.map((g) => (
              <div key={g.title}>
                <h3 className="font-display text-lg font-semibold mb-4 text-cream-50">
                  {g.title}
                </h3>
                <ul className="space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="group inline-flex items-center gap-1 text-sm text-cream-50/70 hover:text-ember-400 transition-colors"
                      >
                        {l.label}
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream-50/10 flex flex-col md:flex-row gap-6 md:items-center justify-between">
          <p className="text-sm text-cream-50/60">
            © {new Date().getFullYear()} Arcada University of Applied Sciences. Made with
            care by students and staff.
          </p>
          <div className="flex items-center gap-2">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Youtube, label: "YouTube" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="grid place-items-center w-10 h-10 rounded-full bg-cream-50/5 hover:bg-ember-500 hover:text-cream-50 transition-all"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
