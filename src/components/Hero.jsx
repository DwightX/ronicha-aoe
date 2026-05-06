import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "../assets/hero-ronicha.webp";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);

  return (
    <section
      ref={ref}
      className="relative min-h-[88vh] md:min-h-screen flex items-center overflow-hidden bg-cream"
    >
      <div className="grid md:grid-cols-2 w-full max-w-7xl mx-auto">
        <div className="order-2 md:order-1 px-6 md:px-12 lg:px-20 py-16 md:py-0 flex items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            }}
            className="max-w-lg"
          >
            <motion.p
              variants={item}
              className="text-xs tracking-[0.35em] uppercase text-clay mb-6"
            >
              Ronicha
            </motion.p>
            <motion.h1
              variants={item}
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-earth leading-[1.05] tracking-tight"
            >
              A sanctuary
              <br />
              for <em className="italic font-light">whole-body</em>
              <br />
              healing.
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-8 text-base md:text-lg text-ink/75 leading-relaxed max-w-md"
            >
              I'm Ronicha, a Las Vegas-based medical esthetician, brand
              educator, and wellness strategist. I guide women (including
              celebrities and athletes) back to balance from the inside out.
            </motion.p>
            <motion.div
              variants={item}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-8 py-4 bg-earth text-cream tracking-[0.2em] text-xs uppercase hover:bg-clay transition-colors duration-300"
              >
                Get in Touch
              </Link>
              <Link
                to="/about"
                className="inline-flex justify-center items-center px-8 py-4 border border-earth/40 text-earth tracking-[0.2em] text-xs uppercase hover:bg-earth hover:text-cream transition-all duration-300"
              >
                Read the Story
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="order-1 md:order-2 relative h-[60vh] md:h-screen overflow-hidden">
          <motion.div
            style={{ y, opacity }}
            className="absolute inset-0 -top-[5%] -bottom-[5%]"
          >
            <img
              src={heroImg}
              alt="Ronicha"
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/0 to-transparent md:via-transparent" />
        </div>
      </div>
    </section>
  );
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};
