import { Link } from "react-router-dom";
import FadeUp from "../components/motion/FadeUp";
import TriangleDivider from "../components/TriangleDivider";
import portrait from "../assets/ronicha-shelves.webp";
import glow from "../assets/ronicha-glow.webp";

export default function AboutPage() {
  return (
    <>
      <section className="px-6 md:px-10 pt-24 md:pt-32 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <FadeUp>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={portrait}
                alt="Ronicha"
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </FadeUp>
          <div>
            <FadeUp>
              <p className="text-xs tracking-[0.35em] uppercase text-clay mb-6">
                About · Ronicha
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="font-serif text-5xl md:text-6xl text-earth leading-[1.05]">
                Medical esthetician. Brand educator.
                <em className="italic font-light"> Wellness strategist.</em>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-8 text-lg text-ink/75 leading-relaxed">
                Ronicha is a medical esthetician and holistic wellness
                strategist based in Las Vegas. She works with women, including
                celebrities and athletes, on healing that begins from the
                inside out, and shares her expertise with the industry through
                education, speaking, and brand collaborations.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="mt-6 text-lg text-ink/75 leading-relaxed">
                Her work is grounded in results, lived experience, and an
                unwavering belief in the body's intelligence. Whether you're
                navigating a season of overwhelm, a health concern, or a
                deeper longing for alignment, the work is designed to meet you
                there.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <TriangleDivider className="mb-10" />
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-center text-xs tracking-[0.35em] uppercase text-clay mb-6">
              The Story
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <h2 className="text-center font-serif text-4xl md:text-5xl text-earth leading-tight">
              Before I ever guided others,
              <em className="italic font-light"> I was the one searching.</em>
            </h2>
          </FadeUp>

          <div className="mt-12 space-y-6 text-lg text-ink/80 leading-relaxed">
            <FadeUp delay={0.05}>
              <p>
                I dealt with melasma, acne, and hair loss, all while being told
                to try another product or prescription. But nothing worked,
                because nothing was addressing the root cause.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p>
                That's when I stopped outsourcing my healing and started
                studying the body: gut health, herbalism, energetics, and
                deeper, ancestral approaches to wellness.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p>
                That journey led me into a sacred practice rooted in whole-body
                healing. Everything I share, from rituals to protocols, is
                something I've tested, lived, and trusted in my own body.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p>
                The path itself was unexpected. I'm a Florida State alumna who
                spent a year and a half teaching English in South Korea, a
                chapter that quietly reshaped how I think about beauty, ritual,
                and rest, and planted the seeds for everything that came next.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="font-serif italic text-2xl text-earth pt-4">
                This work came to me not as a business idea, but as a divine
                calling.
              </p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <p>
                One night, in a dream that felt more like a spiritual
                initiation, a shamanic presence visited me. I was shown visions
                of healing, sacred rituals, and a deep balance between breath
                and body. It was clear: I wasn't just building a practice. I
                was being given a path.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p>
                Since that moment, this calling has taken on a life of its own.
                It continues to reveal itself as a living, breathing practice,
                intricately connected to nature, spirit, and the women I'm meant
                to serve. Every conversation, every transformation, every
                synchronicity reaffirms that this path was divinely designed.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 md:py-28 bg-bone">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="md:order-2">
            <FadeUp>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={glow}
                  alt="Ronicha"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </FadeUp>
          </div>
          <div className="md:order-1">
            <FadeUp>
              <p className="text-xs tracking-[0.35em] uppercase text-clay mb-6">
                The Practice
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl text-earth leading-tight">
                Healing as a way of
                <em className="italic font-light"> living.</em>
              </h2>
            </FadeUp>
            <div className="mt-8 space-y-5 text-ink/75 leading-relaxed">
              <FadeUp delay={0.15}>
                <p>
                  My work is built on a simple belief: the body knows how to
                  heal when it's met with the right care, the right rhythm, and
                  the right reverence. Wellness isn't a regimen. It's a way of
                  being.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p>
                  Breath is a primary nutrient. Without it, we simply cannot
                  live. It's been called a reflection of the spirit; the
                  Chinese refer to it as Qi. Tending to breath is tending to
                  life.
                </p>
              </FadeUp>
              <FadeUp delay={0.25}>
                <p>
                  And the earth sustains us through what we eat, how we move,
                  and how we give of ourselves to one another. Coming back into
                  alignment with the natural world is, for me, the foundation
                  of healing.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p>
                  Balance is everything. When the parts of you are evenly held,
                  the weight of life becomes lighter to carry.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="text-center text-xs tracking-[0.35em] uppercase text-clay mb-6">
              Selected Work
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-center font-serif text-4xl md:text-5xl text-earth leading-tight">
              Years of building, teaching,
              <em className="italic font-light"> and showing up.</em>
            </h2>
          </FadeUp>

          <div className="mt-16 space-y-0">
            <FadeUp delay={0.05}>
              <div className="grid md:grid-cols-[160px_1fr] gap-3 md:gap-10 border-t border-sand/60 py-8">
                <p className="text-xs tracking-[0.25em] uppercase text-clay md:pt-1">
                  2024
                </p>
                <div>
                  <p className="font-serif text-2xl text-earth leading-snug">
                    Esthetician Masterclass · BET
                  </p>
                  <p className="mt-2 text-ink/75 leading-relaxed">
                    Guest educator for the BET masterclass series in
                    California, sharing advanced clinical practice with the
                    next generation of skincare professionals.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="grid md:grid-cols-[160px_1fr] gap-3 md:gap-10 border-t border-sand/60 py-8">
                <p className="text-xs tracking-[0.25em] uppercase text-clay md:pt-1">
                  2023
                </p>
                <div>
                  <p className="font-serif text-2xl text-earth leading-snug">
                    Brand Ambassador & Educator · Zemits Esthetics
                  </p>
                  <p className="mt-2 text-ink/75 leading-relaxed">
                    Represented Zemits at IECSC Las Vegas with live demos,
                    practitioner training on device protocols, and ROI
                    consultations with medspa owners alongside product
                    leadership.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="grid md:grid-cols-[160px_1fr] gap-3 md:gap-10 border-t border-sand/60 py-8">
                <p className="text-xs tracking-[0.25em] uppercase text-clay md:pt-1">
                  2020 – Present
                </p>
                <div>
                  <p className="font-serif text-2xl text-earth leading-snug">
                    Founder · Director of Education & Brand Development
                  </p>
                  <p className="mt-2 text-ink/75 leading-relaxed">
                    Built and scaled a results-driven aesthetics and wellness
                    practice for multicultural clients, with a focus on
                    long-term outcomes through corrective care, internal
                    wellness, and lifestyle integration.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="grid md:grid-cols-[160px_1fr] gap-3 md:gap-10 border-t border-b border-sand/60 py-8">
                <p className="text-xs tracking-[0.25em] uppercase text-clay md:pt-1">
                  2016 – 2018
                </p>
                <div>
                  <p className="font-serif text-2xl text-earth leading-snug">
                    International English Instructor · South Korea
                  </p>
                  <p className="mt-2 text-ink/75 leading-relaxed">
                    Two years across Linkus Academy and CHUNGDAHM Learning.
                    Teaching, mentoring, and laying the foundation of a
                    lifelong love of education.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.25}>
            <p className="mt-12 text-center text-xs tracking-[0.3em] uppercase text-clay">
              B.S. Marketing · Florida State University, 2016
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="text-center text-xs tracking-[0.35em] uppercase text-clay mb-6">
              My Approach
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-center font-serif text-4xl md:text-5xl text-earth leading-tight">
              A whole-body assessment of
              <em className="italic font-light"> your specific needs.</em>
            </h2>
          </FadeUp>
          <div className="mt-12 space-y-6 text-lg text-ink/80 leading-relaxed text-center md:text-left">
            <FadeUp delay={0.05}>
              <p>
                I take a whole-body approach when meeting each woman where she
                is, listening for what's underneath the surface, and working
                with her to restore optimal function.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p>
                My focus is corrective wellness for women navigating imbalance:
                physically, emotionally, and energetically.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p>
                I offer personalized rituals, organic protocols, gentle
                bodywork, and customized practices designed for ongoing care.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.25}>
            <div className="mt-14 text-center">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-10 py-4 bg-earth text-cream tracking-[0.25em] text-xs uppercase hover:bg-clay transition-colors duration-300"
              >
                Begin a Conversation
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
