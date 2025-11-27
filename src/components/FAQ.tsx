import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Twitter, Figma, Dribbble, Linkedin } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How can you help improve my online presence?",
      answer: "I create custom websites and digital solutions that reflect your brand's identity and engage your target audience. From responsive design to user-friendly interfaces, I ensure your online presence stands out and drives results.",
    },
    {
      question: "Do you offer both design and development services?",
      answer: "Yes! I provide end-to-end services including UI/UX design, web development, WordPress customization, and e-commerce solutions. This ensures a seamless process from concept to launch.",
    },
    {
      question: "What's your process for working on a project?",
      answer: "My process starts with understanding your goals and requirements, followed by research and planning. Then I move into design mockups, development, testing, and finally deployment. Throughout the process, I maintain clear communication and provide regular updates.",
    },
    {
      question: "How long does a project typically take?",
      answer: "Project timelines vary based on scope, but a standard website takes 3-6 weeks from concept to completion, ensuring high quality and attention to detail.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Absolutely! I offer ongoing support packages to keep your website updated, secure, and performing optimally. This includes regular updates, bug fixes, and technical assistance whenever you need it.",
    },
    {
      question: "How do we get started?",
      answer: "Simply reach out through the contact form below or connect with me on social media. We'll schedule a consultation to discuss your project needs, goals, and timeline. From there, I'll provide a detailed proposal and we can begin bringing your vision to life.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 md:mb-20 text-center animate-fade-in">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-2 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg sm:rounded-xl px-4 sm:px-6 hover:border-[hsl(var(--vibrant-blue))]/50 transition-all duration-300 animate-fade-in bg-card/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-base sm:text-lg md:text-xl font-medium py-4 sm:py-6 hover:no-underline hover:text-[hsl(var(--vibrant-blue))] transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base md:text-lg pb-4 sm:pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 sm:mb-8 text-foreground">Let's connect</h3>
          <div className="flex justify-center gap-6 sm:gap-8 flex-wrap">
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-[hsl(var(--vibrant-blue))] transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-[hsl(var(--vibrant-blue))]/10"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
            </a>
            <a
              href="https://figma.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-[hsl(var(--vibrant-blue))] transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-[hsl(var(--vibrant-blue))]/10"
              aria-label="Figma"
            >
              <Figma className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
            </a>
            <a
              href="https://dribbble.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-[hsl(var(--vibrant-blue))] transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-[hsl(var(--vibrant-blue))]/10"
              aria-label="Dribbble"
            >
              <Dribbble className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/in/marziyeh-lak-627a02202"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-[hsl(var(--vibrant-blue))] transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-[hsl(var(--vibrant-blue))]/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
