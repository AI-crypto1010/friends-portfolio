import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Contact = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-gray-900 via-black to-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <div className="mb-12 sm:mb-16 md:mb-20 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Start a<br />project
            </h2>

            {/* Get In Touch Button */}
            <Button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-8 sm:px-10 md:px-12 py-5 sm:py-6 text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/30 w-full sm:w-auto"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Get In Touch
            </Button>
          </div>

          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 pt-8 sm:pt-12 border-t border-gray-800">
            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3 sm:mb-4">Contact</h3>
              <div className="space-y-2 sm:space-y-3">
                <a href="tel:+899101836737" className="block text-base sm:text-lg md:text-xl font-medium text-white hover:text-blue-400 transition-colors duration-300">
                  +89 9101836737
                </a>
                <a href="mailto:Lak20ml@gmail.com" className="block text-base sm:text-lg md:text-xl font-medium text-white hover:text-blue-400 transition-colors duration-300">
                  Lak20ml@gmail.com
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4 sm:space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3 sm:mb-4">Navigation</h3>
              <nav className="flex flex-col gap-3 sm:gap-4">
                <a href="#hero" className="text-base sm:text-lg font-medium text-white hover:text-blue-400 transition-colors duration-300 w-fit">
                  Home
                </a>
                <a href="#portfolio" className="text-base sm:text-lg font-medium text-white hover:text-blue-400 transition-colors duration-300 w-fit">
                  Project
                </a>
                <a href="#contact" className="text-base sm:text-lg font-medium text-white hover:text-blue-400 transition-colors duration-300 w-fit">
                  Contact
                </a>
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4 sm:space-y-6 animate-fade-in sm:col-span-2 md:col-span-1" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3 sm:mb-4">Follow</h3>
              <div className="flex flex-col gap-3 sm:gap-4">
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-medium text-white hover:text-blue-400 transition-colors duration-300 w-fit"
                >
                  X [Twitter]
                </a>
                <a
                  href="https://framer.com/@yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-medium text-white hover:text-blue-400 transition-colors duration-300 w-fit"
                >
                  Framer
                </a>
                <a
                  href="https://dribbble.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-medium text-white hover:text-blue-400 transition-colors duration-300 w-fit"
                >
                  Dribbble
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-gray-800 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-center text-xs sm:text-sm text-gray-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
