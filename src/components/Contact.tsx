import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "abubakar.zaidi03@gmail.com",
    href: "mailto:abubakar.zaidi03@gmail.com"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/abzaidi",
    href: "https://github.com/abzaidi"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/abubakarzaidi",
    href: "https://www.linkedin.com/in/abubakarzaidi"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Karachi, Pakistan",
    href: null
  }
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_fjsbgyl",     // <-- Replace
        "template_ztyu8pi",    // <-- Replace
        formData,
        "jjxsRZe8HdGPIL5yr"      // <-- Replace
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error sending message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together 
            to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in new opportunities, whether it's a full-time position, 
                freelance project, or just a technical discussion. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center group">
                  <div className="p-3 bg-primary/20 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-card border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:text-white"
                  asChild
                >
                  <a href="https://github.com/abzaidi" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-card border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:text-cyan"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/abubakarzaidi/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-card border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:text-cyan"
                  asChild
                >
                  <a href="mailto:abubakar.zaidi03@gmail.com">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-card border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="glass-card border-primary/20 focus:border-primary/50 bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="glass-card border-primary/20 focus:border-primary/50 bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hello!"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="glass-card border-primary/20 focus:border-primary/50 bg-background/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 mr-2 border-2 border-transparent border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you need a full-stack application, AI automation tools, or technical consulting, 
              I'm here to help bring your vision to reality with cutting-edge technology and best practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
                asChild
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScdfLkt3KfDYU-LEn4qzjuD3ArJx4FexpWbvM6iI67vJ8qdTA/viewform" target="_blank">
                  <Mail className="w-4 h-4 mr-2" />
                  Start a Conversation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};