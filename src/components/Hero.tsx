import heroProfile from "@/assets/profile-photo.png";
import { MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col text-white overflow-hidden">

      {/* Full Background Image with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroProfile}
          alt="Marziyeh Lak"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className={`w-full h-[100%] object-cover object-center transition-all duration-[2000ms] ease-out ${isLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
            }`}
          style={{
            transform: `translateY(${scrollY * 0.4}px) scale(${isLoaded ? 1 : 1.1})`,
            filter: `blur(${Math.min(scrollY * 0.02, 8)}px)`,
          }}
        />
        {/* Dark overlay for text readability */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 transition-opacity duration-[1500ms] delay-300 ${isLoaded ? "opacity-100" : "opacity-0"
          }`} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Bottom Content */}
        <div
          className="mt-auto pb-12 px-6 container mx-auto"
          style={{
            opacity: Math.max(1 - scrollY * 0.003, 0),
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <p className={`text-xl md:text-2xl font-light mb-2 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            Backend & Full Stack Developer
          </p>
          <div className={`flex items-center gap-2 mb-4 transition-all duration-1000 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vibrant-blue/75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-vibrant-blue"></span>
            </span>
            <span className="text-sm md:text-base font-light tracking-wide">Available For Work</span>
          </div>
          <h1 className={`text-6xl md:text-7xl lg:text-8xl font-playfair font-black tracking-tight transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            Marziyeh Lak
          </h1>
          <p className={`flex items-center gap-2 text-lg md:text-xl mt-4 transition-all duration-1000 delay-900 ${isLoaded ? "opacity-90 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            <MapPin className="w-5 h-5 text-vibrant-blue" />
            Based in Iran
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
