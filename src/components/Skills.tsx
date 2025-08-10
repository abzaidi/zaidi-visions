import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Bot, 
  Cloud, 
  GitBranch, 
  Container,
  Zap,
  Brain,
  Settings,
  Terminal
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code,
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "Django", icon: "🎯" },
      { name: "Flask", icon: "🌶️" },
      { name: "FastAPI", icon: "⚡" },
      { name: "JavaScript", icon: "🟨" },
      { name: "TypeScript", icon: "🔷" },
    ]
  },
  {
    title: "AI & Automation",
    icon: Brain,
    skills: [
      { name: "LLMs & RAG", icon: "🧠" },
      { name: "Selenium", icon: "🤖" },
      { name: "Playwright", icon: "🎭" },
      { name: "Prompt Engineering", icon: "💭" },
      { name: "Machine Learning", icon: "📊" },
      { name: "Data Analysis", icon: "📈" },
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "DigitalOcean", icon: "🌊" },
      { name: "Vercel", icon: "▲" },
      { name: "GitHub Actions", icon: "⚙️" },
      { name: "Docker", icon: "🐳" },
      { name: "CI/CD", icon: "🔄" },
      { name: "AWS", icon: "☁️" },
    ]
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Redis", icon: "🔴" },
      { name: "Git", icon: "📝" },
      { name: "Linux", icon: "🐧" },
      { name: "API Design", icon: "🔗" },
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass-card border-primary/20 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/20 rounded-lg mr-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="flex items-center p-3 glass-card rounded-lg hover:bg-primary/10 transition-all duration-300 cursor-pointer group"
                    >
                      <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium text-foreground/90 group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Badge variant="outline" className="px-6 py-2 text-lg border-primary/30 text-primary">
            And many more technologies I'm always learning!
          </Badge>
        </div>
      </div>
    </section>
  );
};