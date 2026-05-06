import Hero from "../components/Hero";
import StorySection from "../components/StorySection";
// import ApproachSection from "../components/ApproachSection";
import MissionSection from "../components/MissionSection";
// import ServicesGrid from "../components/ServicesGrid";
import CTAStrip from "../components/CTAStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StorySection />
      {/* <ApproachSection /> */}
      <MissionSection />
      {/* <ServicesGrid limit={3} showCta /> */}
      <CTAStrip />
    </>
  );
}
