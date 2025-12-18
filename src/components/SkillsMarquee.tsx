const SkillsMarquee = () => {
  const categories = [
    {
      label: "Backend",
      skills: ["Express.js", "Flask", "FastAPI", "Django", "Laravel", "Spring Boot"]
    },
    {
      label: "Frontend",
      skills: ["React", "Next.js", "Vue.js", "Wordpress", "Shopify", "Angular", "TailwindCSS", "Bootstrap"]
    },
    {
      label: "Databases",
      skills: ["Oracle Database", "MySQL", "Microsoft SQL Server", "PostgreSQL", "MongoDB", "Firebase"]
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-left font-playfair">
          Skills & Technologies
        </h2>
      </div>

      <div className="space-y-8">
        {categories.map((category, index) => (
          <div key={category.label} className="relative">
            {/* Category Label */}
            <div className="container mx-auto px-6 mb-4">
              <span className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
                {category.label}
              </span>
            </div>

            {/* Scrolling Container */}
            <div className="relative flex overflow-hidden">
              {/* Duplicate the skills array for seamless loop */}
              <div 
                className="flex gap-4 animate-scroll-left hover:pause-animation"
                style={{
                  animationDuration: `${20 + index * 5}s` // Varying speeds for visual interest
                }}
              >
                {[...category.skills, ...category.skills, ...category.skills].map((skill, idx) => (
                  <span
                    key={`${skill}-${idx}`}
                    className="flex-shrink-0 px-8 text-lg md:text-xl text-foreground/80 whitespace-nowrap hover:text-foreground transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsMarquee;
