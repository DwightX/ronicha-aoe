import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

function InstagramIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-earth text-cream/90 mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20 grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl italic">Air of Earth</p>
          <p className="text-sm tracking-[0.2em] uppercase mt-1 text-cream/60">
            Aesthetics — Ronicha
          </p>
          <p className="mt-6 text-cream/70 text-sm leading-relaxed max-w-xs">
            Your alchemy to overall wellness. A sanctuary rooted in whole-body
            skin healing.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-cream/60 mb-4">
            Visit
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-cream transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-cream transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-cream transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link to="/book" className="hover:text-cream transition-colors">
                Book a Session
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-cream/60 mb-4">
            Connect
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://www.instagram.com/airofearth.co/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 hover:text-cream transition-colors"
              >
                <InstagramIcon size={16} /> @airofearth.co
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@airofearth.co"
                className="inline-flex items-center gap-2 hover:text-cream transition-colors"
              >
                <Mail size={16} /> hello@airofearth.co
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs text-cream/50 leading-relaxed">
            By appointment only.
          </p>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-xs text-cream/50">
          <p>© {year} Air of Earth Aesthetics. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">
            Whole-body · Whole-skin · Whole-self
          </p>
        </div>
      </div>
    </footer>
  );
}
