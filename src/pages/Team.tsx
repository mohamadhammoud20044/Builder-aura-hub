import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Linkedin,
  Twitter,
  Github,
  Award,
  Users,
  TrendingUp,
  Code,
  Brain,
  Shield,
  Smartphone,
  Globe,
  Cloud,
} from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Mohamad Hammoud",
      role: "CEO",
      image: "MH",
      bio: "Visionary leader driving COFTECH's technological innovation and strategic direction. Expert in both business leadership and hands-on technical implementation.",
      expertise: [
        "Strategic Leadership",
        "Technical Implementation",
        "Business Development",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Khallil Moussa Hammoud",
      role: "President",
      image: "KMH",
      bio: "Technical president overseeing COFTECH's development operations and programming excellence. Expert in software architecture and team leadership.",
      expertise: [
        "Software Development",
        "System Architecture",
        "Team Leadership",
      ],
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Firas Soufan",
      role: "CMO",
      image: "FS",
      bio: "Marketing and PR strategist driving COFTECH's market presence and customer engagement. Expert in digital marketing and brand positioning.",
      expertise: ["Digital Marketing", "Brand Strategy", "Customer Engagement"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Mohamad Ibrahim",
      role: "PR",
      image: "MI",
      bio: "Public relations expert leading COFTECH's brand presence and communication strategy. Specialized in building strong relationships with media and stakeholders.",
      expertise: ["Public Relations", "Brand Management", "Media Strategy"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Eliana",
      role: "PR",
      image: "EL",
      bio: "Public relations specialist focused on building COFTECH's brand awareness and maintaining strong relationships with clients and media partners.",
      expertise: ["Public Relations", "Communications", "Brand Awareness"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  const departments = [
    {
      icon: Brain,
      title: "Leadership & Strategy",
      description:
        "Executive leadership driving vision and strategic direction",
      count: "Core leadership",
    },
    {
      icon: Code,
      title: "Technical Development",
      description: "Programming and technical implementation expertise",
      count: "Development focus",
    },
    {
      icon: Users,
      title: "Public Relations",
      description: "Brand management and marketing communications",
      count: "PR & Marketing",
    },
    {
      icon: Globe,
      title: "Business Operations",
      description: "Comprehensive business and technology solutions",
      count: "Full-service team",
    },
  ];

  const stats = [
    { number: "5", label: "Core Team Members", icon: Users },
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Projects Delivered", icon: TrendingUp },
    { number: "20+", label: "Certifications", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-6 bg-gradient-ai border-0 text-white px-4 py-2">
              👥 Meet Our Team
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              The COFTECH Team
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Our diverse team of experts brings together deep technical
              knowledge, creative problem-solving, and a passion for innovation
              to deliver exceptional technology solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Leadership <span className="gradient-text">Team</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Meet the visionary leaders driving COFTECH's mission to deliver
                innovative technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {member.image}
                      </div>
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="text-gray-400 hover:text-primary transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="text-gray-400 hover:text-primary transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          className="text-gray-400 hover:text-primary transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Departments</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Specialized teams working together to deliver comprehensive
                technology solutions across all domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {departments.map((dept, index) => (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-ai rounded-full flex items-center justify-center">
                      <dept.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{dept.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {dept.description}
                    </p>
                    <Badge variant="outline" className="font-semibold">
                      {dept.count}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Culture & Values */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Culture</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We believe in fostering an environment of innovation,
                collaboration, and continuous learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Innovation First",
                  description:
                    "We encourage creative thinking and cutting-edge solutions",
                },
                {
                  title: "Collaboration",
                  description:
                    "Cross-functional teamwork drives our best results",
                },
                {
                  title: "Continuous Learning",
                  description: "We invest in our team's growth and development",
                },
                {
                  title: "Work-Life Balance",
                  description: "Flexible schedules and remote-friendly culture",
                },
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-ai rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-ai text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              We're always looking for talented individuals who are passionate
              about technology and making a difference. Join us in shaping the
              future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg"
              >
                View Open Positions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-gray-900"
              >
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
