const Introduction = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 sm:space-y-8 md:space-y-10 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-relaxed md:leading-relaxed text-foreground/90">
            <p className="animate-fade-in text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground" style={{ animationDelay: '0s' }}>
              Senior full stack developer with 15+ years of experience delivering fast, scalable, and high-quality web applications.
            </p>
            <p className="animate-fade-in text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground" style={{ animationDelay: '0.1s' }}>
              I transform ideas into modern digital products using React, Node.js, Spring Boot, and SQL/NoSQL systems.            </p>
            <p className="animate-fade-in text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground" style={{ animationDelay: '0.2s' }}>
              With strong leadership, clean coding practices, and a deep focus on performance and user experience, I help startups and businesses build reliable software that grows with them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
