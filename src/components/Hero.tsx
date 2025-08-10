import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ChevronDown } from "lucide-react";

export const Hero = () => {
  // const [displayedText, setDisplayedText] = useState("");
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const fullText = "Building intelligent, scalable, and future-ready applications";

  // useEffect(() => {
  //   if (currentIndex < fullText.length) {
  //     const timeout = setTimeout(() => {
  //       setDisplayedText(prev => prev + fullText[currentIndex]);
  //       setCurrentIndex(prev => prev + 1);
  //     }, 50);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [currentIndex, fullText]);


  const taglines = [
    "Building intelligent, scalable, and future-ready applications.",
    "Turning ideas into seamless user experiences.",
    "Crafting solutions that make an impact."
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0); // char index
  const [taglineIndex, setTaglineIndex] = useState(0); // tagline index
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTagline = taglines[taglineIndex];

    if (!isDeleting && currentIndex < currentTagline.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + currentTagline[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } 
    else if (!isDeleting && currentIndex === currentTagline.length) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timeout);
    } 
    else if (isDeleting && currentIndex > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      }, 30);
      return () => clearTimeout(timeout);
    } 
    else if (isDeleting && currentIndex === 0) {
      // Move to next tagline
      setIsDeleting(false);
      setTaglineIndex(prev => (prev + 1) % taglines.length);
    }
  }, [currentIndex, isDeleting, taglineIndex, taglines]);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-2xl md:text-3xl mb-6">
            <span className="gradient-text">Hello!</span>
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">I'm Abubakar Zaidi</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Software Engineer | Python, AI & Automation
          </h2>
          
          <div className="h-16 flex items-center justify-center mb-12">
            <p className="text-lg md:text-xl text-foreground/80 font-mono">
              {displayedText}
              <span className="animate-blink ml-1">|</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg glow-effect"
            >
              View My Work
            </Button>
            
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="glass-card border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-white hover:text-white"
                asChild
              >
                <a href="https://www.linkedin.com/in/abubakarzaidi/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="glass-card border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-white hover:text-white"
                asChild
              >
                <a href="https://github.com/abzaidi" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 text-white" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};