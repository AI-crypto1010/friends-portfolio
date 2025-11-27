import { Code2, Palette, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Web Design",
      description: "Crafting clean, user-centered interfaces using Figma — from wireframes to high-fidelity visuals that elevate your brand's look and feel.",
    },
    {
      icon: <Code2 className="w-12 h-12" />,
      title: "Web Development",
      description: "Building smooth, responsive websites with React — fast-loading, and optimized across devices for performance and interactivity.",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "Creating intuitive digital experiences that blend beautiful design with seamless functionality, ensuring every interaction feels natural.",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            what i offer
          </h2>
          <span className="text-[hsl(var(--vibrant-blue))] text-lg sm:text-xl md:text-2xl font-bold border-2 border-[hsl(var(--vibrant-blue))] rounded-lg px-3 sm:px-4 py-1 sm:py-2 bg-[hsl(var(--vibrant-blue))]/10">
            [3]
          </span>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group animate-fade-in p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-[hsl(var(--vibrant-blue))]/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6 sm:mb-8 text-[hsl(var(--vibrant-blue))] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 group-hover:text-[hsl(var(--vibrant-blue))] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
