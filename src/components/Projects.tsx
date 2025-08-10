import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Play, Zap } from "lucide-react";
import odrioImg from "@/assets/odrio.png";
import aiCyberImg from "@/assets/cyber.png";
import studyMateImg from "@/assets/studymate.png";
import testPrepImg from "@/assets/test.png";
import studybudImg from "@/assets/studybud.png";
import booklyImg from "@/assets/bookstore.png";

const projects = [
  {
    title: "Odrio.io – AI-Powered Chatbot Platform for the Food Industry",
    description:
      "A multi-platform AI chatbot system for the food industry, enabling restaurant orders through text and voice across WhatsApp and a web application.",
    image: odrioImg,
    technologies: [
      "React",
      "Flask",
      "PostgreSQL",
      "LLaMA",
      "Whisper",
      "WebSockets",
      "DigitalOcean",
      "Nginx"
    ],
    features: [
      "WhatsApp and web chatbot with text and voice ordering",
      "Multi-language support for voice and text interactions",
      "Restaurant and customer portals with menus, orders, and recommendations",
      "Real-time order tracking via WebSockets",
      "Optimized deployment with Nginx on DigitalOcean"
    ],
    demoUrl: "https://odrio.io/",
    githubUrl: "https://github.com/hassan1oct/flask-bot-backend",
    status: "Live"
  },
  {
    title: "AI-Powered Cybersecurity Prototype for Next-Gen Endpoint Detection",
    description:
      "An AI-driven endpoint detection system for identifying unauthorized services from Windows event logs.",
    image: aiCyberImg,
    technologies: ["Python", "LLaMA", "Phi 3", "Streamlit", "SQLite", "Docker"],
    features: [
      "Model deployment to edge devices for local detection",
      "Detection of unauthorized service installations from Windows Event ID logs",
      "Synthetic data generation using LLaMA 3.1",
      "Lightweight model optimization with Phi 3",
      "Training on real and synthetic datasets for improved accuracy"
    ],
    demoUrl: "https://github.com/qerberos-code/aiml_api",
    githubUrl: "https://github.com/qerberos-code/aiml_api",
    status: "Beta"
  },
  {
    title: "StudyMate – AI-Powered Advanced Quiz Creator",
    description:
      "A Django-based AI platform that digitizes handwritten notes, processes them via OCR, and generates topic-based quizzes and Q&A.",
    image: studyMateImg,
    technologies: [
      "Django",
      "PostgreSQL",
      "Google Cloud Vision",
      "Google Cloud Storage",
      "LLaMA",
      "JavaScript"
    ],
    features: [
      "Handwritten notes digitization using Google Cloud Vision OCR",
      "Topic-based quiz and Q&A generation with LLaMA",
      "User dashboard with statistics and authentication",
      "Cloud-based storage and retrieval of notes and generated content",
      "Integration with Together AI for content creation"
    ],
    demoUrl: "https://github.com/abzaidi/studyMate",
    githubUrl: "https://github.com/abzaidi/studyMate",
    status: "Development"
  },
  {
    title: "Personalized Test Prep Platform",
    description:
      "An adaptive learning platform that tailors tutoring, quizzes, and study resources for SAT, ACT, IELTS, and TOEFL using LLaMA-powered dynamic content.",
    image: testPrepImg,
    technologies: ["Python", "Streamlit", "SQLite", "LLaMA", "GitHub", "Heroku"],
    features: [
      "Adaptive tutoring with personalized quizzes and study materials",
      "Dynamic tutoring using LLaMA 3 API",
      "Secure student data management with SQLite",
      "Streamlit-based interactive learning interface",
      "Support for multiple standardized tests (SAT, ACT, IELTS, TOEFL)"
    ],
    demoUrl: "https://github.com/tzprograms/Llama3_Hackathon",
    githubUrl: "https://github.com/tzprograms/Llama3_Hackathon",
    status: "Production"
  },
  {
    title: "Studybud - Collaborative Learning Platform",
    description: "A Django-based social learning platform inspired by Discord.",
    image: studybudImg,
    technologies: ["Python", "Django", "SQLite", "Django REST Framework"],
    features: [
      "Create and manage study rooms for specific topics",
      "Invite friends or allow public participation",
      "Real-time messaging and discussion features",
      "Topic tagging for easier room discovery",
      "User authentication and profile management"
    ],
    demoUrl: "https://studybuddev.herokuapp.com/",
    githubUrl: "https://github.com/abzaidi/studybud",
    status: "Live"
  },
  {
    title: "Bookly - E-Commerce Bookstore Website",
    description:
      "A fully functional e-commerce bookstore built with PHP, MySQL, and JavaScript.",
    image: booklyImg,
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    features: [
      "User registration and login system",
      "Browse and search for books by category",
      "Add books to shopping cart and manage cart items",
      "Checkout process with order confirmation",
      "Responsive design for desktop and mobile"
    ],
    demoUrl:
      "https://github.com/abzaidi/Online-Bookstore-Website",
    githubUrl:
      "https://github.com/abzaidi/Online-Bookstore-Website",
    status: "Development"
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
    <img
      src={project.image}
      alt={project.title}
      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
    />
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
                    className="flex-1 bg-primary/10 border-primary/30 hover:bg-primary/20 text-primary hover:text-cyan"
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
                    className="flex-1 glass-card border-primary/30 hover:bg-primary/10 hover:text-white"
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
            className="glass-card border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:text-white"
            asChild
          >
            <a href="https://github.com/abzaidi" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};