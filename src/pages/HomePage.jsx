import Hero from "../components/Hero";
import StorySection from "../components/StorySection";
import ApproachSection from "../components/ApproachSection";
import MissionSection from "../components/MissionSection";
import CTAStrip from "../components/CTAStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StorySection />
      <ApproachSection />
      <MissionSection />
      <CTAStrip />
    </>
  );
}
