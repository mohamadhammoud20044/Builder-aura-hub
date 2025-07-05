import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Clock,
  Users,
  Award,
  BookOpen,
  Video,
  CheckCircle,
  Star,
} from "lucide-react";

const Training = () => {
  const trainingPrograms = [
    {
      title: "AI Fundamentals",
      description: "Master the basics of AI and machine learning",
      level: "Beginner",
      duration: "4 weeks",
      lessons: 16,
      students: "2.1k",
      rating: 4.9,
      price: "Free",
      featured: true,
    },
    {
      title: "Conversational AI Development",
      description: "Build intelligent chatbots and virtual assistants",
      level: "Intermediate",
      duration: "6 weeks",
      lessons: 24,
      students: "1.5k",
      rating: 4.8,
      price: "$299",
    },
    {
      title: "Custom AI Solutions",
      description: "Create tailored AI applications for business",
      level: "Advanced",
      duration: "8 weeks",
      lessons: 32,
      students: "892",
      rating: 4.9,
      price: "$499",
    },
    {
      title: "AI Integration Masterclass",
      description: "Integrate AI services into existing systems",
      level: "Intermediate",
      duration: "5 weeks",
      lessons: 20,
      students: "1.2k",
      rating: 4.7,
      price: "$399",
    },
  ];

  const certifications = [
    {
      title: "COFTECH AI Certified Developer",
      description: "Validate your AI development skills",
      icon: Award,
      requirements: "Complete 2 training programs",
      validity: "2 years",
    },
    {
      title: "AI Integration Specialist",
      description: "Expert-level AI integration certification",
      icon: CheckCircle,
      requirements: "Complete Advanced program + project",
      validity: "2 years",
    },
    {
      title: "Conversational AI Expert",
      description: "Specialized chatbot development certification",
      icon: Star,
      requirements: "Complete Conversational AI program",
      validity: "2 years",
    },
  ];

  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals and AI researchers",
      icon: Users,
    },
    {
      title: "Hands-on Projects",
      description: "Build real-world AI applications throughout the course",
      icon: BookOpen,
    },
    {
      title: "Live Sessions",
      description: "Weekly live Q&A sessions with instructors",
      icon: Video,
    },
    {
      title: "Certification",
      description: "Earn industry-recognized certificates upon completion",
      icon: Award,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Header />

        <div className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800">
            <div className="container mx-auto px-4 text-center">
              <Badge className="mb-6 bg-gradient-ai border-0 text-white px-4 py-2">
                🎓 Training & Certification
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                Master AI Development
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Advance your career with comprehensive AI training programs.
                Learn from experts, build real projects, and earn
                industry-recognized certifications.
              </p>
              <div className="mt-8">
                <Button size="lg" className="bg-gradient-ai border-0 mr-4">
                  Start Learning
                </Button>
                <Button size="lg" variant="outline">
                  View Catalog
                </Button>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Why Choose COFTECH{" "}
                  <span className="gradient-text">Training</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Our training programs are designed by industry experts to give
                  you practical, job-ready skills
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {features.map((feature, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Training Programs */}
          <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Training <span className="gradient-text">Programs</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  From beginner to expert level, find the perfect program for
                  your learning journey
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {trainingPrograms.map((program, index) => (
                  <Card
                    key={index}
                    className={`relative overflow-hidden hover:shadow-lg transition-shadow ${
                      program.featured ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    {program.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-ai border-0 text-white">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{program.level}</Badge>
                        <div className="text-2xl font-bold">
                          {program.price}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {program.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Clock className="w-4 h-4 mr-2" />
                          {program.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <BookOpen className="w-4 h-4 mr-2" />
                          {program.lessons} lessons
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Users className="w-4 h-4 mr-2" />
                          {program.students} students
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Star className="w-4 h-4 mr-2 text-yellow-500" />
                          {program.rating}
                        </div>
                      </div>
                      <Button
                        className={`w-full ${
                          program.featured
                            ? "bg-gradient-ai border-0"
                            : undefined
                        }`}
                        variant={program.featured ? "default" : "outline"}
                      >
                        {program.price === "Free" ? "Start Free" : "Enroll Now"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Earn <span className="gradient-text">Certifications</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Validate your skills with industry-recognized certifications
                  that employers trust
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {certifications.map((cert, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-ai rounded-full flex items-center justify-center">
                        <cert.icon className="w-10 h-10 text-white" />
                      </div>
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {cert.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <p>
                          <strong>Requirements:</strong> {cert.requirements}
                        </p>
                        <p>
                          <strong>Valid for:</strong> {cert.validity}
                        </p>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Enterprise Training */}
              <div className="bg-gradient-ai text-white rounded-lg p-8 text-center">
                <GraduationCap className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">Enterprise Training</h3>
                <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
                  Custom training programs for your team. We'll work with you to
                  create a curriculum that meets your specific business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="px-8 py-6 text-lg"
                  >
                    Request Demo
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-gray-900"
                  >
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Success <span className="gradient-text">Stories</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Hear from professionals who advanced their careers with
                  COFTECH training
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah Chen",
                    role: "AI Developer at TechCorp",
                    quote:
                      "COFTECH training gave me the skills I needed to transition into AI development. The hands-on projects were invaluable.",
                    program: "AI Fundamentals + Conversational AI",
                  },
                  {
                    name: "Miguel Rodriguez",
                    role: "ML Engineer at StartupX",
                    quote:
                      "The certification helped me stand out in job interviews. The training is practical and directly applicable to real work.",
                    program: "Custom AI Solutions",
                  },
                  {
                    name: "Emily Johnson",
                    role: "Technical Lead at Enterprise Inc",
                    quote:
                      "Our entire team went through the enterprise training. It transformed how we approach AI integration in our products.",
                    program: "Enterprise Training",
                  },
                ].map((story, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                        "{story.quote}"
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-ai rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold">
                            {story.name[0]}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold">{story.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {story.role}
                          </p>
                          <p className="text-xs text-gray-500">
                            Completed: {story.program}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Training;
