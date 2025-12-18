import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import SkillsMarquee from "@/components/SkillsMarquee";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Introduction />
      <About />
      <SkillsMarquee />
      <Portfolio />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Index;
