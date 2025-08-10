import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    university: "University of Technology",
    duration: "2018 - 2022",
    cgpa: "3.8/4.0",
    highlights: [
      "Graduated Magna Cum Laude",
      "Dean's List for 6 semesters",
      "Computer Science Society President",
      "Published research on AI applications"
    ]
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    university: "Tech Academy",
    duration: "2022",
    cgpa: "Certification",
    highlights: [
      "Intensive 6-month program",
      "Top 5% of cohort",
      "Built 15+ real-world projects",
      "Mentored junior developers"
    ]
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 z-10 glow-effect"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="glass-card border-primary/20 card-hover">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-primary/20 rounded-lg">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          <Calendar className="w-3 h-3 mr-1" />
                          {edu.duration}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                      <p className="text-lg text-primary mb-2">{edu.university}</p>
                      
                      <div className="flex items-center mb-4">
                        <Award className="w-4 h-4 text-accent mr-2" />
                        <span className="text-accent font-semibold">{edu.cgpa}</span>
                      </div>

                      <div className="space-y-2">
                        {edu.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {highlight}
                          </div>
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