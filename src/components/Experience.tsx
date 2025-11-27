import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experienceData = [
  {
    title: "Software Engineering Trainee",
    company: "Codesy Consulting",
    location: "Onsite - Karachi, Pakistan",
    duration: "Jan 2025 - Sept 2025",
    type: "Internship",
    description: "Gained hands-on experience in web development and automation while contributing to real-world projects.",
    achievements: [
      "Developed data scraping tools using Selenium",
      "Created REST APIs using Flask and NestJS",
      "Contributed to a desktop application using Electron.js",
      "Configured GitHub Actions to automate CI/CD pipelines",
      "Completed training in cloud deployment"
    ],
    technologies: ["Python", "JavaScript", "Flask", "Selenium", "SQLite", "Git", "Linux"]
  },
  {
    title: "Associate Software Engineer",
    company: "Codesy Consulting",
    location: "Onsite - Karachi, Pakistan",
    duration: "Oct 2025 - Present",
    type: "Full-time",
    description: "Worked on NestJS and FastAPI-based backend applications, integrating AI and automation to enhance functionality and performance.",
    achievements: [
      "Developed end-to-end AI and RAG pipelines",
      "Created REST APIs using NestJS",
      "Integrated AI services using FastAPI",
      "Implemented caching to optimize API response times and reduce load",
      "Designed microservice architecture for scalable application development"
    ],
    technologies: ["Python", "JavaScript", "NestJS", "FastAPI", "Supabase", "Postgres", "Git"]
  },
  {
    title: "Founding Engineer",
    company: "Odrio.io",
    location: "Remote",
    duration: "May 2025 - Present",
    type: "Part-time",
    description: "Developed an AI-powered chatbot system enabling restaurant orders through text and voice across WhatsApp and a web application.",
    achievements: [
      "Developed a WhatsApp and web chatbot enabling text and voice ordering capabilities",
      "Implemented text and voice ordering with multi-language support",
      "Created restaurant and customer portals for menus, orders, and recommendations with PostgreSQL",
      "Integrated real-time order tracking via WebSockets",
      "Optimized deployment with Nginx on DigitalOcean for enhanced performance"
    ],
    technologies: ["Python", "JavaScript", "Flask", "ReactJS", "Postgres", "AI Agents", "Twilio", "Sockets", "Git"]
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key contributions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - show only if more than 1 experience */}
          {experienceData.length > 1 && (
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent transform md:-translate-x-0.5"></div>
          )}

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  experienceData.length > 1
                    ? index % 2 === 0
                      ? 'md:flex-row'
                      : 'md:flex-row-reverse'
                    : 'justify-center'
                }`}
              >
                {/* Timeline dot - show only if more than 1 experience */}
                {experienceData.length > 1 && (
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 z-10 glow-effect"></div>
                )}

                {/* Content card */}
                <div
                  className={`w-full md:w-5/12 ${
                    experienceData.length > 1
                      ? index % 2 === 0
                        ? 'ml-16 md:ml-0 md:mr-auto md:pr-8'
                        : 'ml-16 md:ml-auto md:pl-8'
                      : 'max-w-xl'
                  }`}
                >
                  <Card className="glass-card border-primary/20 card-hover">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-primary/20 rounded-lg">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                      <p className="text-lg text-primary mb-2">{exp.company}</p>
                      
                      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-foreground/80 mb-4">{exp.description}</p>

                      <div className="space-y-2 mb-6">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="bg-primary/10 text-primary hover:bg-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};