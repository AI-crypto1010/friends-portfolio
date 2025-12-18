import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import About from "@/components/About";
import SkillsMarquee from "@/components/SkillsMarquee";

// Lazy load below-the-fold components for better initial load performance
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Services = lazy(() => import("@/components/Services"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));

// Loading fallback component
const SectionLoader = () => (
  <div className="py-16 sm:py-20 md:py-24 lg:py-28">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-muted/50 rounded w-1/3"></div>
        <div className="h-4 bg-muted/30 rounded w-2/3"></div>
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Introduction />
      <About />
      <SkillsMarquee />
      <Suspense fallback={<SectionLoader />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default Index;
