import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jasmine Torres",
      role: "Creative Producer",
      quote: "A rare blend of creative talent and technical precision. I would definitely recommend their services.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 5,
    },
    {
      name: "Emily Carter",
      role: "Startup Founder",
      quote: "They were responsive, thoughtful, and brought a lot of clarity to our website project. I love the final result!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Product Manager",
      quote: "Exceptional work quality and attention to detail. The project was delivered on time and exceeded our expectations.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 5,
    },
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-muted/10 to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            what clients say
          </h2>
          <span className="text-[hsl(var(--vibrant-blue))] text-lg sm:text-xl md:text-2xl font-bold border-2 border-[hsl(var(--vibrant-blue))] rounded-lg px-3 sm:px-4 py-1 sm:py-2 bg-[hsl(var(--vibrant-blue))]/10">
            [{testimonials.length}]
          </span>
        </div>

        {/* Scrolling Container */}
        <div className="relative h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden rounded-2xl">
          <div className="animate-scroll-up space-y-4 sm:space-y-6 md:space-y-8">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-card to-card/80 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border border-border/50 hover:border-[hsl(var(--vibrant-blue))]/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 mx-2 sm:mx-0"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[hsl(var(--vibrant-blue))] text-[hsl(var(--vibrant-blue))]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[hsl(var(--vibrant-blue))]/30"
                  />
                  <div>
                    <h4 className="font-bold text-base sm:text-lg md:text-xl">{testimonial.name}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
