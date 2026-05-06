import FadeUp from "./motion/FadeUp";

const pillars = [
  {
    mark: "▲",
    title: "Whole-Body",
    body: "Your face is a reflection of your health. We assess gut, lifestyle, and stress alongside topical care so results last.",
  },
  {
    mark: "▽",
    title: "Corrective",
    body: "Specialized in acne, hyperpigmentation, and aging skin — with deep expertise in multicultural skin tones.",
  },
  {
    mark: "△",
    title: "Personalized",
    body: "Every protocol is built for you — anti-aging techniques, organic rituals, facial massage, and a homecare regimen designed around your skin.",
  },
];

export default function ApproachSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-bone">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="text-center text-xs tracking-[0.35em] uppercase text-clay mb-4">
            My Approach
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="text-center font-serif text-4xl md:text-5xl text-earth leading-tight max-w-2xl mx-auto">
            A whole body approach,
            <em className="italic font-light"> rooted in balance.</em>
          </h2>
        </FadeUp>

        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {pillars.map((p, i) => (
            <FadeUp key={p.title} delay={0.15 + i * 0.1}>
              <div className="text-center md:text-left">
                <div className="text-clay text-3xl mb-6 leading-none">
                  {p.mark}
                </div>
                <h3 className="font-serif text-2xl text-earth mb-3">
                  {p.title}
                </h3>
                <p className="text-ink/75 leading-relaxed">{p.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
