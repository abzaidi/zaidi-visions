import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";
import {
  SiPython,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiJavascript,
  SiSelenium,
  SiDigitalocean,
  SiVercel,
  SiGithubactions,
  SiDocker,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiLinux
} from "react-icons/si";

import { FaLink, FaBrain } from "react-icons/fa";
import { TbMessageChatbot } from "react-icons/tb"; // for Prompt Engineering
import { BiInfinite } from "react-icons/bi"; // for CI/CD
import playwrightLogo from "@/assets/Playwright--Streamline-Svg-Logos.svg";


export const allSkills = [
  { name: "Python", icon: <SiPython className="text-yellow-400 w-6 h-6" /> },
  { name: "Django", icon: <SiDjango className="text-green-600 w-6 h-6" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-300 w-6 h-6" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-teal-400 w-6 h-6" /> },
  { name: "RESTful APIs", icon: <FaLink className="text-blue-400 w-6 h-6" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300 w-6 h-6" /> },
  { name: "LLMs & RAG", icon: <FaBrain className="text-purple-400 w-6 h-6" /> },
  { name: "Selenium", icon: <SiSelenium className="text-green-500 w-6 h-6" /> },
  { name: "Playwright", icon: <img src={playwrightLogo} className="w-6 h-6" alt="Playwright" /> },
  { name: "Prompt Engineering", icon: <TbMessageChatbot className="text-pink-400 w-6 h-6" /> },
  { name: "DigitalOcean", icon: <SiDigitalocean className="text-blue-400 w-6 h-6" /> },
  { name: "Vercel", icon: <SiVercel className="text-white w-6 h-6" /> },
  { name: "GitHub Actions", icon: <SiGithubactions className="text-gray-300 w-6 h-6" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-500 w-6 h-6" /> },
  { name: "CI/CD", icon: <BiInfinite className="text-orange-400 w-6 h-6" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 w-6 h-6" /> },
  { name: "Supabase", icon: <SiSupabase className="text-green-500 w-6 h-6" /> },
  { name: "Git", icon: <SiGit className="text-orange-500 w-6 h-6" /> },
  { name: "GitHub", icon: <SiGithub className="text-white w-6 h-6" /> },
  { name: "Linux", icon: <SiLinux className="text-yellow-500 w-6 h-6" /> },
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

        <Card className="glass-card border-primary/20 card-hover">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/20 rounded-lg mr-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Skills & Technologies</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {allSkills.map((skill) => (
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

        <div className="mt-12 text-center">
          <Badge variant="outline" className="px-6 py-2 text-lg border-primary/30 text-primary">
            And many more technologies I'm always learning!
          </Badge>
        </div>
      </div>
    </section>
  );
};
