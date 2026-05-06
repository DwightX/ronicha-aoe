import FadeUp from "../components/motion/FadeUp";
import TriangleDivider from "../components/TriangleDivider";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className="px-6 md:px-10 pt-24 md:pt-32 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p className="text-xs tracking-[0.35em] uppercase text-clay mb-6">
              Get in Touch
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-serif text-5xl md:text-6xl text-earth leading-[1.05]">
              Begin a
              <em className="italic font-light"> conversation.</em>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-8 text-lg text-ink/75 leading-relaxed">
              Whether it's a question, a collaboration, or simply a hello, I'd
              love to hear from you. Send a note and I'll respond personally.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <TriangleDivider className="mt-12" />
          </FadeUp>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto">
          <FadeUp delay={0.1}>
            <ContactForm />
          </FadeUp>
        </div>
      </section>
    </>
  );
}
