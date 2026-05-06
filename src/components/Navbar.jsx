import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  // { to: "/services", label: "Services" },
  // { to: "/book", label: "Book" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled || open
            ? "bg-cream/90 backdrop-blur-md border-b border-sand/40"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl text-earth tracking-wide"
          >
            <span className="italic">Air of Earth</span>
            <span className="text-clay"> · </span>
            <span className="text-sm tracking-[0.2em] uppercase">Ronicha</span>
          </Link>

          <ul className="hidden md:flex items-center gap-10 text-sm tracking-[0.15em] uppercase text-ink/80">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `transition-colors hover:text-earth ${
                      isActive ? "text-earth" : ""
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              {/* <Link
                to="/book"
                className="ml-4 inline-flex items-center px-5 py-2.5 bg-earth text-cream tracking-[0.2em] text-xs uppercase hover:bg-clay transition-colors duration-300"
              >
                Book Now
              </Link> */}
            </li>
          </ul>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden text-earth p-2 -mr-2"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-30 bg-cream pt-24 px-6"
          >
            <ul className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.5 }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block py-4 font-serif text-3xl text-earth border-b border-sand/40 ${
                        isActive ? "italic" : ""
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * links.length + 0.1, duration: 0.5 }}
                className="pt-8"
              >
                <Link
                  to="/book"
                  onClick={closeMenu}
                  className="inline-flex w-full justify-center items-center px-6 py-4 bg-earth text-cream tracking-[0.2em] text-xs uppercase"
                >
                  Book a Session
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
