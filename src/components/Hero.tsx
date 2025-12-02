import { useEffect, useRef } from "react";
// @ts-ignore - Vanta.js doesn't have perfect TypeScript support
import * as THREE from "three";

const Hero = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    let mounted = true;

    // Dynamically import Vanta.js Birds effect
    import("vanta/dist/vanta.birds.min")
      .then((BIRDS) => {
        if (!vantaRef.current || !mounted) return;

        // Handle different export formats
        const BirdsEffect = BIRDS.default || BIRDS;

        // Initialize Vanta Birds effect
        vantaEffect.current = BirdsEffect({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x000000,
          color1: 0xffffff,
          color2: 0xffffff,
          birdSize: 0.60,
          speedLimit: 3.00,
          separation: 19.00,
          alignment: 19.00,
          cohesion: 19.00,
          quantity: 5.00,
          backgroundAlpha: 0.0,
          THREE: THREE,
        });
      })
      .catch((error) => {
        console.error("Error loading Vanta.js:", error);
      });

    // Cleanup function
    return () => {
      mounted = false;
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
      {/* Vanta.js Birds Background */}
      <div ref={vantaRef} className="absolute inset-0 z-0" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-black/30 to-black/90" />

      {/* Content Container */}
      <div className="relative z-10 flex-1 flex flex-col justify-end">
        {/* Bottom Content */}
        <div className="pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 container mx-auto max-w-7xl">
          <div className="animate-fade-in space-y-4 md:space-y-6">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-2 md:mb-4 text-white/90">
              Web & product design specialist
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.9]">
              <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Marziyeh Lak
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-2 md:mt-4 text-white/80 font-light">
              Frontend developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
