import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Circle, X, ArrowUp } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight hover:opacity-80 transition-all duration-300 text-white group"
          >
            <span className="group-hover:scale-105 inline-block transition-transform">
              Marziyeh Lak<sup className="text-xs sm:text-sm">®</sup>
            </span>
          </button>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2.5 sm:p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/30">
                <Circle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-96 bg-gradient-to-b from-black via-gray-900 to-black border-none p-0"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                  <span className="text-xl font-bold text-white">
                    Marziyeh Lak<sup className="text-sm">®</sup>
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2.5 bg-blue-600 rounded-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                  >
                    <X className="h-5 w-5 text-white" />
                  </button>
                </div>

                {/* Menu Content */}
                <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8">
                  <nav className="flex flex-col gap-8 sm:gap-12 text-center mb-12 sm:mb-16 w-full">
                    <button
                      onClick={() => scrollToSection("hero")}
                      className="text-3xl sm:text-4xl md:text-5xl font-normal text-white hover:text-blue-400 transition-all duration-300 hover:scale-105"
                    >
                      Home
                    </button>
                    <button
                      onClick={() => scrollToSection("portfolio")}
                      className="text-3xl sm:text-4xl md:text-5xl font-normal text-white hover:text-blue-400 transition-all duration-300 hover:scale-105"
                    >
                      Projects
                    </button>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="text-3xl sm:text-4xl md:text-5xl font-normal text-white hover:text-blue-400 transition-all duration-300 hover:scale-105"
                    >
                      Contact
                    </button>
                  </nav>

                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/30 w-full sm:w-auto"
                  >
                    <ArrowUp className="w-5 h-5 mr-2" />
                    Get in touch
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
