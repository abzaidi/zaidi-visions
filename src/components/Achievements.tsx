import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, ExternalLink, Calendar } from "lucide-react";

const achievements = [
  {
  title: "Harvard's CS50x Puzzle Day 2025 — Winner",
  description: "Successfully solved all nine puzzles in Harvard's CS50x Puzzle Day, showcasing advanced problem-solving and logical reasoning skills.",
  icon: Trophy,
  date: "2025",
  category: "Competition",
  certificateUrl: "https://tinyurl.com/4zwewn8r",
  highlights: [
    "Perfect score in a competitive puzzle event",
    "Tested on logic, math, and lateral thinking",
    "Global participation with challenging problems"
  ]
},
{
  title: "LeetCode 500 Days Badge",
  description: "Awarded for solving problems consistently for 500 consecutive days on LeetCode, demonstrating perseverance and algorithmic expertise.",
  icon: Award,
  date: "2025",
  category: "Innovation",
  certificateUrl: "https://leetcode.com/u/abzaidi11/",
  highlights: [
    "500 consecutive days of coding practice",
    "Mastery in data structures and algorithms",
    "Strong problem-solving discipline"
  ]
},
{
  title: "Meta Hacker Cup 2024 — Top 50 in Pakistan",
  description: "Ranked among the top 50 competitors from Pakistan in the practice round of Meta's annual global competitive programming competition.",
  icon: Trophy,
  date: "2024",
  category: "Competition",
  certificateUrl: "https://tinyurl.com/4b7yr269",
  highlights: [
    "Competitive programming excellence",
    "High rank in a global contest",
    "Strong algorithmic and optimization skills"
  ]
},
{
  title: "Merit Scholarships — All Semesters",
  description: "Awarded scholarships every semester for maintaining a high GPA throughout undergraduate studies.",
  icon: Star,
  date: "2021-2025",
  category: "Innovation",
  certificateUrl: "https://tinyurl.com/yz76aaxe",
  highlights: [
    "Consistent academic excellence",
    "Strong GPA in Software Engineering",
    "Recognition for sustained performance"
  ]
},
{
  title: "The Complete 2023 Web Development Bootcamp",
  description: "Completed a comprehensive Udemy course covering full-stack web development with modern technologies and frameworks.",
  icon: Star,
  date: "2023",
  category: "Certification",
  certificateUrl: "https://tinyurl.com/26s88btr",
  highlights: [
    "HTML, CSS, JavaScript, Node.js, React",
    "Full-stack application development",
    "Hands-on project experience"
  ]
},
{
  title: "Edge Runners 3.2 Hackathon",
  description: "Participated in the Edge Runners 3.2 Hackathon, collaborating to develop innovative solutions under time constraints.",
  icon: Award,
  date: "2024",
  category: "Open Source",
  certificateUrl: "https://tinyurl.com/28jnuayj",
  highlights: [
    "Team-based innovation",
    "Problem-solving under pressure",
    "Prototype development and pitching"
  ]
},
{
  title: "LLaMA 3 Hackathon",
  description: "Contributed to a project leveraging Meta's LLaMA 3 model to create AI-driven solutions during a competitive hackathon.",
  icon: Award,
  date: "2024",
  category: "Open Source",
  certificateUrl: "https://tinyurl.com/353kzbt6",
  highlights: [
    "Hands-on experience with LLaMA 3",
    "Applied large language models to real-world problems",
    "Collaborative AI development"
  ]
},
{
  title: "Scientific Computing with Python",
  description: "Completed freeCodeCamp's Scientific Computing with Python 2 certification, covering advanced Python programming concepts and practical applications.",
  icon: Star,
  date: "2024",
  category: "Certification",
  certificateUrl: "https://tinyurl.com/fn8r6fcb",
  highlights: [
    "Mastery of Python fundamentals and advanced features",
    "Hands-on projects with data analysis and automation",
    "Experience with algorithms and problem-solving in Python"
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
            <span className="gradient-text">Achievements</span> & Certificates
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
                  className="w-full bg-primary/10 border-primary/30 hover:bg-primary/20 text-primary group-hover:scale-105 transition-transform duration-300 hover:text-cyan"
                  asChild
                >
                  <a href={achievement.certificateUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Achievement
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
                🎯 Next: AWS & DevOps Engineer Certification
              </Badge>
              <Badge variant="outline" className="border-accent/30 text-accent">
                📚 Learning: Advanced Docker & DevOps
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};