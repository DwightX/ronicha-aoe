import { Link } from "react-router-dom";
import FadeUp from "./motion/FadeUp";
import TriangleDivider from "./TriangleDivider";

export default function StorySection() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <FadeUp>
          <TriangleDivider className="mb-10" />
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-xs tracking-[0.35em] uppercase text-clay mb-6">
            The Story
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <h2 className="font-serif text-4xl md:text-5xl text-earth leading-tight">
            Before I ever became a licensed esthetician,
            <em className="italic font-light"> I was the client.</em>
          </h2>
        </FadeUp>
        <FadeUp delay={0.25}>
          <p className="mt-8 text-lg text-ink/75 leading-relaxed">
            I dealt with melasma, acne, and hair loss — all while being told to
            try another product or prescription. But nothing worked, because
            nothing was addressing the root cause. That's when I stopped
            outsourcing my healing and started studying the body.
          </p>
        </FadeUp>
        <FadeUp delay={0.35}>
          <Link
            to="/about"
            className="inline-block mt-10 text-sm tracking-[0.25em] uppercase text-earth border-b border-earth/40 pb-1 hover:border-earth transition-colors"
          >
            Read the full story →
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
