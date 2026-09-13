import { Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="inline-grid place-items-center w-20 h-20 rounded-full bg-cream-200 mb-8">
          <MapPin size={32} className="text-ember-500" />
        </div>
        <div className="font-display text-[120px] sm:text-[180px] leading-none font-bold text-ink-900/10 -mb-10">
          404
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink-900 text-balance">
          Looks like this page is{" "}
          <span className="italic text-ember-600">off the map</span>.
        </h1>
        <p className="mt-5 text-ink-900/70 text-lg max-w-md mx-auto">
          The page you're looking for doesn't exist. Let's get you back to campus.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink-900 text-cream-50 px-7 py-4 font-semibold hover:bg-ember-500 transition-colors shadow-xl"
        >
          <ArrowLeft size={18} />
          Back to home
        </Link>
      </div>
    </section>
  );
}
