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
                alt="Ronicha — Founder of Air of Earth Aesthetics"
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
                About — Ronicha
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="font-serif text-5xl md:text-6xl text-earth leading-[1.05]">
                Owner. Licensed esthetician.
                <em className="italic font-light"> Sanctuary keeper.</em>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-8 text-lg text-ink/75 leading-relaxed">
                Ronicha is the owner and Licensed Esthetician of Air of Earth
                Aesthetics, specializing in corrective skin and bodycare for
                multicultural skin. Our primary goal is results-driven skincare,
                and we educate every client on a healthier lifestyle to
                encourage optimal skin health.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="mt-6 text-lg text-ink/75 leading-relaxed">
                If you are suffering from hyperpigmentation, acne, fine lines or
                wrinkles — we provide advanced facial treatments to help achieve
                your skincare goals.
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
              Before I ever became a licensed esthetician,
              <em className="italic font-light"> I was the client.</em>
            </h2>
          </FadeUp>

          <div className="mt-12 space-y-6 text-lg text-ink/80 leading-relaxed">
            <FadeUp delay={0.05}>
              <p>
                I dealt with melasma, acne, and hair loss… all while being told
                to try another product or prescription. But nothing worked —
                because nothing was addressing the root cause.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p>
                That's when I stopped outsourcing my healing and started
                studying the body — gut health, herbalism, skin energetics, and
                deeper, ancestral approaches to wellness.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p>
                That journey led me to create Air of Earth Aesthetics, a sacred
                space rooted in whole-body skin healing. Everything I share —
                from treatments to protocols — is something I've tested, lived,
                and trusted in my own body.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="font-serif italic text-2xl text-earth pt-4">
                Air of Earth came to me not as a business idea, but as a divine
                message.
              </p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <p>
                One night, in a dream that felt more like a spiritual
                initiation, a shamanic presence visited me — I was shown visions
                of healing, sacred rituals, and a balance between breath (air)
                and body (earth). It was clear: I wasn't just building a brand.
                I was birthing a sanctuary.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p>
                Since that moment, Air of Earth has taken on a life of its own.
                It continues to reveal itself as a living, breathing entity —
                one that is intricately connected to nature, spirit, and the
                women I'm meant to serve. Every client, every transformation,
                every synchronicity reaffirms that this path was divinely
                designed.
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
                  alt="Ronicha at the treatment room"
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
                Symbolism
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl text-earth leading-tight">
                Air, earth, and the
                <em className="italic font-light"> elements of life.</em>
              </h2>
            </FadeUp>
            <div className="mt-8 space-y-5 text-ink/75 leading-relaxed">
              <FadeUp delay={0.15}>
                <p>
                  At the time of the dream, I did not know what these symbols
                  meant — but upon waking, I would find that the triangles were
                  the elements of <em className="italic">air</em> and{" "}
                  <em className="italic">earth</em>. From science, we know that
                  elements cannot be broken down: they are the simplest form of
                  matter. In essence, elements are the foundation of human life.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p>
                  Air is literally a breath of life — our primary nutrient, and
                  without it, we simply cannot live. Breath has been known as a
                  reflection of the spirit. The Chinese refer to it as Qi.
                  Air also represents lightheartedness and playfulness.
                </p>
              </FadeUp>
              <FadeUp delay={0.25}>
                <p>
                  Earth is how we sustain ourselves — on a cellular level with
                  vegetables and fruit, and on a deeper level through our
                  ability to connect and give to others.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p>
                  The triangles represent strength and, most importantly,
                  balance. Any weight placed on them is evenly distributed
                  between all three sides.
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
                I take a whole body approach when assessing each client's
                specific needs, locating their issues, and working with them to
                restore optimal function.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p>
                I specialize in corrective skincare for those that suffer with
                acne, hyperpigmentation, and aging skin.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p>
                I provide personalized anti-aging techniques, organic rituals
                for the skin and body, tension relief, facial massage, and
                customized home-care regimens.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.25}>
            <div className="mt-14 text-center">
              <Link
                to="/book"
                className="inline-flex justify-center items-center px-10 py-4 bg-earth text-cream tracking-[0.25em] text-xs uppercase hover:bg-clay transition-colors duration-300"
              >
                Begin with a Consultation
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
