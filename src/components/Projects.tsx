import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Play, Zap } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Document Processor",
    description: "An intelligent document processing system using RAG pipelines and LLMs to extract, analyze, and summarize complex documents with 95% accuracy.",
    image: "🤖",
    technologies: ["Python", "FastAPI", "LangChain", "PostgreSQL", "Docker"],
    features: [
      "RAG pipeline implementation",
      "Multi-format document support",
      "Real-time processing API",
      "Custom prompt engineering"
    ],
    demoUrl: "#",
    githubUrl: "#",
    status: "Production"
  },
  {
    title: "E-Commerce Automation Suite",
    description: "Complete automation solution for e-commerce operations including inventory management, price monitoring, and order processing using Selenium and Playwright.",
    image: "🛒",
    technologies: ["Python", "Django", "Selenium", "Playwright", "Redis"],
    features: [
      "Automated price monitoring",
      "Inventory synchronization",
      "Order processing pipeline",
      "Real-time notifications"
    ],
    demoUrl: "#",
    githubUrl: "#",
    status: "Live"
  },
  {
    title: "Cloud-Native API Gateway",
    description: "Scalable API gateway built with FastAPI and deployed on DigitalOcean with automatic scaling, rate limiting, and comprehensive monitoring.",
    image: "☁️",
    technologies: ["FastAPI", "Docker", "DigitalOcean", "Redis", "PostgreSQL"],
    features: [
      "Auto-scaling capabilities",
      "Rate limiting & throttling",
      "Real-time monitoring",
      "JWT authentication"
    ],
    demoUrl: "#",
    githubUrl: "#",
    status: "Beta"
  },
  {
    title: "Machine Learning Pipeline",
    description: "End-to-end ML pipeline for predictive analytics with automated model training, validation, and deployment using GitHub Actions CI/CD.",
    image: "📊",
    technologies: ["Python", "Scikit-learn", "Flask", "GitHub Actions", "AWS"],
    features: [
      "Automated model training",
      "Performance monitoring",
      "A/B testing framework",
      "Continuous deployment"
    ],
    demoUrl: "#",
    githubUrl: "#",
    status: "Development"
  },
  {
    title: "Real-Time Chat Application",
    description: "Modern chat application with real-time messaging, file sharing, and video calls. Built with React and Django with WebSocket support.",
    image: "💬",
    technologies: ["React", "Django", "WebSockets", "PostgreSQL", "Vercel"],
    features: [
      "Real-time messaging",
      "File sharing capabilities",
      "Video call integration",
      "User presence indicators"
    ],
    demoUrl: "#",
    githubUrl: "#",
    status: "Live"
  },
  {
    title: "DevOps Monitoring Dashboard",
    description: "Comprehensive monitoring dashboard for DevOps teams with real-time metrics, alerts, and automated incident response.",
    image: "📈",
    technologies: ["React", "FastAPI", "InfluxDB", "Docker", "Kubernetes"],
    features: [
      "Real-time metrics visualization",
      "Custom alert rules",
      "Automated incident response",
      "Performance analytics"
    ],
    demoUrl: "#",
    githubUrl: "#",
    status: "Production"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Live":
    case "Production":
      return "bg-green-500/20 text-green-300 border-green-500/30";
    case "Beta":
      return "bg-blue-500/20 text-blue-300 border-blue-500/30";
    case "Development":
      return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
    default:
      return "bg-gray-500/20 text-gray-300 border-gray-500/30";
  }
};

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work in AI, automation, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="glass-card border-primary/20 card-hover group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </span>
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(project.status)} border`}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-foreground/80">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-muted-foreground">
                        <Zap className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-primary/10 border-primary/30 hover:bg-primary/20 text-primary"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 glass-card border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="glass-card border-primary/30 hover:bg-primary/10 hover:border-primary/50"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};