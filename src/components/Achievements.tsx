import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, ExternalLink, Calendar } from "lucide-react";

const achievements = [
  {
    title: "Meta Hacker Cup 2024 - Winner",
    description: "Secured first place in Meta's global programming competition, competing against thousands of developers worldwide.",
    icon: Trophy,
    date: "2024",
    category: "Competition",
    certificateUrl: "#",
    highlights: [
      "Solved complex algorithmic problems",
      "Ranked #1 globally",
      "Advanced to final rounds",
      "Recognition from Meta engineers"
    ]
  },
  {
    title: "AWS Certified Solutions Architect",
    description: "Professional certification demonstrating expertise in designing and deploying scalable systems on AWS.",
    icon: Award,
    date: "2023",
    category: "Certification",
    certificateUrl: "#",
    highlights: [
      "Professional level certification",
      "Cloud architecture expertise",
      "Security best practices",
      "Cost optimization strategies"
    ]
  },
  {
    title: "Open Source Contributor - 10K+ Stars",
    description: "Contributed to major open-source projects with combined 10,000+ GitHub stars and active community engagement.",
    icon: Star,
    date: "2023",
    category: "Open Source",
    certificateUrl: "#",
    highlights: [
      "Multiple project contributions",
      "Active community member",
      "Code review participation",
      "Documentation improvements"
    ]
  },
  {
    title: "Google Cloud Professional Developer",
    description: "Certified in developing scalable applications and implementing CI/CD pipelines on Google Cloud Platform.",
    icon: Award,
    date: "2023",
    category: "Certification",
    certificateUrl: "#",
    highlights: [
      "Application development",
      "DevOps practices",
      "Monitoring and logging",
      "Performance optimization"
    ]
  },
  {
    title: "Tech Innovation Award",
    description: "Recognized for developing an AI-powered automation tool that improved business efficiency by 200%.",
    icon: Trophy,
    date: "2022",
    category: "Innovation",
    certificateUrl: "#",
    highlights: [
      "200% efficiency improvement",
      "AI/ML implementation",
      "Business impact recognition",
      "Team leadership"
    ]
  },
  {
    title: "Kubernetes Certified Administrator",
    description: "Demonstrated expertise in deploying, managing, and troubleshooting Kubernetes clusters in production environments.",
    icon: Award,
    date: "2022",
    category: "Certification",
    certificateUrl: "#",
    highlights: [
      "Container orchestration",
      "Cluster management",
      "Security configuration",
      "Troubleshooting skills"
    ]
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Competition":
      return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
    case "Certification":
      return "bg-blue-500/20 text-blue-300 border-blue-500/30";
    case "Open Source":
      return "bg-green-500/20 text-green-300 border-green-500/30";
    case "Innovation":
      return "bg-purple-500/20 text-purple-300 border-purple-500/30";
    default:
      return "bg-gray-500/20 text-gray-300 border-gray-500/30";
  }
};

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements</span> & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones and recognition that mark my journey in software engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title} 
              className="glass-card border-primary/20 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-primary/20 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <Badge className={`${getCategoryColor(achievement.category)} border mb-2`}>
                        {achievement.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {achievement.date}
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {achievement.description}
                </p>

                <div className="space-y-2 mb-6">
                  {achievement.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {highlight}
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-primary/10 border-primary/30 hover:bg-primary/20 text-primary group-hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <a href={achievement.certificateUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-muted-foreground mb-6">
              I believe in continuous improvement and staying updated with the latest technologies. 
              Currently pursuing advanced certifications in AI/ML and cloud architecture.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="border-primary/30 text-primary">
                🎯 Next: Machine Learning Engineer Certification
              </Badge>
              <Badge variant="outline" className="border-accent/30 text-accent">
                📚 Learning: Advanced Kubernetes & DevOps
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};