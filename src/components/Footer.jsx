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

function LinkedInIcon({ size = 16 }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-earth text-cream/90 mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20 grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl italic">Ronicha</p>
          <p className="text-xs tracking-[0.25em] uppercase mt-2 text-cream/60">
            Las Vegas, Nevada
          </p>
          <p className="mt-6 text-cream/70 text-sm leading-relaxed max-w-xs">
            Medical esthetician · brand educator · wellness strategist.
            Helping women return to balance, and partnering with the industry
            through education, speaking, and brand work.
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
              <Link to="/contact" className="hover:text-cream transition-colors">
                Contact
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
                href="https://www.linkedin.com/in/ronicha-palmer/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 hover:text-cream transition-colors"
              >
                <LinkedInIcon size={16} /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/airofearth.co/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 hover:text-cream transition-colors"
              >
                <InstagramIcon size={16} /> Instagram
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 hover:text-cream transition-colors"
              >
                <Mail size={16} /> Send a message
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-xs text-cream/50">
          <p>© {year} Ronicha. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">
            Whole-body · Whole-self · Whole-life
          </p>
        </div>
      </div>
    </footer>
  );
}
