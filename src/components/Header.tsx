import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Search, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/programmes", label: "Programmes" },
  { to: "/services", label: "Services" },
  { to: "/campus-life", label: "Campus life" },
  { to: "/events", label: "Events" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/80 backdrop-blur-xl border-b border-ink-900/10"
          : "bg-cream-50/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-ink-900 grid place-items-center rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <span className="font-display text-2xl text-ember-400 font-bold">
                  A
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-ember-500 rounded-full ring-2 ring-cream-50" />
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-xl font-bold leading-none text-ink-900">
                Arcada
              </div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink-900/60 font-medium">
                Student Guide
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? "text-ink-900"
                      : "text-ink-900/70 hover:text-ink-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="navPill"
                        className="absolute inset-0 bg-cream-200 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Search"
              className="hidden md:grid place-items-center w-10 h-10 rounded-full hover:bg-cream-200 transition-colors"
            >
              <Search size={18} />
            </button>
            <Link
              to="/programmes"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink-900 text-cream-50 px-5 py-2.5 text-sm font-semibold hover:bg-ember-500 transition-colors duration-200"
            >
              <Sparkles size={16} />
              Apply
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((s) => !s)}
              className="lg:hidden grid place-items-center w-11 h-11 rounded-full bg-ink-900 text-cream-50"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden overflow-hidden border-t border-ink-900/10"
          >
            <nav className="px-6 py-6 flex flex-col gap-2 bg-cream-100">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-2xl text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-ink-900 text-cream-50"
                        : "text-ink-900 hover:bg-cream-200"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/programmes"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ember-500 text-cream-50 px-5 py-3 text-base font-semibold"
              >
                <Sparkles size={16} />
                Apply now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
