import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Profile Image/Avatar */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              {/* Image container without glass or tint */}
              <div className="w-80 h-80 rounded-2xl overflow-hidden relative z-10">
                <img 
                  src={profileImg} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Glow effect stays behind the image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-30 blur"></div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-primary/20 card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Professional Background</h3>
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  I am a Software Engineer with expertise in Python-based frameworks such as Django, Flask, and FastAPI. 
                  I have developed automation tools using Selenium and Playwright, as well as generative AI applications 
                  leveraging LLMs, RAG pipelines, and prompt engineering.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90">
                  I have deployed several applications to cloud platforms such as DigitalOcean and Vercel, and have 
                  built CI/CD pipelines using GitHub Actions. My passion lies in creating intelligent, scalable solutions 
                  that push the boundaries of what's possible with modern technology.
                </p>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 glass-card rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 glass-card rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Technologies Mastered</div>
                  </div>
                  <div className="text-center p-4 glass-card rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Achievements</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};