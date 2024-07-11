import Benefits from "@/components/shared/Benefits";
import CTA from "@/components/shared/CTA";
import FAQ from "@/components/shared/FAQ";
import Hero from "@/components/shared/Hero";
import HowToRefer from "@/components/shared/HowToRefer";

const Home = () => {
  return (
    <>
      <Hero />
      <HowToRefer />
      <CTA
        title="Ready to Learn and Earn?"
        description="Get started with Accredian and earn rewards up to Rs. 15,000"
      />
      <Benefits />
      <FAQ />
      <CTA
        title="Conviced to Join?"
        description="Join Accredian and earn rewards up to Rs. 15,000"
      />
    </>
  );
};

export default Home;
