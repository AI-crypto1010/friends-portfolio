import { useCountUp } from "@/hooks/useCountUp";
import profilePhoto from "@/assets/profile-photo.png";

interface StatItemProps {
  end: number;
  suffix?: string;
  label: string;
}

const StatItem = ({ end, suffix = "+", label }: StatItemProps) => {
  const { count, elementRef } = useCountUp({ end, duration: 2500 });

  return (
    <div ref={elementRef} className="space-y-3 sm:space-y-4 animate-fade-in text-center sm:text-left group hover:scale-105 transition-transform duration-300">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[hsl(var(--vibrant-blue))] to-blue-500 bg-clip-text text-transparent">
        {count}{suffix}
      </div>
      <div className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
        {label}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24 animate-fade-in">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              <img
                src={profilePhoto}
                alt="Profile"
                loading="lazy"
                decoding="async"
                className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full object-cover border-4 border-border shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
                Marziyeh Lak
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground">
                Crafting websites & digital products
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
            <StatItem end={10} label="Years industry experience" />
            <StatItem end={500} label="Projects completed" />
            <StatItem end={98} suffix="%" label="Client satisfaction rate" />
            <StatItem end={24} suffix="/7" label="Support & maintenance" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
