import { Link } from "react-router-dom";
import FadeUp from "./motion/FadeUp";
import TriangleDivider from "./TriangleDivider";

export default function CTAStrip() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-earth text-cream relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative">
        <FadeUp>
          <TriangleDivider className="mb-10 [&_span]:bg-cream/30 [&_svg]:text-cream/60" />
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Begin a <em className="italic font-light">conversation.</em>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mt-6 text-cream/80 leading-relaxed max-w-xl mx-auto">
            Every meaningful path begins with a conversation. Reach out, I'd
            love to hear from you.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center mt-10 px-10 py-4 bg-cream text-earth tracking-[0.25em] text-xs uppercase hover:bg-sand transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
