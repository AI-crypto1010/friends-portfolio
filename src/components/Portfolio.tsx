import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import portfolioWordpress from "@/assets/portfolio-wordpress.jpg";
import portfolioWebdev from "@/assets/portfolio-webdev.jpg";
import portfolioUiux from "@/assets/portfolio-uiux.jpg";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioAnalytics from "@/assets/portfolio-analytics.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "WordPress Development",
      category: "Custom WordPress themes and plugins tailored to your specific needs.",
      image: portfolioWordpress,
    },
    {
      title: "Web Development",
      category: "Building responsive websites, web applications, and interactive dashboards with modern technologies.",
      image: portfolioWebdev,
    },
    {
      title: "UI/UX Design",
      category: "Creating clean, intuitive, and user-friendly interfaces that enhance user experience.",
      image: portfolioUiux,
    },
    {
      title: "E-Commerce Platform",
      category: "A modern e-commerce solution with real-time inventory and payment processing",
      image: portfolioEcommerce,
    },
    {
      title: "Financial Analytics Tool",
      category: "Advanced data visualization and reporting for financial insights",
      image: portfolioAnalytics,
    },
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with title and View all button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            selected<br />projects
          </h2>
          <Button
            className="bg-gradient-to-r from-[hsl(var(--vibrant-blue))] to-blue-600 text-[hsl(var(--vibrant-blue-foreground))] hover:from-[hsl(var(--vibrant-blue))]/90 hover:to-blue-600/90 rounded-full px-6 sm:px-8 md:px-10 h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/30 w-full sm:w-auto"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="ml-2">View all</span>
          </Button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[3/4] cursor-pointer animate-fade-in shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Always visible overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed">
                  {project.category}
                </p>
              </div>
              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/50 rounded-2xl sm:rounded-3xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
