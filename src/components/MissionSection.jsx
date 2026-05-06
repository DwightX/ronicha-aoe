import FadeUp from "./motion/FadeUp";
import TriangleDivider from "./TriangleDivider";
import treatmentImg from "../assets/ronicha-treatment-room.webp";

export default function MissionSection() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <FadeUp>
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={treatmentImg}
              alt="Ronicha at Air of Earth"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </FadeUp>
        <div>
          <FadeUp>
            <p className="text-xs tracking-[0.35em] uppercase text-clay mb-6">
              The Mission
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl text-earth leading-tight">
              <em className="italic font-light">Balance</em> is everything.
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-8 text-lg text-ink/75 leading-relaxed">
              A balanced skincare regimen using essential plant elements
              combined with clinical ingredients will transform and nurture the
              skin. But we cannot address surface-level issues without looking
              internally — our faces are a direct reflection of our health.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="mt-6 text-lg text-ink/75 leading-relaxed">
              Integrating the two allows for optimal results. Not only will your
              skin transform — your overall wellness will too.
            </p>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p className="mt-8 font-serif italic text-2xl text-earth">
              Air of Earth Aesthetics is your alchemy to overall wellness.
            </p>
          </FadeUp>
          <FadeUp delay={0.5}>
            <TriangleDivider className="mt-10 justify-start" />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
